'use strict';

var goombaPrice  = document.getElementById('goomba-price').innerHTML,
    bobPrice     = document.getElementById('bob-price').innerHTML,
    cheepsPrice  = document.getElementById('cheeps-price').innerHTML,
    totalPrice   = Number(goombaPrice) + Number(bobPrice) + Number(cheepsPrice),
    priceOutput  = document.getElementById('total-price');

priceOutput.innerHTML += '<h2 class="total">' + totalPrice+ "</h2>";