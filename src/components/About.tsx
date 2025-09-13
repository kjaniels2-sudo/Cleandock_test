
import { CheckCircle } from 'lucide-react'

/**
 * About section component that introduces the company
 */
export default function About() {
  const features = [
    "10+ years of industry experience",
    "Expert team of professionals",
    "Client-focused approach",
    "Innovative solutions",
    "24/7 support availability"
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Our Company</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                We are dedicated to transforming businesses through innovative technology solutions. 
                Our team of experts works tirelessly to deliver exceptional results that drive growth 
                and efficiency for our clients.
              </p>
              <p className="text-gray-600 mb-8">
                With a focus on quality, reliability, and customer satisfaction, we have established 
                ourselves as a trusted partner for businesses of all sizes.
              </p>
              
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="https://pub-cdn.sider.ai/u/U0VEHZXLO64/web-coder/68b076a238697d89a138793c/resource/b86342c8-4809-4c22-a36f-4e1476ffd7ac.jpg" 
                alt="Modern office" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
