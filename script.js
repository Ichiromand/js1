let selectList = document.querySelector('.select__list');
let selectHead = document.querySelector('.select__head');
let selectItem = document.querySelectorAll('.select__item');

selectHead.onclick = function (){
    selectList.classList.add('select__open-list');
    selectHead.classList.remove('select__head');
    selectHead.classList.add('select__head-open');
}

for (let item of selectItem) {
    item.onclick = function(){
        selectHead.textContent = item.textContent;
        selectList.classList.remove('select__open-list');
        selectHead.classList.add('select__head');
        selectHead.classList.add('black');
        selectHead.classList.remove('select__head-open');
    }
}