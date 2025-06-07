// src/app/about/page.tsx
import PageHeading from '../../components/PageHeading'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeading>About Me</PageHeading>
      <div className="w-full mx-auto">
        <section>
          <p className="prose prose-lg prose-neutral">
            Hi, I'm Andrew a developer based in Austin, TX.  I came to Austin to study Chemistry at the University of Texas, and along the way, I discovered a love for technology and building things with code. That passion led me into a career I genuinely enjoy today.
            <br></br>
            <br></br>
            I'm someone who's fascinated by the ways technology shapes society, especially where it intersects with politics, policy, and real-world impact. I care about building tools that are not only functional but thoughtful solutions that support people, communities, and transparency. My background in Ecommerce has taught me how to deliver under pressure, but what drives me most is the chance to work on projects that live at the edge of systems, where technology influences how we live, decide, and connect.            <br></br>
            <br></br>
            In my free-time, I enjoy biking, staying up-to-date on politics (especially locally), learning new things.
          </p>
          {/* Add more details here */}
        </section>
      </div>
    </div>
  )
}