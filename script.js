function initSelect(chooseClass, arr){
    let select = document.querySelector(chooseClass)
    let selectList = select.querySelector('.select__list');
    let selectHead = select.querySelector('.select__head');
    let options = arr
    
    options.forEach(function(item){
        let selectItem = document.createElement('li');
        selectItem.className = 'select__item';
        selectList.appendChild(selectItem);
        selectItem.textContent = item.label;
        selectItem.onclick = function(){
            selectHead.textContent = selectItem.textContent;
            selectHead.classList.add('black');
            selectList.classList.remove('select__open-list');
            selectHead.classList.add('select__head');
            selectHead.classList.remove('select__head-open');
            if (selectItem.textContent === 'Не задан') {
                selectHead.classList.remove('black');
                selectHead.textContent = 'Выбрать';
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

    document.onclick = function(event){
        if(!event.target.closest(chooseClass)){
            selectList.classList.remove('select__open-list');
            selectHead.classList.add('select__head');
            selectHead.classList.remove('select__head-open');
        }
    }
}



initSelect('.select-first', 
[{ value: '', label: 'Не задан' },
{ value: 'gold', label: 'GOLD' },
{ value: 'silver', label: 'SILVER' },
{ value: 'diamond', label: 'DIAMOND' }])

initSelect('.select-second',
[{ value: '', label: 'Не задан' },
{ value: 'green', label: 'GREEN' },
{ value: 'yellow', label: 'YELLOW' },
{ value: 'red', label: 'RED' },
{ value: 'blue', label: 'BLUE' }])

