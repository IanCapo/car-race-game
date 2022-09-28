export type Questions = QuestionsData[]

export interface QuestionsData {
  category: string
  id: string
  correctAnswer: string
  incorrectAnswers: string[]
  question: string
  tags: string[]
  type: string
  difficulty: string
  regions: any[]
}