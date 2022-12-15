import { setupWorker } from "msw"
import { hendlers } from "./heandlers"

export const worker = setupWorker(...hendlers)