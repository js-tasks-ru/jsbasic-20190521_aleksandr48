'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let e = str
        .replace(/[^0-9-.,\s]/g,'')
        .replace(/\s/g,',')
        .split(',');
    let obj = {};
    obj.min = (Math.min.apply(null, e));
    obj.max = (Math.max.apply(null, e));
    return obj;
}

