// TODO

import {prisma} from "../config/database.js"
import { CreateAnswerData } from "../services/answerService.js";

export function insertAnswer({questionId, answer} : CreateAnswerData){
 return prisma.answer.create({data: {questionId, answer}})
}