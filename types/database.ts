export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          role: 'student' | 'instructor' | 'admin'
          trade_specializations: string[] | null
          location: string | null
          phone: string | null
          years_experience: number | null
          certification_level: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'student' | 'instructor' | 'admin'
          trade_specializations?: string[] | null
          location?: string | null
          phone?: string | null
          years_experience?: number | null
          certification_level?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'student' | 'instructor' | 'admin'
          trade_specializations?: string[] | null
          location?: string | null
          phone?: string | null
          years_experience?: number | null
          certification_level?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      courses: {
        Row: {
          id: string
          title: string
          description: string | null
          trade_type: 'hvac' | 'electrical' | 'plumbing' | 'welding' | 'construction' | 'solar' | 'robotics'
          level: 'beginner' | 'intermediate' | 'advanced'
          duration_hours: number
          instructor_id: string
          thumbnail_url: string | null
          is_published: boolean
          order_index: number
          prerequisites: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          trade_type: 'hvac' | 'electrical' | 'plumbing' | 'welding' | 'construction' | 'solar' | 'robotics'
          level: 'beginner' | 'intermediate' | 'advanced'
          duration_hours: number
          instructor_id: string
          thumbnail_url?: string | null
          is_published?: boolean
          order_index: number
          prerequisites?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          trade_type?: 'hvac' | 'electrical' | 'plumbing' | 'welding' | 'construction' | 'solar' | 'robotics'
          level?: 'beginner' | 'intermediate' | 'advanced'
          duration_hours?: number
          instructor_id?: string
          thumbnail_url?: string | null
          is_published?: boolean
          order_index?: number
          prerequisites?: string[] | null
          created_at?: string
          updated_at?: string
        }
      }
      lessons: {
        Row: {
          id: string
          course_id: string
          title: string
          description: string | null
          video_url: string | null
          video_duration_seconds: number | null
          content: string | null
          order_index: number
          duration_minutes: number
          learning_objectives: string[] | null
          resources: any | null
          is_published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          course_id: string
          title: string
          description?: string | null
          video_url?: string | null
          video_duration_seconds?: number | null
          content?: string | null
          order_index: number
          duration_minutes: number
          learning_objectives?: string[] | null
          resources?: any | null
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          course_id?: string
          title?: string
          description?: string | null
          video_url?: string | null
          video_duration_seconds?: number | null
          content?: string | null
          order_index?: number
          duration_minutes?: number
          learning_objectives?: string[] | null
          resources?: any | null
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      quizzes: {
        Row: {
          id: string
          course_id: string | null
          lesson_id: string | null
          title: string
          description: string | null
          time_limit_minutes: number | null
          passing_score: number
          max_attempts: number | null
          is_proctored: boolean
          randomize_questions: boolean
          show_results_immediately: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          course_id?: string | null
          lesson_id?: string | null
          title: string
          description?: string | null
          time_limit_minutes?: number | null
          passing_score: number
          max_attempts?: number | null
          is_proctored?: boolean
          randomize_questions?: boolean
          show_results_immediately?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          course_id?: string | null
          lesson_id?: string | null
          title?: string
          description?: string | null
          time_limit_minutes?: number | null
          passing_score?: number
          max_attempts?: number | null
          is_proctored?: boolean
          randomize_questions?: boolean
          show_results_immediately?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      questions: {
        Row: {
          id: string
          quiz_id: string
          question_text: string
          question_type: 'multiple_choice' | 'true_false' | 'short_answer' | 'matching'
          options: any | null
          correct_answer: any
          explanation: string | null
          points: number
          order_index: number
          media_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          quiz_id: string
          question_text: string
          question_type: 'multiple_choice' | 'true_false' | 'short_answer' | 'matching'
          options?: any | null
          correct_answer: any
          explanation?: string | null
          points: number
          order_index: number
          media_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          quiz_id?: string
          question_text?: string
          question_type?: 'multiple_choice' | 'true_false' | 'short_answer' | 'matching'
          options?: any | null
          correct_answer?: any
          explanation?: string | null
          points?: number
          order_index?: number
          media_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      user_progress: {
        Row: {
          id: string
          user_id: string
          course_id: string | null
          lesson_id: string | null
          progress_percentage: number
          time_spent_minutes: number
          completed: boolean
          last_accessed: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          course_id?: string | null
          lesson_id?: string | null
          progress_percentage: number
          time_spent_minutes?: number
          completed?: boolean
          last_accessed?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          course_id?: string | null
          lesson_id?: string | null
          progress_percentage?: number
          time_spent_minutes?: number
          completed?: boolean
          last_accessed?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      quiz_attempts: {
        Row: {
          id: string
          user_id: string
          quiz_id: string
          answers: any
          score: number
          passed: boolean
          time_taken_minutes: number | null
          proctoring_data: any | null
          completed_at: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          quiz_id: string
          answers: any
          score: number
          passed?: boolean
          time_taken_minutes?: number | null
          proctoring_data?: any | null
          completed_at: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          quiz_id?: string
          answers?: any
          score?: number
          passed?: boolean
          time_taken_minutes?: number | null
          proctoring_data?: any | null
          completed_at?: string
          created_at?: string
        }
      }
      equipment_kits: {
        Row: {
          id: string
          name: string
          description: string | null
          trade_type: 'hvac' | 'electrical' | 'plumbing' | 'welding' | 'construction' | 'solar' | 'robotics'
          kit_type: 'starter' | 'professional' | 'advanced' | 'specialty'
          price: number
          currency: string
          is_active: boolean
          specifications: any | null
          included_parts: string[] | null
          training_modules: string[] | null
          qr_code: string | null
          image_urls: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          trade_type: 'hvac' | 'electrical' | 'plumbing' | 'welding' | 'construction' | 'solar' | 'robotics'
          kit_type: 'starter' | 'professional' | 'advanced' | 'specialty'
          price: number
          currency?: string
          is_active?: boolean
          specifications?: any | null
          included_parts?: string[] | null
          training_modules?: string[] | null
          qr_code?: string | null
          image_urls?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          trade_type?: 'hvac' | 'electrical' | 'plumbing' | 'welding' | 'construction' | 'solar' | 'robotics'
          kit_type?: 'starter' | 'professional' | 'advanced' | 'specialty'
          price?: number
          currency?: string
          is_active?: boolean
          specifications?: any | null
          included_parts?: string[] | null
          training_modules?: string[] | null
          qr_code?: string | null
          image_urls?: string[] | null
          created_at?: string
          updated_at?: string
        }
      }
      parts: {
        Row: {
          id: string
          kit_id: string | null
          name: string
          description: string | null
          brand: string | null
          model_number: string | null
          price: number
          currency: string
          is_available: boolean
          stock_quantity: number | null
          specifications: any | null
          compatibility: string[] | null
          image_urls: string[] | null
          supplier_info: any | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          kit_id?: string | null
          name: string
          description?: string | null
          brand?: string | null
          model_number?: string | null
          price: number
          currency?: string
          is_available?: boolean
          stock_quantity?: number | null
          specifications?: any | null
          compatibility?: string[] | null
          image_urls?: string[] | null
          supplier_info?: any | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          kit_id?: string | null
          name?: string
          description?: string | null
          brand?: string | null
          model_number?: string | null
          price?: number
          currency?: string
          is_available?: boolean
          stock_quantity?: number | null
          specifications?: any | null
          compatibility?: string[] | null
          image_urls?: string[] | null
          supplier_info?: any | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      leaderboard_view: {
        Row: {
          user_id: string
          full_name: string | null
          trade_specializations: string[] | null
          total_score: number | null
          completed_courses: number | null
          badges_earned: number | null
          rank: number | null
        }
      }
    }
  }
}

