const gridContainer = document.querySelector(".grid-container")!
const gridSizeInput = <HTMLInputElement>document.querySelector(".grid-size-input")!
export const resetForm = <HTMLFormElement>document.querySelector(".reset-form")!

export function resetGrid() {
  const gridSize = Number(gridSizeInput.value)
  const length = gridSize ** 2
  const gridItems: HTMLDivElement[] = Array(length)
  for (let i = 0; i < length; i++) {
    gridItems[i] = createGridItem(i)
  }
  gridContainer.replaceChildren(...gridItems)
  gridContainer.setAttribute(
    "style",
    `grid-template-columns: repeat(${gridSize}, 1fr)`
  )
}

function createGridItem(index: number): HTMLDivElement {
  const div = document.createElement("div")
  div.dataset.index = index.toString()
  div.addEventListener('mouseenter', (_) => div.classList.add("grid-item-colored"))

  return div
}
