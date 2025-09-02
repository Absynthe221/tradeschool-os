'use client'

import { useState, useCallback } from 'react'
import { cn } from '@/lib/utils'
import { 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  DragHandleDots2Icon as Grip,
  Clock,
  Flag,
  Lightbulb
} from 'lucide-react'

interface QuestionProps {
  question: {
    id: string
    type: string
    question: string
    options?: string[]
    correctAnswer: string | string[]
    explanation: string
    difficulty: 'easy' | 'medium' | 'hard'
    points: number
  }
  onAnswer: (answer: string | string[], isCorrect: boolean) => void
  showResult?: boolean
  userAnswer?: string | string[]
}

// Multiple Choice Question
export function MultipleChoiceQuestion({ question, onAnswer, showResult, userAnswer }: QuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>(userAnswer as string || '')

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer)
    const isCorrect = answer === question.correctAnswer
    onAnswer(answer, isCorrect)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-gray-900 flex-1">{question.question}</h3>
        <div className="flex items-center space-x-2 ml-4">
          <span className={cn(
            "px-2 py-1 text-xs font-medium rounded-full",
            question.difficulty === 'easy' ? "bg-green-100 text-green-800" :
            question.difficulty === 'medium' ? "bg-yellow-100 text-yellow-800" :
            "bg-red-100 text-red-800"
          )}>
            {question.difficulty}
          </span>
          <span className="text-sm text-gray-500">{question.points} pts</span>
        </div>
      </div>

      <div className="space-y-3">
        {question.options?.map((option, index) => {
          const isSelected = selectedAnswer === option
          const isCorrect = option === question.correctAnswer
          const showCorrect = showResult && isCorrect
          const showIncorrect = showResult && isSelected && !isCorrect

          return (
            <button
              key={index}
              onClick={() => !showResult && handleAnswer(option)}
              disabled={showResult}
              className={cn(
                "w-full text-left p-4 border-2 rounded-lg transition-all duration-200",
                "hover:border-blue-300 focus:border-blue-500 focus:outline-none",
                showCorrect && "border-green-500 bg-green-50",
                showIncorrect && "border-red-500 bg-red-50",
                isSelected && !showResult && "border-blue-500 bg-blue-50",
                !isSelected && !showCorrect && !showIncorrect && "border-gray-200"
              )}
            >
              <div className="flex items-center justify-between">
                <span className={cn(
                  "font-medium",
                  showCorrect && "text-green-900",
                  showIncorrect && "text-red-900",
                  !showResult && isSelected && "text-blue-900"
                )}>
                  {String.fromCharCode(65 + index)}. {option}
                </span>
                {showCorrect && <CheckCircle className="h-5 w-5 text-green-600" />}
                {showIncorrect && <XCircle className="h-5 w-5 text-red-600" />}
              </div>
            </button>
          )
        })}
      </div>

      {showResult && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-blue-900 mb-1">Explanation</h4>
              <p className="text-blue-800 text-sm">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// True/False Question
export function TrueFalseQuestion({ question, onAnswer, showResult, userAnswer }: QuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>(userAnswer as string || '')

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer)
    const isCorrect = answer === question.correctAnswer
    onAnswer(answer, isCorrect)
  }

  const options = ['True', 'False']

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-gray-900 flex-1">{question.question}</h3>
        <div className="flex items-center space-x-2 ml-4">
          <span className={cn(
            "px-2 py-1 text-xs font-medium rounded-full",
            question.difficulty === 'easy' ? "bg-green-100 text-green-800" :
            question.difficulty === 'medium' ? "bg-yellow-100 text-yellow-800" :
            "bg-red-100 text-red-800"
          )}>
            {question.difficulty}
          </span>
          <span className="text-sm text-gray-500">{question.points} pts</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {options.map((option) => {
          const isSelected = selectedAnswer === option
          const isCorrect = option === question.correctAnswer
          const showCorrect = showResult && isCorrect
          const showIncorrect = showResult && isSelected && !isCorrect

          return (
            <button
              key={option}
              onClick={() => !showResult && handleAnswer(option)}
              disabled={showResult}
              className={cn(
                "p-6 border-2 rounded-lg transition-all duration-200 text-center font-medium",
                "hover:border-blue-300 focus:border-blue-500 focus:outline-none",
                showCorrect && "border-green-500 bg-green-50 text-green-900",
                showIncorrect && "border-red-500 bg-red-50 text-red-900",
                isSelected && !showResult && "border-blue-500 bg-blue-50 text-blue-900",
                !isSelected && !showCorrect && !showIncorrect && "border-gray-200"
              )}
            >
              <div className="flex items-center justify-center space-x-2">
                <span className="text-lg">{option}</span>
                {showCorrect && <CheckCircle className="h-5 w-5" />}
                {showIncorrect && <XCircle className="h-5 w-5" />}
              </div>
            </button>
          )
        })}
      </div>

      {showResult && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-blue-900 mb-1">Explanation</h4>
              <p className="text-blue-800 text-sm">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Short Answer Question
export function ShortAnswerQuestion({ question, onAnswer, showResult, userAnswer }: QuestionProps) {
  const [answer, setAnswer] = useState<string>(userAnswer as string || '')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (answer.trim()) {
      setSubmitted(true)
      // For short answer, we'll do basic keyword matching
      const correctKeywords = (question.correctAnswer as string).toLowerCase().split(' ')
      const userKeywords = answer.toLowerCase().split(' ')
      const matchCount = correctKeywords.filter(keyword => 
        userKeywords.some(userKeyword => userKeyword.includes(keyword) || keyword.includes(userKeyword))
      ).length
      const isCorrect = matchCount >= correctKeywords.length * 0.6 // 60% keyword match threshold
      onAnswer(answer, isCorrect)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-gray-900 flex-1">{question.question}</h3>
        <div className="flex items-center space-x-2 ml-4">
          <span className={cn(
            "px-2 py-1 text-xs font-medium rounded-full",
            question.difficulty === 'easy' ? "bg-green-100 text-green-800" :
            question.difficulty === 'medium' ? "bg-yellow-100 text-yellow-800" :
            "bg-red-100 text-red-800"
          )}>
            {question.difficulty}
          </span>
          <span className="text-sm text-gray-500">{question.points} pts</span>
        </div>
      </div>

      <div className="space-y-4">
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={showResult || submitted}
          placeholder="Type your answer here..."
          className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
          rows={4}
        />

        {!submitted && !showResult && (
          <button
            onClick={handleSubmit}
            disabled={!answer.trim()}
            className={cn(
              "px-6 py-2 rounded-lg font-medium transition-colors",
              answer.trim()
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            )}
          >
            Submit Answer
          </button>
        )}
      </div>

      {(showResult || submitted) && (
        <div className="space-y-4">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Sample Answer:</h4>
            <p className="text-gray-700 text-sm">{question.correctAnswer}</p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-blue-900 mb-1">Explanation</h4>
                <p className="text-blue-800 text-sm">{question.explanation}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Scenario Question
export function ScenarioQuestion({ question, onAnswer, showResult, userAnswer }: QuestionProps) {
  const [answer, setAnswer] = useState<string>(userAnswer as string || '')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (answer.trim()) {
      setSubmitted(true)
      // For scenarios, we'll use a more sophisticated scoring
      const correctKeywords = (question.correctAnswer as string).toLowerCase().split(' ')
      const userKeywords = answer.toLowerCase().split(' ')
      const matchCount = correctKeywords.filter(keyword => 
        userKeywords.some(userKeyword => userKeyword.includes(keyword) || keyword.includes(userKeyword))
      ).length
      const isCorrect = matchCount >= correctKeywords.length * 0.5 // 50% threshold for scenarios
      onAnswer(answer, isCorrect)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-3">
            <AlertCircle className="h-5 w-5 text-orange-500" />
            <span className="text-sm font-medium text-orange-700">Scenario-Based Question</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{question.question}</h3>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          <span className={cn(
            "px-2 py-1 text-xs font-medium rounded-full",
            question.difficulty === 'easy' ? "bg-green-100 text-green-800" :
            question.difficulty === 'medium' ? "bg-yellow-100 text-yellow-800" :
            "bg-red-100 text-red-800"
          )}>
            {question.difficulty}
          </span>
          <span className="text-sm text-gray-500">{question.points} pts</span>
        </div>
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Flag className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-orange-900 mb-1">Instructions</h4>
            <p className="text-orange-800 text-sm">
              Describe your step-by-step approach to handle this scenario. Consider safety, efficiency, and local conditions.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={showResult || submitted}
          placeholder="Describe your approach step by step..."
          className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
          rows={6}
        />

        {!submitted && !showResult && (
          <button
            onClick={handleSubmit}
            disabled={!answer.trim()}
            className={cn(
              "px-6 py-2 rounded-lg font-medium transition-colors",
              answer.trim()
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            )}
          >
            Submit Response
          </button>
        )}
      </div>

      {(showResult || submitted) && (
        <div className="space-y-4">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Expert Approach:</h4>
            <p className="text-gray-700 text-sm whitespace-pre-line">{question.correctAnswer}</p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-blue-900 mb-1">Key Learning Points</h4>
                <p className="text-blue-800 text-sm">{question.explanation}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Case Study Question
export function CaseStudyQuestion({ question, onAnswer, showResult, userAnswer }: QuestionProps) {
  const [answer, setAnswer] = useState<string>(userAnswer as string || '')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (answer.trim()) {
      setSubmitted(true)
      // Case studies get manual review, so we'll mark as "submitted" rather than correct/incorrect
      onAnswer(answer, true) // Mark as correct for completion, actual grading would be manual
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-3">
            <AlertCircle className="h-5 w-5 text-blue-500" />
            <span className="text-sm font-medium text-blue-700">Case Study Analysis</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{question.question}</h3>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          <span className={cn(
            "px-2 py-1 text-xs font-medium rounded-full",
            question.difficulty === 'easy' ? "bg-green-100 text-green-800" :
            question.difficulty === 'medium' ? "bg-yellow-100 text-yellow-800" :
            "bg-red-100 text-red-800"
          )}>
            {question.difficulty}
          </span>
          <span className="text-sm text-gray-500">{question.points} pts</span>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Flag className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-blue-900 mb-1">Analysis Guidelines</h4>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• Consider technical requirements and constraints</li>
              <li>• Address economic and practical considerations for Nigeria</li>
              <li>• Include safety and maintenance factors</li>
              <li>• Propose specific recommendations</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={showResult || submitted}
          placeholder="Provide your detailed analysis and recommendations..."
          className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
          rows={8}
        />

        {!submitted && !showResult && (
          <button
            onClick={handleSubmit}
            disabled={!answer.trim()}
            className={cn(
              "px-6 py-2 rounded-lg font-medium transition-colors",
              answer.trim()
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            )}
          >
            Submit Analysis
          </button>
        )}
      </div>

      {(showResult || submitted) && (
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="font-medium text-green-900">Analysis Submitted</span>
            </div>
            <p className="text-green-800 text-sm">
              Your case study analysis has been submitted for instructor review. You'll receive detailed feedback within 24-48 hours.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Sample Analysis Framework:</h4>
            <p className="text-gray-700 text-sm whitespace-pre-line">{question.correctAnswer}</p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-blue-900 mb-1">Key Considerations</h4>
                <p className="text-blue-800 text-sm">{question.explanation}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Main Question Renderer
export function QuestionRenderer(props: QuestionProps) {
  switch (props.question.type) {
    case 'multiple-choice':
      return <MultipleChoiceQuestion {...props} />
    case 'true-false':
      return <TrueFalseQuestion {...props} />
    case 'short-answer':
      return <ShortAnswerQuestion {...props} />
    case 'scenario':
      return <ScenarioQuestion {...props} />
    case 'case-study':
      return <CaseStudyQuestion {...props} />
    default:
      return <MultipleChoiceQuestion {...props} />
  }
}


