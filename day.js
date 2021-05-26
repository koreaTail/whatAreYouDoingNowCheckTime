let day = "요일"
const dayReport = document.querySelector(".day-report")

// 요일 숫자에서 문자로 바꿔주기
function todayDay() {
  return new Date().getDay();
}

if (todayDay() == 1) {
  day = "Mon";
} else if (todayDay() == 2) {
  day = "Tue";
} else if (todayDay() == 3) {
  day = "Wed";
} else if (todayDay() == 4) {
  day = "Thu";
} else if (todayDay() == 5) {
  day = "Fri";
} else if (todayDay() == 6) {
  day = "Sat";
} else {
  day = "Sun";
}

function 시계() {
  const 시 = new Date().getHours()
  const 분 = new Date().getMinutes()
  const 초 = new Date().getSeconds()

  const nowTime = `${day} ${시}:${(분 < 10) ? `0${분}` : 분}:${(초 < 10) ? `0${초}` : 초}`
  p.innerText = nowTime;
}
setInterval(시계, 1000)

