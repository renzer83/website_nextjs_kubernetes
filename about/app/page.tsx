import Image from "next/image";

// Team member data
const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    image: "https://ui-avatars.com/api/?name=Sarah+Chen&size=200&background=7c3aed&color=fff&bold=true",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-Founder",
    image: "https://ui-avatars.com/api/?name=Michael+Rodriguez&size=200&background=2563eb&color=fff&bold=true",
  },
  {
    name: "Emily Johnson",
    role: "Head of Product",
    image: "https://ui-avatars.com/api/?name=Emily+Johnson&size=200&background=7c3aed&color=fff&bold=true",
  },
  {
    name: "David Kim",
    role: "Lead AI Engineer",
    image: "https://ui-avatars.com/api/?name=David+Kim&size=200&background=2563eb&color=fff&bold=true",
  },
  {
    name: "Amanda Foster",
    role: "Head of Marketing",
    image: "https://ui-avatars.com/api/?name=Amanda+Foster&size=200&background=7c3aed&color=fff&bold=true",
  },
  {
    name: "James Wilson",
    role: "VP of Engineering",
    image: "https://ui-avatars.com/api/?name=James+Wilson&size=200&background=2563eb&color=fff&bold=true",
  },
];

// Company values
const values = [
  {
    title: "Innovation First",
    description: "We push boundaries and challenge the status quo to create breakthrough AI solutions.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description: "We believe in open communication and building trust through honesty and clarity.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Collaboration",
    description: "Together we achieve more. We foster a culture of teamwork and mutual support.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Impact Driven",
    description: "We measure success by the positive impact we create for our users and society.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

// Timeline events
const timeline = [
  {
    year: "2020",
    title: "The Beginning",
    description: "NexusAI was founded with a vision to democratize artificial intelligence.",
  },
  {
    year: "2021",
    title: "First Product Launch",
    description: "Released our flagship AI platform, serving over 1,000 early adopters.",
  },
  {
    year: "2022",
    title: "Series A Funding",
    description: "Raised $15M to accelerate product development and team growth.",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Expanded operations to 15 countries with 50,000+ active users.",
  },
  {
    year: "2024",
    title: "Industry Recognition",
    description: "Named as one of the most innovative AI companies by TechCrunch.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            About NexusAI
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Building the future of artificial intelligence, one innovation at a time
          </p>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Our Mission</h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            At NexusAI, we're on a mission to make advanced artificial intelligence accessible to everyone.
            We believe that AI should empower people, not replace them, and our technology is designed with
            this principle at its core.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            We're committed to building ethical, transparent, and powerful AI solutions that solve real-world
            problems while maintaining the highest standards of privacy and security.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-blue-600"></div>

            {timeline.map((event, index) => (
              <div
                key={index}
                className={`relative mb-16 animate-slide-in-left`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <span className="text-purple-400 font-bold text-lg">{event.year}</span>
                      <h3 className="text-xl font-bold text-white mt-2 mb-2">{event.title}</h3>
                      <p className="text-gray-300">{event.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-slate-950"></div>
                  <div className="w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">Meet Our Team</h2>
          <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            The brilliant minds behind NexusAI, working together to shape the future of AI
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-purple-500/50 group-hover:ring-purple-500 transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">{member.name}</h3>
                <p className="text-purple-400 text-center font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">Our Values</h2>
          <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            The principles that guide everything we do at NexusAI
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-blue-400 mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Investors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">Our Partners & Investors</h2>
          <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            Backed by world-class investors who share our vision
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((partner) => (
              <div
                key={partner}
                className="aspect-video bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg flex items-center justify-center hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${partner * 0.05}s` }}
              >
                <span className="text-gray-500 text-sm font-medium">Partner Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12 hover:border-purple-500/50 transition-all duration-300 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join Our Team</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about AI and want to make
              a real impact. Come build the future with us.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
              View Open Positions
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 NexusAI. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
