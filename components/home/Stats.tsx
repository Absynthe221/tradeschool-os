import { Users, Award, Clock, MapPin } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '10,960+',
    label: 'Active Students',
    description: 'Learning skilled trades globally',
    color: 'primary'
  },
  {
    icon: Award,
    value: '4,230',
    label: 'Certificates Issued',
    description: 'Industry-recognized credentials',
    color: 'trade'
  },
  {
    icon: Clock,
    value: '450,000+',
    label: 'Hours Trained',
    description: 'Hands-on learning time',
    color: 'hvac'
  },
  {
    icon: MapPin,
    value: '85',
    label: 'Training Sites',
    description: 'Real deployment locations',
    color: 'primary'
  }
]

export function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-hvac-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by Thousands Worldwide
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our platform is making a real impact in skilled trades education, 
            helping students build successful careers in high-demand industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            const colorClasses = {
              primary: 'from-primary-400 to-primary-600',
              trade: 'from-trade-400 to-trade-600',
              hvac: 'from-hvac-400 to-hvac-600'
            }
            
            return (
              <div 
                key={stat.label}
                className="text-center group animate-enter"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${colorClasses[stat.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                
                <div className="text-lg font-semibold text-gray-200 mb-1">
                  {stat.label}
                </div>
                
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional metrics */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold mb-4">Global Reach</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">North America</span>
                <span className="text-white font-medium">6,240 students</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Africa</span>
                <span className="text-white font-medium">3,180 students</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Asia Pacific</span>
                <span className="text-white font-medium">1,540 students</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold mb-4">Employment Success</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Job Placement Rate</span>
                <span className="text-trade-400 font-medium">94%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Avg. Salary Increase</span>
                <span className="text-trade-400 font-medium">+$18,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Career Advancement</span>
                <span className="text-trade-400 font-medium">78%</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold mb-4">Learning Outcomes</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Course Completion</span>
                <span className="text-hvac-400 font-medium">89%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Certification Pass Rate</span>
                <span className="text-hvac-400 font-medium">92%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Student Satisfaction</span>
                <span className="text-hvac-400 font-medium">4.8/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

