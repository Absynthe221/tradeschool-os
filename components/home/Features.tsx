import { 
  Video, 
  Trophy, 
  Shield, 
  RefreshCw, 
  QrCode, 
  Smartphone,
  Clock,
  Users
} from 'lucide-react'

const features = [
  {
    icon: Video,
    title: 'Short Video Lessons',
    description: 'Bite-sized 5-8 minute videos optimized for mobile and offline viewing. Learn at your own pace.',
    color: 'primary'
  },
  {
    icon: Trophy,
    title: 'Kahoot-Style Quizzes',
    description: 'Gamified learning with interactive quizzes, leaderboards, and badges to track your progress.',
    color: 'trade'
  },
  {
    icon: Shield,
    title: 'Exam Integrity',
    description: 'Secure proctored exams with camera monitoring and randomized questions for certification.',
    color: 'hvac'
  },
  {
    icon: RefreshCw,
    title: 'Recurrent Training',
    description: 'Scheduled refresher courses every 6-12 months with automated reminders to stay current.',
    color: 'primary'
  },
  {
    icon: QrCode,
    title: 'QR-Enabled Equipment',
    description: 'Every system includes QR codes linking to training videos and technical documentation.',
    color: 'trade'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'PWA optimized for low-bandwidth environments. Works offline with sync when connected.',
    color: 'hvac'
  },
  {
    icon: Clock,
    title: 'Apprenticeship Tracking',
    description: 'Log hours and get supervisor validation for formal apprenticeship programs.',
    color: 'primary'
  },
  {
    icon: Users,
    title: 'Train-Where-Deployed',
    description: 'Every installation site becomes a training classroom for hands-on experience.',
    color: 'trade'
  }
]

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Master Skilled Trades
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines modern learning technology with real-world 
            hands-on training to prepare you for successful careers in skilled trades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const colorClasses = {
              primary: 'bg-primary-100 text-primary-600',
              trade: 'bg-trade-100 text-trade-600',
              hvac: 'bg-hvac-100 text-hvac-600'
            }
            
            return (
              <div 
                key={feature.title}
                className="group p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 animate-enter"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-lg ${colorClasses[feature.color as keyof typeof colorClasses]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-hvac-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of students already mastering skilled trades through our platform.
              Start with HVAC fundamentals and expand to other trades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Browse HVAC Courses
              </button>
              <button className="btn-secondary">
                View Equipment Kits
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

