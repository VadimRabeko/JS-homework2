'use strict';

// TASKS FROM PRESENTATION <<<<<<<<<<<<<<<<<<<<<<<<<

//1<<<
let objName = {
  name: 'vadim',

  getName(a) {
    this.name = a;
    console.log(this.name);
  },
};

objName.getName('lera');
console.log(objName.name);

// 2, 3<<<

let obj = {
  name: 'vadim',
  phone: '555 - 555 - 123',
  email: 'kek@tms.by',
  getPhone(a) {
    this.phone = String(a);
  },
  getEmail(b) {
    this.email = b;
  },
};

obj.getPhone(3020327);
console.log(obj.phone);

obj.getEmail('lol@tms.by');
console.log(obj.email);

//4<<<

let tree = {
  name: 'oak',
  height: 30,
  'quantity of leafs': 7777,
  family: 'mafia',
  separate() {
    for (let i in this) {
      if (typeof this[i] === 'number') {
        this[i] /= 2;
      }
    }
  },
};

tree.separate();
console.log(tree);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// TASK 1 <<<

let letter = {
  a: 'b',
  c: 'd',
};

function convertObj(obj) {
  for (let i in obj) {
    let x = i;
    let y = obj[i];
    let newX = '';
    let newY = '';
    newX += y;
    newY += x;
    delete obj[i];
    i = newX;
    obj[i] = newY;
  }
}
convertObj(letter);
console.log(letter);

// TASK 2 <<<

function isEvenValue(obj) {
  let res = 0;
  for (let i in obj) {
    if (obj[i] % 2 == 0) {
      res++;
    }
  }
  if (res > 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isEvenValue({ x: 1, y: 5, z: 8 });

//TASKS FROM CODEWARS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//1 https://www.codewars.com/kata/555a67db74814aa4ee0001b5

function isNumEven(a) {
  if (a % 2 == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isNumEven(44);

//2 https://www.codewars.com/kata/5861d28f124b35723e00005e

function homecoming(distance, fuel) {
  let x = 1 / 25;
  let y = distance * x;
  if (y <= fuel) {
    console.log(true);
  } else {
    console.log(false);
  }
}
homecoming(50, 2);

//3 https://www.codewars.com/kata/53ee5429ba190077850011d4

function double(a) {
  return console.log(a * 2);
}
double(7);

//4 https://www.codewars.com/kata/57eae20f5500ad98e50002c5

function hateSpaces(str) {
  let splt = str.split(' ');
  let res = '';
  for (let i = 0; i < splt.length; i++) {
    let x = splt[i];
    res += x;
  }
  console.log(res);
}
hateSpaces('How Are You?');

//5 https://www.codewars.com/kata/53af2b8861023f1d88000832

function banjo(name) {
  if (name[0] == 'R' || name[0] == 'r') {
    console.log(`${name} plays banjo`);
  } else console.log(`${name} does not play banjo`);
}

banjo('Vadim');

//6 https://www.codewars.com/kata/535474308bb336c9980006f2

let greet = {
  name: 'vadIM',
  nameGreeting() {
    let x = this.name;
    let y = x.slice(1);
    x = x[0].toUpperCase();
    y = y.toLowerCase();
    let res = `Hello ${x + y}!`;
    return console.log(res);
  },
};
greet.nameGreeting();
