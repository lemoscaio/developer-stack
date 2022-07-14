import { Question } from "@prisma/client"
import { Request, Response } from "express"
import answerService, { CreateAnswerData } from "../services/answerService.js"
import questionService, {
  CreateQuestionData,
} from "../services/questionService.js"

export async function create(req: Request, res: Response) {
  const { question }: CreateQuestionData = req.body

  const insertedData = await questionService.create(question)

  res.status(201).send(insertedData)
}

export async function answer(req: Request, res: Response) {
  const { answer }: CreateAnswerData = req.body
  const { id: questionId } = req.params

  const insertedData = await answerService.create(Number(questionId), answer)

  res.status(201).send(insertedData)
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.findAll()

  res.send(questions)
}

export async function getById(req: Request, res: Response) {
  const { id: questionId } = req.params

  const questions = await questionService.findById(Number(questionId))

  res.send(questions)
}
