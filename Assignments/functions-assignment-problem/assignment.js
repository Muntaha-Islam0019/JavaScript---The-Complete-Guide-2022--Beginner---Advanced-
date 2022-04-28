function sayHello(name) {
  console.log('Hi ' + name);
}

sayHello();

const sayHelloNew = (name) => console.log('Hi ' + name);

sayHelloNew('NewName');

const sayHelloOne = (text, name) => {
  console.log(text + name);
};

sayHelloOne('My name is ', 'OneName');

const sayHelloTwo = () => {
  console.log('TwoName');
};

sayHelloTwo();

const sayHelloThree = () => {
  return 'ThreeName';
};

const output = sayHelloThree();
console.log(output);

const sayHelloNewUpdated = (name = 'Muntaha') => console.log('Hi ' + name);

sayHelloNewUpdated();

const checkInput = (...inputs) => {
  for (const input of inputs) {
    if (!input) {
      console.log('There is an empty input!');
      return;
    }
  }

  console.log('There are no empty inputs!');
};

checkInput('1', '2', '3', '4', '')