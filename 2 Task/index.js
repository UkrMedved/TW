"use strict";
var blocks = [5, 8, 2, 1, 15, 2, 3, 5, 9, 11, 10, 4, 3, 14, 1, 7, 10, 3, 2, 13];
var chart = document.getElementById('chart');
var size = 10;

blocks.forEach(function (x) {
  var div = document.createElement('div');
  var value = document.createElement('h5');
  var num = document.createElement('div');
  var color = void 0;
  if (x < 6) color = 'green';
  if (x > 5 && x < 11) color = 'yellow';
  if (x > 10) color = 'red';
  value.textContent = x ;
  div.setAttribute('style', 'height: ' + x * size + 'px; width: 30px; background: ' + color);
  num.appendChild(value);
  num.appendChild(div);
  chart.appendChild(num);
});