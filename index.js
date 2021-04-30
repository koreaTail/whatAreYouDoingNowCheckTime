const btnSection = document.querySelector(".section-flex")
const 시계위치 = document.querySelector(".시계위치")

const p = document.createElement("p")
시계위치.appendChild(p)


btnSection.addEventListener("submit", btnHandler)

function btnHandler() {
  event.preventDefault();
  const 시 = new Date().getHours()
  const 분 = new Date().getMinutes()
  const 현재시각 = `${
    if (시 < 10) {
    "0" + 시
  } else {
    시
  }
   : ${
    if (분 < 10) {
      "0" + 분
    } else {
      분
    }
  } `

  const 해당섹션 = event.target.parentElement;
  const 경과시간표시부 = 해당섹션.querySelector(".경과시간표시부")
  해당섹션.classList.toggle("선택됨")

  if (해당섹션.classList.contains('선택됨')) {
    const li = document.createElement("li")
    const span = document.createElement("span")
    경과시간표시부.appendChild(li)
    li.appendChild(span)
    span.innerHTML = `${ 현재시각 } - `
  }
  else {
    const li = 해당섹션.querySelectorAll("li")
    const lastLi = li[li.length - 1]
    const span = document.createElement("span")
    lastLi.appendChild(span)
    span.innerText = 현재시각
  }


  // console.log(parseInt(현재시각()))
  // console.log(parseInt(시작시각))
}



console.log(시계())

function 시계() {
  const 시 = new Date().getHours()
  const 분 = new Date().getMinutes()
  const 초 = new Date().getSeconds()

  return `${ 시 }: ${ 분 }: ${ 초 } `
}

setInterval(시계, 1000)