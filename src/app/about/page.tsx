// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-8 mt-8">
      <div className="max-w-4xl mx-auto">
        <section>
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="max-w-prose">
            I was born in San Antonio, TX in 1992. I currently live in Austin, TX
            and have been here since attending the University of Texas. My passions
            and interests include biking, supporting local businesses, politics,
            mass transit, environmental issues, going on daytrips around Texas, and
            technology.
          </p>
          {/* Add more details here */}
        </section>
      </div>
    </div>
  );
}