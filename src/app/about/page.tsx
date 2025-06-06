// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-8 mt-8">
      <div className="max-w-4xl mx-auto">
        <section>
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="prose prose-lg prose-neutral">
            Hi, I'm Andrew a developer based in Austin, TX.  I came to Austin to study Chemistry at the University of Texas, but along the way, I discovered a love for technology and building things with code. That passion led me through a full-stack coding bootcamp and into a career I genuinely enjoy every day.
            <br></br>
            <br></br>
            I'm not just a developer, I'm a communicator, problem-solver, and someone who cares deeply about the impact of technology. I bring a strong work ethic, clear communication, and a collaborative mindset to every project I take on. Over the years, I’ve worked extensively in eCommerce, building tools that don’t just work they make a difference for real people and businesses.
            <br></br>
            <br></br>
            When I’m not coding, you’ll probably find me biking around Austin, exploring Texas on weekend day trips, or supporting local small businesses. I’m passionate about sustainability, mass transit, and making cities better places to live. I also follow politics and environmental issues closely, and lately, I’ve been diving into the world of AI and its potential to transform how we work and live.
          </p>
          {/* Add more details here */}
        </section>
      </div>
    </div>
  );
}