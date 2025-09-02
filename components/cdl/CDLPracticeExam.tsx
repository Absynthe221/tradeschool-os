'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ExamQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface ExamConfig {
  examType: 'random' | 'category' | 'difficulty' | 'module';
  questionCount: number;
  timeLimit: number;
}

const cdlQuestions: ExamQuestion[] = [
  // Vehicle Inspection
  {
    id: 1,
    question: "What should you check during a pre-trip inspection of the steering system?",
    options: [
      "Only the steering wheel",
      "Steering wheel play, steering linkage, and power steering fluid",
      "Just the tires",
      "Only the brakes"
    ],
    correctAnswer: 1,
    explanation: "A proper steering system inspection includes checking steering wheel play, steering linkage condition, and power steering fluid level.",
    category: "Vehicle Inspection",
    difficulty: "medium"
  },
  {
    id: 2,
    question: "How often should you check your mirrors while driving?",
    options: [
      "Every 5-8 seconds",
      "Only when changing lanes",
      "Every 30 seconds",
      "Only at intersections"
    ],
    correctAnswer: 0,
    explanation: "You should check your mirrors every 5-8 seconds to maintain awareness of traffic around your vehicle.",
    category: "Safety Practices",
    difficulty: "easy"
  },
  {
    id: 3,
    question: "What is the maximum speed limit for commercial vehicles on most highways?",
    options: [
      "55 mph",
      "65 mph",
      "70 mph",
      "75 mph"
    ],
    correctAnswer: 1,
    explanation: "Most states have a maximum speed limit of 65 mph for commercial vehicles on highways.",
    category: "Traffic Laws",
    difficulty: "easy"
  },
  {
    id: 4,
    question: "When should you use your hazard lights?",
    options: [
      "When driving in rain",
      "When your vehicle is disabled or stopped on the roadway",
      "When driving slowly",
      "When parking"
    ],
    correctAnswer: 1,
    explanation: "Hazard lights should only be used when your vehicle is disabled or stopped on the roadway.",
    category: "Safety Practices",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "What is the minimum tread depth required for commercial vehicle tires?",
    options: [
      "1/32 inch",
      "2/32 inch",
      "4/32 inch",
      "6/32 inch"
    ],
    correctAnswer: 1,
    explanation: "Commercial vehicle tires must have a minimum tread depth of 2/32 inch.",
    category: "Vehicle Inspection",
    difficulty: "medium"
  },
  {
    id: 6,
    question: "How far ahead should you look while driving?",
    options: [
      "10-15 seconds",
      "5-10 seconds",
      "20-30 seconds",
      "2-3 seconds"
    ],
    correctAnswer: 0,
    explanation: "You should look 10-15 seconds ahead while driving to anticipate potential hazards.",
    category: "Safety Practices",
    difficulty: "easy"
  },
  {
    id: 7,
    question: "What should you do if your brakes fail while driving?",
    options: [
      "Panic and stop immediately",
      "Use the parking brake and downshift gradually",
      "Turn off the engine",
      "Jump out of the vehicle"
    ],
    correctAnswer: 1,
    explanation: "If brakes fail, use the parking brake and downshift gradually to slow the vehicle safely.",
    category: "Safety Practices",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "What is the maximum weight allowed for a single axle?",
    options: [
      "15,000 pounds",
      "20,000 pounds",
      "25,000 pounds",
      "30,000 pounds"
    ],
    correctAnswer: 1,
    explanation: "The maximum weight allowed for a single axle is 20,000 pounds.",
    category: "Traffic Laws",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "How often should you check your oil level?",
    options: [
      "Every day",
      "Every week",
      "Every month",
      "Only when the oil light comes on"
    ],
    correctAnswer: 0,
    explanation: "You should check your oil level every day as part of your pre-trip inspection.",
    category: "Vehicle Inspection",
    difficulty: "easy"
  },
  {
    id: 10,
    question: "What is the proper following distance for a commercial vehicle?",
    options: [
      "1 second",
      "2 seconds",
      "3-4 seconds",
      "5-6 seconds"
    ],
    correctAnswer: 2,
    explanation: "Commercial vehicles should maintain a following distance of 3-4 seconds.",
    category: "Safety Practices",
    difficulty: "medium"
  },
  {
    id: 11,
    question: "What should you do if you see a yellow traffic light?",
    options: [
      "Speed up to get through",
      "Stop if it's safe to do so",
      "Ignore it",
      "Honk your horn"
    ],
    correctAnswer: 1,
    explanation: "At a yellow light, you should stop if it's safe to do so.",
    category: "Traffic Laws",
    difficulty: "easy"
  },
  {
    id: 12,
    question: "What is the maximum width allowed for a commercial vehicle?",
    options: [
      "8 feet",
      "8.5 feet",
      "9 feet",
      "10 feet"
    ],
    correctAnswer: 1,
    explanation: "The maximum width allowed for a commercial vehicle is 8.5 feet.",
    category: "Traffic Laws",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "When should you use your turn signals?",
    options: [
      "Only when changing lanes",
      "At least 100 feet before turning or changing lanes",
      "Only at intersections",
      "When you feel like it"
    ],
    correctAnswer: 1,
    explanation: "You should use your turn signals at least 100 feet before turning or changing lanes.",
    category: "Traffic Laws",
    difficulty: "easy"
  },
  {
    id: 14,
    question: "What is the purpose of the air brake system?",
    options: [
      "To make the vehicle go faster",
      "To stop the vehicle safely",
      "To improve fuel economy",
      "To make the vehicle lighter"
    ],
    correctAnswer: 1,
    explanation: "The air brake system is designed to stop the vehicle safely.",
    category: "Air Brakes",
    difficulty: "easy"
  },
  {
    id: 15,
    question: "How often should you drain the air tanks?",
    options: [
      "Every day",
      "Every week",
      "Every month",
      "Never"
    ],
    correctAnswer: 0,
    explanation: "You should drain the air tanks every day to remove moisture and contaminants.",
    category: "Air Brakes",
    difficulty: "medium"
  },
  {
    id: 16,
    question: "What is the minimum air pressure required for safe operation?",
    options: [
      "60 psi",
      "80 psi",
      "100 psi",
      "120 psi"
    ],
    correctAnswer: 2,
    explanation: "The minimum air pressure required for safe operation is 100 psi.",
    category: "Air Brakes",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "What should you do if the low air pressure warning comes on?",
    options: [
      "Continue driving normally",
      "Stop immediately and park safely",
      "Speed up to reach your destination",
      "Ignore it"
    ],
    correctAnswer: 1,
    explanation: "If the low air pressure warning comes on, you should stop immediately and park safely.",
    category: "Air Brakes",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "What is the purpose of the glad hands on a trailer?",
    options: [
      "To connect the electrical system",
      "To connect the air brake system",
      "To connect the fuel system",
      "To connect the steering system"
    ],
    correctAnswer: 1,
    explanation: "Glad hands are used to connect the air brake system between the tractor and trailer.",
    category: "Combination Vehicles",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "How should you back up a combination vehicle?",
    options: [
      "Quickly and without looking",
      "Slowly and with frequent stops to check",
      "At high speed",
      "Without using mirrors"
    ],
    correctAnswer: 1,
    explanation: "You should back up slowly and with frequent stops to check your position.",
    category: "Combination Vehicles",
    difficulty: "medium"
  },
  {
    id: 20,
    question: "What is the maximum length for a combination vehicle?",
    options: [
      "50 feet",
      "60 feet",
      "65 feet",
      "75 feet"
    ],
    correctAnswer: 2,
    explanation: "The maximum length for a combination vehicle is 65 feet.",
    category: "Combination Vehicles",
    difficulty: "medium"
  }
];

export default function CDLPracticeExam() {
  const router = useRouter();
  const [examConfig, setExamConfig] = useState<ExamConfig>({
    examType: 'random',
    questionCount: 20,
    timeLimit: 30
  });
  const [currentExam, setCurrentExam] = useState<ExamQuestion[]>([]);
  const [isExamStarted, setIsExamStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isExamComplete, setIsExamComplete] = useState(false);
  const [examResults, setExamResults] = useState<{
    correct: number;
    total: number;
    percentage: number;
    questions: Array<{
      question: ExamQuestion;
      userAnswer: number;
      isCorrect: boolean;
    }>;
  } | null>(null);

  const generateExam = () => {
    let questions: ExamQuestion[] = [];
    
    switch (examConfig.examType) {
      case 'random':
        questions = [...cdlQuestions].sort(() => Math.random() - 0.5);
        break;
      case 'category':
        // For demo, use random questions
        questions = [...cdlQuestions].sort(() => Math.random() - 0.5);
        break;
      case 'difficulty':
        // For demo, use random questions
        questions = [...cdlQuestions].sort(() => Math.random() - 0.5);
        break;
      case 'module':
        // For demo, use random questions
        questions = [...cdlQuestions].sort(() => Math.random() - 0.5);
        break;
    }
    
    questions = questions.slice(0, examConfig.questionCount);
    setCurrentExam(questions);
    setSelectedAnswers(new Array(questions.length).fill(-1));
    setCurrentQuestionIndex(0);
    setIsExamStarted(false);
    setIsExamComplete(false);
    setExamResults(null);
  };

  const startExam = () => {
    if (currentExam.length === 0) {
      generateExam();
    }
    setIsExamStarted(true);
    setTimeRemaining(examConfig.timeLimit * 60);
  };

  const selectAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < currentExam.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const finishExam = () => {
    const correct = selectedAnswers.reduce((count, answer, index) => {
      return count + (answer === currentExam[index].correctAnswer ? 1 : 0);
    }, 0);
    
    const percentage = Math.round((correct / currentExam.length) * 100);
    
    const results = {
      correct,
      total: currentExam.length,
      percentage,
      questions: currentExam.map((question, index) => ({
        question,
        userAnswer: selectedAnswers[index],
        isCorrect: selectedAnswers[index] === question.correctAnswer
      }))
    };
    
    setExamResults(results);
    setIsExamComplete(true);
    setIsExamStarted(false);
  };

  // Timer effect
  useEffect(() => {
    if (isExamStarted && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            finishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, [isExamStarted, timeRemaining]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (isExamComplete && examResults) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Exam Complete!</h1>
              <p className="text-xl text-blue-100">Here are your results</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className={`text-6xl font-bold mb-4 ${
                examResults.percentage >= 80 ? 'text-green-600' :
                examResults.percentage >= 70 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {examResults.percentage}%
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {examResults.correct} out of {examResults.total} correct
              </h2>
              <p className="text-gray-600">
                {examResults.percentage >= 80 ? 'Excellent! You passed!' :
                 examResults.percentage >= 70 ? 'Good job! Keep studying!' :
                 'Keep practicing! Review the material and try again.'}
              </p>
            </div>

            <div className="space-y-6">
              {examResults.questions.map((result, index) => (
                <div key={index} className={`border rounded-lg p-4 ${
                  result.isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                }`}>
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-medium text-gray-900">
                      Question {index + 1}
                    </span>
                    <span className={`px-2 py-1 rounded text-sm font-medium ${
                      result.isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {result.isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>
                  <p className="text-gray-800 mb-3">{result.question.question}</p>
                  <div className="space-y-2">
                    {result.question.options.map((option, optionIndex) => (
                      <div key={optionIndex} className={`p-2 rounded ${
                        optionIndex === result.question.correctAnswer ? 'bg-green-100 border-green-300' :
                        optionIndex === result.userAnswer && !result.isCorrect ? 'bg-red-100 border-red-300' :
                        'bg-gray-50'
                      }`}>
                        <span className={`font-medium ${
                          optionIndex === result.question.correctAnswer ? 'text-green-800' :
                          optionIndex === result.userAnswer && !result.isCorrect ? 'text-red-800' :
                          'text-gray-700'
                        }`}>
                          {String.fromCharCode(65 + optionIndex)}. {option}
                        </span>
                        {optionIndex === result.question.correctAnswer && (
                          <span className="ml-2 text-green-600 font-bold">✓ Correct Answer</span>
                        )}
                        {optionIndex === result.userAnswer && !result.isCorrect && (
                          <span className="ml-2 text-red-600 font-bold">✗ Your Answer</span>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 p-3 bg-blue-50 rounded">
                    <p className="text-sm text-blue-800">
                      <strong>Explanation:</strong> {result.question.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={() => {
                  setIsExamComplete(false);
                  setExamResults(null);
                  generateExam();
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Take Another Exam
              </button>
              <button
                onClick={() => router.push('/courses/cdl-fundamentals')}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Back to Course
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isExamStarted && currentExam.length > 0) {
    const currentQuestion = currentExam[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / currentExam.length) * 100;
    const answeredCount = selectedAnswers.filter(answer => answer !== -1).length;

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">CDL Practice Exam</h1>
              <div className="text-right">
                <div className="text-lg font-medium">Time Remaining: {formatTime(timeRemaining)}</div>
                <div className="text-sm text-blue-100">Question {currentQuestionIndex + 1} of {currentExam.length}</div>
              </div>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-2 mt-4">
              <div className="bg-white h-2 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">
                  {answeredCount} of {currentExam.length} answered
                </span>
                <span className="text-sm text-gray-500">
                  Category: {currentQuestion.category}
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                {currentQuestion.question}
              </h2>
            </div>

            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => selectAnswer(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                    selectedAnswers[currentQuestionIndex] === index
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="font-medium text-gray-900">
                    {String.fromCharCode(65 + index)}. {option}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={previousQuestion}
                disabled={currentQuestionIndex === 0}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              <div className="flex space-x-2">
                {currentExam.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestionIndex(index)}
                    className={`w-8 h-8 rounded-full text-sm font-medium ${
                      index === currentQuestionIndex
                        ? 'bg-blue-600 text-white'
                        : selectedAnswers[index] !== -1
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              {currentQuestionIndex === currentExam.length - 1 ? (
                <button
                  onClick={finishExam}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Finish Exam
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">CDL Practice Exam</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Test your knowledge with our comprehensive practice exams. Choose from random questions, specific categories, or difficulty levels to prepare for your commercial driver license test.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">CDL Practice Exam</h1>
            <p className="text-gray-600">Test your knowledge with randomly generated questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Exam Type</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={examConfig.examType}
                  onChange={(e) => setExamConfig(prev => ({ ...prev, examType: e.target.value as any }))}
                >
                  <option value="random">Random Questions</option>
                  <option value="category">By Category</option>
                  <option value="difficulty">By Difficulty</option>
                  <option value="module">By Module</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Questions</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={examConfig.questionCount}
                  onChange={(e) => setExamConfig(prev => ({ ...prev, questionCount: parseInt(e.target.value) }))}
                >
                  <option value={10}>10 Questions</option>
                  <option value={20}>20 Questions</option>
                  <option value={30}>30 Questions</option>
                  <option value={50}>50 Questions</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time Limit (minutes)</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={examConfig.timeLimit}
                  onChange={(e) => setExamConfig(prev => ({ ...prev, timeLimit: parseInt(e.target.value) }))}
                >
                  <option value={0}>No Time Limit</option>
                  <option value={15}>15 minutes</option>
                  <option value={30}>30 minutes</option>
                  <option value={45}>45 minutes</option>
                  <option value={60}>60 minutes</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={generateExam}
              className="flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                <path d="M21 3v5h-5"></path>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                <path d="M8 16H3v5"></path>
              </svg>
              Generate New Exam
            </button>
            <button
              onClick={startExam}
              disabled={currentExam.length === 0}
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Start Exam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
