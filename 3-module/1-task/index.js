/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data,age) {
    let year = age;
    let raw = data.filter(function(number) {
        console.log(year);
        return number.age <= age;
    });
    let arr = raw.map(function(item){
        return item.name+', '+item.balance;
    }).join('\n');
    return arr
}


