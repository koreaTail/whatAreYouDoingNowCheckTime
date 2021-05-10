const memoPart = document.querySelector(".memo-part")
const memoForm = memoPart.querySelector("form")
const memoTextarea = memoPart.querySelector("textarea")

memoTextarea.addEventListener("input", textareaHandler)

function textareaHandler() {
  localStorage.setItem("textarea", memoTextarea.value)
}

memoTextarea.value = localStorage.getItem("textarea")