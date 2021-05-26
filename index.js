const sectionFlex = document.querySelector(".section-flex")
const 시계위치 = document.querySelector(".시계위치")
const p = 시계위치.querySelector("p")
const 초기화버튼 = document.querySelector(".초기화버튼")

const 경과시간합모든아이 = document.querySelectorAll(".경과시간합")


// 로컬스토리지에 경과시간값이 없을 때, 초기값 0 넣어주기
function setupId(id) {
  if (localStorage.getItem(id) == null) {
    localStorage.setItem(id, 0)
  }
}

setupId('월요일');
setupId('화요일');
setupId('수요일');
setupId('목요일');
setupId('금요일');
setupId('토요일');
setupId('일요일');

// 불러오기
경과시간합모든아이[0].innerText = localStorage.getItem("월요일")
경과시간합모든아이[1].innerText = localStorage.getItem("화요일")
경과시간합모든아이[2].innerText = localStorage.getItem("수요일")
경과시간합모든아이[3].innerText = localStorage.getItem("목요일")
경과시간합모든아이[4].innerText = localStorage.getItem("금요일")
경과시간합모든아이[5].innerText = localStorage.getItem("토요일")
경과시간합모든아이[6].innerText = localStorage.getItem("일요일")


// 초기화시키기
초기화버튼.addEventListener("click", 초기화시키기)

function 초기화시키기() {
  localStorage.setItem("월요일", 0)
  localStorage.setItem("화요일", 0)
  localStorage.setItem("수요일", 0)
  localStorage.setItem("목요일", 0)
  localStorage.setItem("금요일", 0)
  localStorage.setItem("토요일", 0)
  localStorage.setItem("일요일", 0)

  경과시간합모든아이[0].innerText = localStorage.getItem("월요일")
  경과시간합모든아이[1].innerText = localStorage.getItem("화요일")
  경과시간합모든아이[2].innerText = localStorage.getItem("수요일")
  경과시간합모든아이[3].innerText = localStorage.getItem("목요일")
  경과시간합모든아이[4].innerText = localStorage.getItem("금요일")
  경과시간합모든아이[5].innerText = localStorage.getItem("토요일")
  경과시간합모든아이[6].innerText = localStorage.getItem("일요일")

}


sectionFlex.addEventListener("submit", btnHandler)

function btnHandler() {
  event.preventDefault();


  const 해당섹션 = event.target.parentElement;
  const 경과시간표시부 = 해당섹션.querySelector(".경과시간표시부")
  해당섹션.classList.toggle("선택됨")

  if (해당섹션.classList.contains('선택됨')) {
    const li = document.createElement("li")
    const span = document.createElement("span")
    경과시간표시부.appendChild(li)
    li.appendChild(span)
    span.innerHTML = `${현재시간()} - `
  }
  else {
    const li = 해당섹션.querySelectorAll("li")
    const lastLi = li[li.length - 1]
    const span = document.createElement("span")
    const span2 = document.createElement("span")
    lastLi.appendChild(span)
    lastLi.appendChild(span2)
    span.innerText = 현재시간();
    const 처음과끝시간 = lastLi.textContent;
    const 경과시간 = (처음과끝시간.slice(8, 10) - 처음과끝시간.slice(0, 2)) * 60 + (처음과끝시간.slice(11, 13) - 처음과끝시간.slice(3, 5));
    span2.innerText = ` (${경과시간}')`;
    const 경과시간합 = 해당섹션.querySelector(".경과시간합")
    경과시간합.innerText = parseInt(경과시간합.innerText) + parseInt(경과시간);
    localStorage.setItem(해당섹션.id, 경과시간합.innerText)
  }
}

function 현재시간() {
  const 시 = new Date().getHours()
  const 분 = new Date().getMinutes()

  if (시 < 10 && 분 < 10) {
    return `0${시}:0${분}`;
  } else if (시 < 10 && 분 >= 10) {
    return `0${시}:${분}`;
  } else if (시 >= 10 && 분 < 10) {
    return `${시}:0${분}`;
  } else if (시 >= 10 && 분 >= 10) {
    return `${시}:${분}`;
  }
}



