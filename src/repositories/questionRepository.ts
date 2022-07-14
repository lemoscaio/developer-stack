// TODO

import { prisma } from "../config/database.js"
import { CreateQuestionData } from "../services/questionService.js"

export function insertQuestion(questionData: CreateQuestionData) {
  return prisma.question.create({ data: questionData })
}

export function findAllQuestions() {
  return prisma.question.findMany()
}

export function findQuestionById(questionId: number) {
  return prisma.question.findUnique({
    where: { id: questionId },
    include: { answers: true },
  })
}
