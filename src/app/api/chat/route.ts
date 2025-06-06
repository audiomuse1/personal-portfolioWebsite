import { NextRequest, NextResponse } from "next/server";
import Together from "together-ai";

export const runtime = "nodejs";

const together = new Together({
  apiKey: process.env.TOGETHER_API_KEY,
});

const portfolioContext = `
You are a helpful assistant for Andrew H's portfolio site.
Here is some background about Andrew:

SUMMARY:
Full Stack Developer with 5+ years of experience delivering scalable e-commerce and internal software solutions. Proficient in React, TypeScript, PHP/Symfony, Node.js, and MySQL. Experienced in API-driven development, CI/CD workflows, and payment integrations. Familiar with Docker environments, political finance systems, and tax compliance software. Passionate about fintech innovation and collaborative teams.

EXPERIENCE:
- Full Stack Developer at Bright Blue Ink (2018-present, Austin, TX): Led 50+ BigCommerce and Shopify stores including a presidential store; built product customization widgets; integrated payment gateways and third-party apps like Ordoro, Avalara, TaxJar; contributed to Excalidraw fork; automated order updates via BigCommerce API; managed cloud infrastructure and Docker workflows.
- Front-end Developer Intern at Austin Devs (2018)
- Laboratory Chemical Analyst II at DHL Analytical (2016-2018)

EDUCATION:
- Certificate, Full Stack Web Development, Austin Coding Academy, 2016
- B.S. Chemistry, University of Texas at Austin, 2015

CERTIFICATIONS:
- Object Oriented Programming in PHP, London Academy of IT, 2023

SKILLS:
Frontend: React, JavaScript, TypeScript, HTML5, CSS, SCSS, Bootstrap, Redux, BigCommerce, Shopify, SEO, Responsive Design
Backend: Node.js, PHP, Symfony, Express
Databases & Version Control: MongoDB, MySQL, Git
AI Tools: Microsoft Copilot, Prompting Techniques, AI Chat Tools

PROJECTS:
- Biden Campaign Store: Official merchandise store for Joe Biden's presidential campaign. Experience with responsive design, branding, and fast-paced campaign updates. https://shop.joebiden.com
- Bulk Custom Stickers Portal: Custom ordering system for large sticker orders. Built with React. https://print.bumperactive.com
- Interactive Heatmap Dashboard: Data visualization tool using D3.js and React.
- Colorify App: Color palette generator with Anime.js animations.
- Custom Sticker Designer: Extended Excalidraw fork with font processing, canvas API.
- UEP Email Notifications Service: Node.js microservice processing BigCommerce webhooks, AWS SES email notifications, Dockerized.

Use this information to answer user questions accurately and informatively.
`.trim();

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const response = await together.chat.completions.create({
      model: "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free", 
      messages: [
        {
          role: "system",
          content: portfolioContext,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return NextResponse.json({ 
      reply: response.choices?.[0]?.message?.content ?? "No response from AI." 
    });
  } catch (error) {
    console.error("Together API error:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}