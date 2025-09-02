import Link from 'next/link'
import { 
  Snowflake, 
  Zap, 
  Droplets, 
  Flame, 
  Building, 
  Sun, 
  Bot,
  Truck,
  ArrowRight,
  Clock,
  Users,
  Star
} from 'lucide-react'

const tradeModules = [
  {
    id: 'hvac',
    name: 'HVAC Systems',
    icon: Snowflake,
    description: 'Heating, Ventilation, and Air Conditioning fundamentals, installation, and maintenance.',
    status: 'available',
    courses: 12,
    students: 2840,
    rating: 4.8,
    duration: '40-60 hours',
    level: 'Beginner to Advanced',
    featured: true,
    color: 'hvac'
  },
  {
    id: 'cdl',
    name: 'CDL Training',
    icon: Truck,
    description: 'Commercial Driver License training, vehicle inspection, safety practices, and road test preparation.',
    status: 'available',
    courses: 8,
    students: 1250,
    rating: 4.8,
    duration: '26 hours',
    level: 'Beginner',
    featured: false,
    color: 'blue'
  },
  {
    id: 'electrical',
    name: 'Electrical Systems',
    icon: Zap,
    description: 'Residential and commercial electrical installation, troubleshooting, and safety.',
    status: 'coming-soon',
    courses: 8,
    students: 1520,
    rating: 4.7,
    duration: '35-50 hours',
    level: 'Beginner to Advanced',
    featured: false,
    color: 'yellow'
  },
  {
    id: 'plumbing',
    name: 'Plumbing',
    icon: Droplets,
    description: 'Water systems, pipe installation, fixtures, and emergency repairs.',
    status: 'coming-soon',
    courses: 6,
    students: 980,
    rating: 4.6,
    duration: '25-40 hours',
    level: 'Beginner to Intermediate',
    featured: false,
    color: 'blue'
  },
  {
    id: 'welding',
    name: 'Welding',
    icon: Flame,
    description: 'Arc welding, MIG, TIG, and fabrication techniques for various materials.',
    status: 'coming-soon',
    courses: 10,
    students: 1240,
    rating: 4.9,
    duration: '45-70 hours',
    level: 'Beginner to Advanced',
    featured: false,
    color: 'orange'
  },
  {
    id: 'construction',
    name: 'Construction',
    icon: Building,
    description: 'Building fundamentals, framing, concrete work, and project management.',
    status: 'coming-soon',
    courses: 15,
    students: 3200,
    rating: 4.5,
    duration: '60-90 hours',
    level: 'Beginner to Advanced',
    featured: false,
    color: 'gray'
  },
  {
    id: 'solar',
    name: 'Solar Energy',
    icon: Sun,
    description: 'Solar panel installation, energy systems, and renewable technology.',
    status: 'coming-soon',
    courses: 7,
    students: 760,
    rating: 4.8,
    duration: '30-45 hours',
    level: 'Intermediate to Advanced',
    featured: false,
    color: 'green'
  },
  {
    id: 'robotics',
    name: 'Robotics & Automation',
    icon: Bot,
    description: 'Industrial automation, robotics programming, and smart systems.',
    status: 'coming-soon',
    courses: 9,
    students: 420,
    rating: 4.7,
    duration: '50-75 hours',
    level: 'Intermediate to Advanced',
    featured: false,
    color: 'purple'
  }
]

export function TradeModules() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Master Multiple Skilled Trades
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with HVAC fundamentals and expand your skills across multiple trade disciplines. 
            Same learning engine, same high-quality training, different specializations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Featured HVAC Course */}
          {tradeModules
            .filter(module => module.featured)
            .map((module) => {
              const Icon = module.icon
              return (
                <div key={module.id} className="lg:col-span-2">
                  <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                    
                    <div className="relative">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                          <Icon className="w-8 h-8" />
                        </div>
                        <div>
                          <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-2">
                            🔥 Now Available
                          </div>
                          <h3 className="text-2xl font-bold">{module.name}</h3>
                        </div>
                      </div>
                      
                      <p className="text-blue-100 mb-6 text-lg">
                        {module.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-center text-sm text-blue-100 mb-1">
                            <Clock className="w-4 h-4 mr-2" />
                            Duration
                          </div>
                          <div className="font-semibold">{module.duration}</div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-center text-sm text-blue-100 mb-1">
                            <Users className="w-4 h-4 mr-2" />
                            Students
                          </div>
                          <div className="font-semibold">{module.students.toLocaleString()}</div>
                        </div>
                      </div>
                      
                      <Link
                        href="/courses/hvac-fundamentals"
                        className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
                      >
                        Start HVAC Training
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}

          {/* Quick stats */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Platform Stats</h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Students</span>
                  <span className="font-semibold text-gray-900">10,960+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Courses Available</span>
                  <span className="font-semibold text-gray-900">67</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg. Rating</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-semibold text-gray-900">4.7</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Completion Rate</span>
                  <span className="font-semibold text-gray-900">89%</span>
                </div>
              </div>
            </div>

            <div className="bg-trade-50 rounded-xl p-6 border border-trade-200">
              <h4 className="font-semibold text-trade-800 mb-2">🎯 Learning Path</h4>
              <p className="text-sm text-trade-700 mb-4">
                Start with HVAC fundamentals and progress through our structured curriculum.
              </p>
              <Link
                href="/learning-path"
                className="text-trade-600 hover:text-trade-700 text-sm font-medium"
              >
                View Learning Path →
              </Link>
            </div>
          </div>
        </div>

        {/* Other trade modules */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tradeModules
            .filter(module => !module.featured)
            .map((module, index) => {
              const Icon = module.icon
              
              return (
                <div 
                  key={module.id}
                  className={`group bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 ${module.status === 'coming-soon' ? 'opacity-75' : ''}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-gray-100 text-gray-600`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{module.name}</h3>
                      <p className="text-sm text-gray-500">{module.level}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {module.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{module.courses} courses</span>
                    <span>{module.students.toLocaleString()} students</span>
                  </div>
                  
                  {module.status === 'available' ? (
                    <Link
                      href={module.id === 'cdl' ? '/courses/cdl-fundamentals' : '/courses/hvac-fundamentals'}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      Start Learning
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  ) : (
                    <div className="inline-flex items-center text-gray-500 font-medium text-sm">
                      <Clock className="mr-2 w-4 h-4" />
                      Coming Soon
                    </div>
                  )}
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}

