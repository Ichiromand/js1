function initSelect(chooseClass, options, callback){
    let select = document.querySelector(chooseClass);
    let selectHead = select.querySelector('.select__head');
    let selectList = document.createElement('ul');
    selectList.className = 'select__list';
    select.appendChild(selectList);
    

    options.forEach(function(item, value){
        let selectItem = document.createElement('li');
        selectItem.className = 'select__item';
        selectList.appendChild(selectItem);
        selectItem.textContent = item.label;
        selectItem.onclick = function(){
            value = item.value
            callback(value)
            selectHead.textContent = selectItem.textContent;
            selectHead.classList.add('black');
            selectList.classList.remove('select__list--open');
            selectHead.classList.remove('select__head--open');
            if (selectItem.textContent === 'Не задан') {
                selectHead.classList.remove('black');
                selectHead.textContent = 'Выбрать';
            }
        }
    
    })
    
    selectHead.onclick = function (){
        if(selectHead.classList.contains('select__head--open')){
            selectList.classList.remove('select__list--open');
            selectHead.classList.remove('select__head--open');
        } else {
            selectList.classList.add('select__list--open');
            selectHead.classList.add('select__head--open');
        }
    }

    document.addEventListener('click', function (event){
        if(!event.target.closest(chooseClass)){
            selectList.classList.remove('select__list--open');
            selectHead.classList.remove('select__head--open');
        }
    }) 
}



initSelect('.select-first', 
[{ value: '', label: 'Не задан' },
{ value: 'gold', label: 'GOLD' },
{ value: 'silver', label: 'SILVER' },
{ value: 'diamond', label: 'DIAMOND' }],
function(value){
    console.log(value)
}
)

initSelect('.select-second',
[{ value: '', label: 'Не задан' },
{ value: 'green', label: 'GREEN' },
{ value: 'yellow', label: 'YELLOW' },
{ value: 'red', label: 'RED' },
{ value: 'blue', label: 'BLUE' }],
function(value){
    console.log(value)
}
)

