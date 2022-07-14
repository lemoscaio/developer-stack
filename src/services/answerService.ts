// TODO

import { Answer } from "@prisma/client";
import * as answerRepository from "../repositories/answerRepository.js"

export type CreateAnswerData = Omit<Answer, "id">

async function create(questionId: number, answer: string) {
  const insertedData = await answerRepository.insertAnswer({questionId, answer})
  return insertedData
}

const answerService = {create};
export default answerService;