
const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector(".js-toDoInput");
const toDoList = document.querySelector(".js-toDoList");


const toDos_localStorage = 'toDos';
const checkedToDos_localStorage = 'checkedToDos'
let toDos = [];

function saveToDos() {
    localStorage.setItem(toDos_localStorage, JSON.stringify(toDos))
}

function checkToDos(e) {
    // 이벤트 눌리는 버튼
    const btn = e.target;
    // 그 버튼의 아이디
    const targetLi = btn.parentNode.parentNode.parentNode;
    // 그 아이디가 부여된 li의 js 이름을 checkedContent라고 부르자.
    const checkedContent = document.getElementById(targetLi.id)
    // li에 li-complite라는 class를 추가하자.
    checkedContent.classList.add("li-complite");
    // 로컬스토리지에서 삭제해주자.
    const checkToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(targetLi.id);
    });
    toDos = checkToDos;
    saveToDos();
}


function deleteToDos(e) {

    const btn = e.target;
    const targetLi = btn.parentNode.parentNode.parentNode;
    document.getElementById(targetLi.id).remove();
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(targetLi.id);
    });
    toDos = cleanToDos;
    saveToDos();
}


function paintToDo(text) {
    const makeLi = document.createElement('li');
    const makeDiv = document.createElement('div');
    const makeCheckBtn = document.createElement('button');
    const makeP = document.createElement('p');
    const makeDelBtn = document.createElement('button');
    const newId = toDos.length + 1

    makeCheckBtn.innerHTML = '<i class="fas fa-check"></i>'
    makeP.innerText = text;
    makeDelBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'
    makeCheckBtn.addEventListener("click", checkToDos);
    makeDelBtn.addEventListener("click", deleteToDos);

    makeLi.appendChild(makeDiv);
    makeDiv.appendChild(makeCheckBtn);
    makeDiv.appendChild(makeP);
    makeDiv.appendChild(makeDelBtn);

    makeLi.classList.add("card-li")
    makeDiv.classList.add("card-div")
    makeCheckBtn.classList.add("check")
    makeP.classList.add('content')
    makeDelBtn.classList.add("trash")

    toDoList.appendChild(makeLi);
    makeLi.id = newId;

    const toDoObject = {
        text: text,
        id: newId
    };
    toDos.push(toDoObject);
}



function isThereHaveContents(e) {
    e.preventDefault();

    if (toDoInput.value !== '') {
        e.preventDefault();
        const currentValue = toDoInput.value;
        paintToDo(currentValue);
        saveToDos();
        toDoInput.value = '';
    }
}


function loadToDos() {
    const loadedToDos = localStorage.getItem(toDos_localStorage);
    if (loadedToDos !== null) {
        let parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", isThereHaveContents);

}
init();



