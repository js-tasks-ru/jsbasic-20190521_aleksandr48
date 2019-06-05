/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone (mas) {
    let arr = {};

    for (const key in mas) {

        if (typeof mas[key] != 'object') {
            arr[key] = mas[key];
        }

        if (typeof mas[key] === 'object') {
            arr[key] = (mas[key] === null ? null : clone(mas[key]));
        }
    }
    return arr
}