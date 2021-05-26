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

setupId('코딩');
setupId('구매대행');
setupId('독서');
setupId('블로그');
setupId('가족시간');
setupId('개인정비');
setupId('쉼');

// 불러오기
경과시간합모든아이[0].innerText = localStorage.getItem("코딩")
경과시간합모든아이[1].innerText = localStorage.getItem("구매대행")
경과시간합모든아이[2].innerText = localStorage.getItem("독서")
경과시간합모든아이[3].innerText = localStorage.getItem("블로그")
경과시간합모든아이[4].innerText = localStorage.getItem("가족시간")
경과시간합모든아이[5].innerText = localStorage.getItem("개인정비")
경과시간합모든아이[6].innerText = localStorage.getItem("쉼")


// 초기화시키기
초기화버튼.addEventListener("click", 초기화시키기)

function 초기화시키기() {
  localStorage.setItem("코딩", 0)
  localStorage.setItem("구매대행", 0)
  localStorage.setItem("독서", 0)
  localStorage.setItem("블로그", 0)
  localStorage.setItem("가족시간", 0)
  localStorage.setItem("개인정비", 0)
  localStorage.setItem("쉼", 0)

  경과시간합모든아이[0].innerText = localStorage.getItem("코딩")
  경과시간합모든아이[1].innerText = localStorage.getItem("구매대행")
  경과시간합모든아이[2].innerText = localStorage.getItem("독서")
  경과시간합모든아이[3].innerText = localStorage.getItem("블로그")
  경과시간합모든아이[4].innerText = localStorage.getItem("가족시간")
  경과시간합모든아이[5].innerText = localStorage.getItem("개인정비")
  경과시간합모든아이[6].innerText = localStorage.getItem("쉼")

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
    span.classList.add(day)
  }
  else {
    const li = 해당섹션.querySelectorAll("li")
    const lastLi = li[li.length - 1]
    const span = document.createElement("span")
    const em = document.createElement("em")
    lastLi.appendChild(span)
    lastLi.appendChild(em)
    span.innerText = 현재시간();
    const 처음과끝시간 = lastLi.textContent;
    span.classList.add(day)
    const nodes = 경과시간표시부.querySelectorAll("span")
    const last = nodes[nodes.length - 1]
    const lastBefore = nodes[nodes.length - 2]
    console.log(last.classList.value == lastBefore.classList.value) // 값이  true 면 같은 요일에 체크한거, 값이 false면 다른 요일에 체크한거.
    if (last.classList.value == lastBefore.classList.value) {
      const 경과시간 = (처음과끝시간.slice(8, 10) - 처음과끝시간.slice(0, 2)) * 60 + (처음과끝시간.slice(11, 13) - 처음과끝시간.slice(3, 5));
      em.innerText = ` (${경과시간}')`;
      const 경과시간합 = 해당섹션.querySelector(".경과시간합")
      경과시간합.innerText = parseInt(경과시간합.innerText) + parseInt(경과시간);
      localStorage.setItem(해당섹션.id, 경과시간합.innerText)
    } else {
      const 경과시간 = (24 - 처음과끝시간.slice(0, 2)) * 60 + (처음과끝시간.slice(11, 13) - 처음과끝시간.slice(3, 5));
      em.innerText = ` (${경과시간}')`;
      const 경과시간합 = 해당섹션.querySelector(".경과시간합")
      경과시간합.innerText = parseInt(경과시간합.innerText) + parseInt(경과시간);
      localStorage.setItem(해당섹션.id, 경과시간합.innerText)
    }

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

