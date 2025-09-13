
import { Settings, Database, Globe, Smartphone, Shield, Zap } from 'lucide-react'

/**
 * Services section component showcasing company offerings
 */
export default function Services() {
  const services = [
    {
      icon: <Settings size={32} className="text-blue-600" />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your specific business requirements."
    },
    {
      icon: <Database size={32} className="text-blue-600" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our advanced analytics solutions."
    },
    {
      icon: <Globe size={32} className="text-blue-600" />,
      title: "Web Development",
      description: "Modern, responsive websites that provide exceptional user experiences."
    },
    {
      icon: <Smartphone size={32} className="text-blue-600" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android devices."
    },
    {
      icon: <Shield size={32} className="text-blue-600" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from digital threats."
    },
    {
      icon: <Zap size={32} className="text-blue-600" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses."
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of technology services to help your business succeed.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
