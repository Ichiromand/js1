let selectList = document.querySelector('.select__list');
let selectHead = document.querySelector('.select__head');
let options = [
    { value: '', label: 'Не задан' },
    { value: 'gold', label: 'GOLD' },
    { value: 'silver', label: 'SILVER' },
    { value: 'diamond', label: 'DIAMOND' }
    ]

options.forEach(function(item){
    let selectItem = document.createElement('li');
    selectItem.className = 'select__item';
    selectList.appendChild(selectItem);
    selectItem.textContent = item.label;
    selectItem.onclick = function(event){
        selectHead.textContent = selectItem.textContent;
        selectHead.classList.add('black');
        selectList.classList.remove('select__open-list');
        selectHead.classList.add('select__head');
        selectHead.classList.remove('select__head-open');
        if (selectItem.textContent === 'Не задан') {
            selectHead.classList.remove('black');
            selectHead.textContent = 'Выбрать';
        }
        if(!event.target.closest('.select')){
            selectList.classList.remove('select__open-list');
            selectHead.classList.add('select__head');
            selectHead.classList.remove('select__head-open');
        }
    }

})

selectHead.onclick = function (){
    if(selectHead.classList.contains('select__head-open')){
        selectList.classList.remove('select__open-list');
        selectHead.classList.add('select__head');
        selectHead.classList.remove('select__head-open');
    } else {
        selectList.classList.add('select__open-list');
        selectHead.classList.remove('select__head');
        selectHead.classList.add('select__head-open');
    }

}
