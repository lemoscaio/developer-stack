// TODO

import { Question } from "@prisma/client"
import * as questionRepository from "../repositories/questionRepository.js"

export type CreateQuestionData = Omit<Question, "id">

async function create(question: string) {
  const insertedData = await questionRepository.insertQuestion({ question })
  return insertedData
}

async function findAll() {
  const questions = await questionRepository.findAllQuestions()
  return questions
}

async function findById(questionId: number) {
  const question = await questionRepository.findQuestionById(questionId)
  return question
}

const questionService = { create, findAll, findById }
export default questionService
