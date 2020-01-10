import { Router } from "express";
import getTranslation from './getTranslation'

export default function(app) {
  app.use("/shark/getTranslation", getTranslation)
}
