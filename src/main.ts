import { resetForm, resetGrid } from "./app"
import "./style.css"

resetGrid()

resetForm.addEventListener("submit", (event) => {
  event.preventDefault()
  resetGrid()
})
