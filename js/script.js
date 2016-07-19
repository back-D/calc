"use strict";

var query = '';
var operand = '';
var inputElement = document.getElementsByClassName('input-text')[0];
var elements = document.getElementsByClassName('btn');

function resetCalculator() {
    query = '';
    operand = '';
}

function onBtnClick(event) {
    var btn = event.target,
        operator = btn.dataset.operator,
        value = btn.dataset.value;

    if (!operator) {
        operand += value;
    } else {
        if (operand) {
            if (operator === 'result') {
                query += operand;
                inputElement.value = eval(query);

                resetCalculator();
                return;
            }
            query += operand + operator;
        } else {
            query = query.slice(0, query.length - 1) + operator;
        }
    }

    query += '+' + event.target.dataset.value;
}

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', onBtnClick);
}