'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
    var elem = document.createElement('ul')

    for (var i = 0; i < friends.length; i++)
    {
        var list = document.createElement('li')
        list.innerHTML = friends[i].firstName+' '+friends[i].lastName
        elem.appendChild(list)
    }

    return elem
}
