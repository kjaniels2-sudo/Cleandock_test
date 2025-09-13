
import { Users } from 'lucide-react'

/**
 * Team section component showcasing company team members
 */
export default function Team() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      position: "CEO & Founder",
      bio: "Visionary leader with 15+ years of experience in technology and business strategy."
    },
    {
      name: "Sarah Williams",
      position: "CTO",
      bio: "Technical expert specializing in software architecture and emerging technologies."
    },
    {
      name: "Michael Chen",
      position: "Head of Design",
      bio: "Creative professional focused on user experience and innovative design solutions."
    },
    {
      name: "Emily Rodriguez",
      position: "Operations Director",
      bio: "Efficiency expert ensuring smooth operations and exceptional client service."
    }
  ]

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our talented team is dedicated to delivering exceptional results for our clients.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                  <Users size={40} className="text-gray-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{member.position}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
