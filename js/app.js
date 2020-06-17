var txt;
var clear;
var divide;
var multiply;
var seven;
var eight;
var nine;
var less;
var four;
var five;
var six;
var plus;
var three;
var two;
var one;
var zero;
var doblezero;
var point;
var equal;

var getelements = function () {
  txt = document.getElementById("txt");
  clear = document.getElementById("clear");
  divide = document.getElementById("divide");
  multiply = document.getElementById("multiply");
  seven = document.getElementById("seven");
  eight = document.getElementById("eight");
  nine = document.getElementById("nine");
  less = document.getElementById("less");
  four = document.getElementById("four");
  five = document.getElementById("five");
  six = document.getElementById("six");
  plus = document.getElementById("plus");
  three = document.getElementById("three");
  two = document.getElementById("two");
  one = document.getElementById("one");
  zero = document.getElementById("zero");
  doblezero = document.getElementById("doblezero");
  point = document.getElementById("point");
  equal = document.getElementById("equal");
};

var operations = function () {
  clear.onclick = function () {
    txt.value = "";
  };
  divide.onclick = function () {
    txt.value += "/";
  };
  multiply.onclick = function () {
    txt.value += "*";
  };
  seven.onclick = function () {
    txt.value += "7";
  };
  eight.onclick = function () {
    txt.value += "8";
  };
  nine.onclick = function () {
    txt.value += "9";
  };
  less.onclick = function () {
    txt.value += "-";
  };
  four.onclick = function () {
    txt.value += "4";
  };
  five.onclick = function () {
    txt.value += "5";
  };
  six.onclick = function () {
    txt.value += "6";
  };
  plus.onclick = function () {
    txt.value += "+";
  };
  three.onclick = function () {
    txt.value += "3";
  };
  two.onclick = function () {
    txt.value += "2";
  };
  one.onclick = function () {
    txt.value += "1";
  };
  zero.onclick = function () {
    txt.value += "0";
  };
  doblezero.onclick = function () {
    txt.value += "00";
  };
  point.onclick = function () {
    txt.value += ".";
  };
  equal.onclick = function () {
    txt.value = eval(txt.value);
  };
};

var init = function () {
  getelements();
  operations();
};

window.onload = init;
