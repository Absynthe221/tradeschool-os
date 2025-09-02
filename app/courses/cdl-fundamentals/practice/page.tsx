import CDLPracticeExam from '@/components/cdl/CDLPracticeExam'

export const metadata = {
  title: 'CDL Practice Exam - Test Your Knowledge | TradeSchool OS',
  description: 'Take a comprehensive CDL practice exam with randomly generated questions covering vehicle inspection, safety practices, traffic laws, and more. Prepare for your commercial driver license test.',
  keywords: 'CDL practice exam, commercial driver license test, truck driving practice questions, CDL study guide',
  openGraph: {
    title: 'CDL Practice Exam - Test Your Knowledge',
    description: 'Comprehensive CDL practice exam with randomly generated questions',
    type: 'website',
  },
}

export default function CDLPracticePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">CDL Practice Exam</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Test your knowledge with our comprehensive practice exams. Choose from random questions, 
              specific categories, or difficulty levels to prepare for your commercial driver license test.
            </p>
          </div>
        </div>
      </div>
      
      <CDLPracticeExam />
    </div>
  )
}
