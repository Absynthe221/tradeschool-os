'use client'

import { useState, useEffect } from 'react'
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  Award, 
  RotateCcw,
  ChevronRight,
  Target,
  TrendingUp,
  Zap
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { hvacModule1KahootQuiz, hvacModule2KahootQuiz, hvacModule3KahootQuiz } from '@/data/hvac-complete-course'

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  points: number
  category: string
}

interface QuizComponentProps {
  lessonId: number
  title: string
  questions: number
  passingScore: number
  onComplete?: () => void
}

// Sample quiz questions for HVAC Fundamentals
const sampleQuestions: Question[] = [
  {
    id: 1,
    question: "What are the four main components of the refrigeration cycle?",
    options: [
      "Compressor, Condenser, Expansion Valve, Evaporator",
      "Compressor, Condenser, Filter, Evaporator", 
      "Pump, Condenser, Valve, Coil",
      "Motor, Heat Exchanger, Valve, Fan"
    ],
    correctAnswer: 0,
    explanation: "The refrigeration cycle consists of four main components: compressor (compresses refrigerant), condenser (releases heat), expansion valve (reduces pressure), and evaporator (absorbs heat).",
    points: 10,
    category: "Fundamentals"
  },
  {
    id: 2,
    question: "What is the primary purpose of a vacuum pump in HVAC work?",
    options: [
      "To remove air and moisture from the system",
      "To pressurize the system",
      "To clean the coils", 
      "To test electrical components"
    ],
    correctAnswer: 0,
    explanation: "Vacuum pumps remove air and moisture from refrigeration systems before charging with refrigerant, preventing contamination and ensuring proper operation.",
    points: 10,
    category: "Tools & Equipment"
  },
  {
    id: 3,
    question: "Which refrigerant requires EPA 608 certification to handle?",
    options: [
      "R-410A",
      "R-22", 
      "R-134A",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "EPA 608 certification is required to handle all regulated refrigerants including R-410A, R-22, and R-134A to prevent ozone depletion and ensure proper handling.",
    points: 10,
    category: "Safety & Regulations"
  },
  {
    id: 4,
    question: "What happens to refrigerant pressure as temperature increases?",
    options: [
      "Pressure decreases",
      "Pressure increases",
      "Pressure stays the same",
      "Pressure becomes unpredictable"
    ],
    correctAnswer: 1,
    explanation: "According to the pressure-temperature relationship, as refrigerant temperature increases, the pressure also increases. This is fundamental to understanding how HVAC systems operate.",
    points: 10,
    category: "Fundamentals"
  },
  {
    id: 5,
    question: "Which component is responsible for rejecting heat in an air conditioning system?",
    options: [
      "Evaporator",
      "Condenser",
      "Compressor", 
      "Expansion valve"
    ],
    correctAnswer: 1,
    explanation: "The condenser is responsible for rejecting heat from the refrigeration system to the outdoor environment, allowing the refrigerant to condense from vapor to liquid.",
    points: 10,
    category: "System Components"
  }
]

export function QuizComponent({ lessonId, title, questions, passingScore, onComplete }: QuizComponentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [showResult, setShowResult] = useState(false)
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutes
  const [quizStarted, setQuizStarted] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)

  // Use actual HVAC quiz content based on lesson ID
  const getQuizQuestions = () => {
    switch(lessonId) {
      case 1:
        return hvacModule1KahootQuiz.map((q, index) => ({
          id: index + 1,
          question: q.question,
          options: q.options || ['True', 'False'],
          correctAnswer: q.options ? q.options.findIndex(opt => opt === q.correctAnswer) : (q.correctAnswer === 'True' ? 0 : 1),
          explanation: `Correct! ${q.question}`,
          points: q.points / 100, // Convert Kahoot points to quiz points
          category: 'HVAC Fundamentals'
        }))
      case 2:
        return hvacModule2KahootQuiz.map((q, index) => ({
          id: index + 1,
          question: q.question,
          options: q.options || ['True', 'False'],
          correctAnswer: q.options ? q.options.findIndex(opt => opt === q.correctAnswer) : (q.correctAnswer === 'True' ? 0 : 1),
          explanation: `Correct! ${q.question}`,
          points: q.points / 100,
          category: 'HVAC Safety'
        }))
      case 3:
        return hvacModule3KahootQuiz.map((q, index) => ({
          id: index + 1,
          question: q.question,
          options: q.options || ['True', 'False'],
          correctAnswer: q.options ? q.options.findIndex(opt => opt === q.correctAnswer) : (q.correctAnswer === 'True' ? 0 : 1),
          explanation: `Correct! ${q.question}`,
          points: q.points / 100,
          category: 'Heat Transfer'
        }))
      default:
        return sampleQuestions.slice(0, questions)
    }
  }

  const quizQuestions = getQuizQuestions()
  const totalPoints = quizQuestions.reduce((sum, q) => sum + q.points, 0)

  // Timer effect
  useEffect(() => {
    if (quizStarted && !quizCompleted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && !quizCompleted) {
      handleQuizComplete()
    }
  }, [timeLeft, quizStarted, quizCompleted])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const startQuiz = () => {
    setQuizStarted(true)
    setAnswers(new Array(quizQuestions.length).fill(null))
  }

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return

    const newAnswers = [...answers]
    newAnswers[currentQuestion] = selectedAnswer
    setAnswers(newAnswers)

    const isCorrect = selectedAnswer === quizQuestions[currentQuestion].correctAnswer
    
    if (isCorrect) {
      setScore(score + quizQuestions[currentQuestion].points)
      setStreak(streak + 1)
      setMaxStreak(Math.max(maxStreak, streak + 1))
    } else {
      setStreak(0)
    }

    setShowResult(true)

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setShowResult(false)
      } else {
        handleQuizComplete()
      }
    }, 2000)
  }

  const handleQuizComplete = () => {
    setQuizCompleted(true)
    const finalScore = (score / totalPoints) * 100
    
    if (finalScore >= passingScore) {
      onComplete?.()
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setAnswers([])
    setShowResult(false)
    setTimeLeft(600)
    setQuizStarted(false)
    setQuizCompleted(false)
    setScore(0)
    setStreak(0)
    setMaxStreak(0)
  }

  const currentQ = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100
  const finalScore = (score / totalPoints) * 100

  if (!quizStarted) {
    return (
      <div className="p-8 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="w-8 h-8 text-primary-600" />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready for the Quiz?
          </h3>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Questions:</span>
              <span className="font-medium">{questions}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Time Limit:</span>
              <span className="font-medium">10 minutes</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Passing Score:</span>
              <span className="font-medium">{passingScore}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Total Points:</span>
              <span className="font-medium">{totalPoints}</span>
            </div>
          </div>

          <button
            onClick={startQuiz}
            className="btn-primary w-full text-lg py-3"
          >
            Start Quiz
          </button>
        </div>
      </div>
    )
  }

  if (quizCompleted) {
    const passed = finalScore >= passingScore
    
    return (
      <div className="p-8 text-center">
        <div className="max-w-md mx-auto">
          <div className={cn(
            "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6",
            passed ? "bg-trade-100" : "bg-red-100"
          )}>
            {passed ? (
              <Award className="w-10 h-10 text-trade-600" />
            ) : (
              <XCircle className="w-10 h-10 text-red-600" />
            )}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {passed ? "Congratulations!" : "Keep Learning!"}
          </h3>
          
          <p className="text-gray-600 mb-6">
            {passed 
              ? "You've successfully completed the quiz!"
              : `You need ${passingScore}% to pass. Review the material and try again.`
            }
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="text-4xl font-bold text-gray-900 mb-2">
              {Math.round(finalScore)}%
            </div>
            <div className="text-gray-600 mb-4">Final Score</div>
            
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="font-bold text-gray-900">{score}</div>
                <div className="text-gray-500">Points Earned</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-900">
                  {answers.filter((answer, index) => answer === quizQuestions[index]?.correctAnswer).length}
                </div>
                <div className="text-gray-500">Correct</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-900">{maxStreak}</div>
                <div className="text-gray-500">Best Streak</div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {passed && (
              <button
                onClick={() => onComplete?.()}
                className="btn-primary w-full"
              >
                Continue to Next Lesson
              </button>
            )}
            
            <button
              onClick={restartQuiz}
              className="btn-secondary w-full flex items-center justify-center"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </div>
          {streak > 0 && (
            <div className="flex items-center bg-trade-100 text-trade-700 px-3 py-1 rounded-full text-sm">
              <Zap className="w-4 h-4 mr-1" />
              {streak} streak!
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600">
            Score: {score}/{totalPoints}
          </div>
          <div className="flex items-center text-primary-600">
            <Clock className="w-4 h-4 mr-1" />
            <span className="font-mono">{formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* Question */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-6">
          <div className="mb-2">
            <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
              {currentQ.category}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            {currentQ.question}
          </h3>

          <div className="space-y-3">
            {currentQ.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrect = index === currentQ.correctAnswer
              const isWrong = showResult && isSelected && !isCorrect
              const shouldHighlight = showResult && isCorrect

              return (
                <button
                  key={index}
                  onClick={() => !showResult && handleAnswerSelect(index)}
                  disabled={showResult}
                  className={cn(
                    "w-full p-4 text-left rounded-lg border-2 transition-all duration-200",
                    isSelected && !showResult && "border-primary-500 bg-primary-50",
                    !isSelected && !showResult && "border-gray-200 hover:border-primary-300 hover:bg-gray-50",
                    shouldHighlight && "border-trade-500 bg-trade-50",
                    isWrong && "border-red-500 bg-red-50",
                    showResult && !shouldHighlight && !isWrong && "border-gray-200 bg-gray-50"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className={cn(
                      "font-medium",
                      isSelected && !showResult && "text-primary-700",
                      shouldHighlight && "text-trade-700",
                      isWrong && "text-red-700"
                    )}>
                      {option}
                    </span>
                    
                    {showResult && (
                      <div>
                        {shouldHighlight && <CheckCircle className="w-6 h-6 text-trade-500" />}
                        {isWrong && <XCircle className="w-6 h-6 text-red-500" />}
                      </div>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Explanation */}
        {showResult && (
          <div className="bg-blue-50 rounded-lg p-6 mb-6 animate-fade-in">
            <h4 className="font-medium text-blue-900 mb-2">Explanation</h4>
            <p className="text-blue-800">{currentQ.explanation}</p>
          </div>
        )}

        {/* Action Button */}
        {!showResult && (
          <div className="text-center">
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className="btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}



