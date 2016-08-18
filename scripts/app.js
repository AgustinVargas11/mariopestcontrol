'use strict';

var goombaPrice = Number(document.getElementById('goomba-price').innerHTML),
    bobPrice    = Number(document.getElementById('bob-price').innerHTML),
    cheepsPrice = Number(document.getElementById('cheeps-price').innerHTML),
    totalPrice = goombaPrice + bobPrice + cheepsPrice,
    priceOutput  = document.getElementById('total-price');

priceOutput.innerHTML += '<h2 class="total">' + totalPrice+ "</h2>";