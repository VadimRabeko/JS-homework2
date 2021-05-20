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
};
console.log(tree);

for (let i in tree) {
  if (typeof tree[i] === 'number') {
    tree[i] /= 2;
  }
}
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
