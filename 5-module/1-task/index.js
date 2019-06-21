'use strict';


/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(item) {
    //берем заголовок
    const header = item.querySelectorAll('thead > tr > td');
    //делаем из заголовка обьект с названиями колонок и их поярдковыми номерами
    let columnsNumber = {};
    for (var j = 0; j < header.length; j++)
    {
        let name = header[j].textContent;
        columnsNumber[name] = j;
    }
    console.log(columnsNumber);
    //------------------------------------------------------------
    //let rows = table.querySelectorAll('tbody');

    for (var i = 1; i < item.rows.length; i++)
    {
        var gender  = item.rows[i].cells[columnsNumber.Gender].textContent;
        var age     = item.rows[i].cells[columnsNumber.Age].textContent;
        //-----ставим класс на пол---------------------------------------------------------
        if (gender === 'm') {item.rows[i].classList.add('male');}
        else                {item.rows[i].classList.add('female');}
        //------ставим стиль на возраст------------------------------------------------
        if (age < 18) {item.rows[i].style='text-decoration: line-through';}
        //------ставим атрибут hidden----------------------------------------------------
        if (item.rows[i].hasAttribute('hidden') === false) {item.rows[i].setAttribute('hidden',true)}
        //------ставим класс available/unavailable---------------------------------------
        if(item.rows[i].cells[columnsNumber.Status].getAttribute('data-available') === 'true')
        {item.rows[i].classList.add('available')}
        if (item.rows[i].cells[columnsNumber.Status].getAttribute('data-available') === 'false')
        {item.rows[i].classList.add('unavailable')}
    }

}