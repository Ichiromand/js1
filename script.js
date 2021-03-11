let selectList = document.querySelector('.select__list');
let select = document.querySelector('.select');
let selectHead = document.querySelector('.select__head');

select.onclick = function (){
    selectList.classList.add('select__open-list')
    selectHead.classList.remove('select__head')
    selectHead.classList.add('select__head-open')
}