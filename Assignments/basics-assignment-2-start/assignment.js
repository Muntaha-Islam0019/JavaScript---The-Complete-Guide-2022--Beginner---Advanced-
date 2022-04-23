const task3Element = document.getElementById('task-3');

function aFunc() {
  alert('Bruh!');
}

function anotherFunc(name) {
  alert('Hello ' + name + '!');
}

aFunc();
anotherFunc('Muntaha');

task3Element.addEventListener('click', aFunc);

function brandNewFunc(aName, anotherName, yetAnotherName) {
  return aName + anotherName + yetAnotherName;
}

alert(brandNewFunc('Jake', 'Jill', 'Hill'))
