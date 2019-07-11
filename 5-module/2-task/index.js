'use strict';


function SortableTable(items) {

    this.el = document.createElement('table');

    let list = items.map(function (i) {
        return ('<tr><td>' + i.name + '</td><td>' + i.age + '</td><td>' + i.salary + '</td><td>' + i.city + '</td></tr>')
    }).join('');

    this.el.innerHTML = '<thead><tr><td>Name</td><td>Age</td><td>Salary</td><td>City</td></tr></thead><tbody>'+list+'</tbody>'
    //============================================================================
    this.sort = function (column, desc = false) {
    //----------------------------------------------------------------
        function column_name(item) {
            if (item === 0) return 'name';
            if (item === 2) return 'salary';
        }

        let  col = column_name(column);
    //--------------------------------------------------------------
        items.sort(function(a,b){
            if (a[col] > b[col]) return (desc === false ? 1: -1);
            if (a[col] < b[col]) return (desc === false ? -1: 1);
        });

        list = items.map(function(i) {return (
            '<tr><td>'+i.name+'</td><td>'+i.age+'</td><td>'+i.salary+'</td><td>'+i.city+'</td></tr>'
        )}).join('');

        this.el.innerHTML = '<thead><tr><td>Name</td><td>Age</td><td>Salary</td><td>City</td></tr></thead><tbody>'+list+'</tbody>'
    };
}

