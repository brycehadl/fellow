// Assignment code here
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// clipboard.addEventListener('click', () => {
// 	const textarea = document.createElement('textarea');
// 	const password = resultEl.innerText;

// 	if(!password) { return; }

// 	textarea.value = password;
// 	document.body.appendChild(textarea);
// 	textarea.select();
// 	document.param('copy');
// 	textarea.remove();
// 	alert('Password copied to clipboard');
// });

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  // Doesn't have a selected type
  if (typesCount === 0) {
    return "";
  };

  // create a loop
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  };

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
};

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
};







// const resultEl = document.getElementById('result');
// const lengthEl = document.getElementById('length');
// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numbersEl = document.getElementById('numbers');
// const symbolsEl = document.getElementById('symbols');
// const generateEl = document.getElementById('generate');
// const clipboardEl = document.getElementById('clipboard');

// const randomFunc = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   symbol: getRandomSymbol
// };

// clipboardEl.addEventListener('click', () => {
//   const textarea = document.createElement('textarea');
//   const password = resultEl.innerText;

//   if(!password) {
//     return;
//   }

//   textarea.value = password;
//   document.body.appendChild(textarea);
//   textarea.select();
//   document.execCommand('copy');
//   textarea.remove();
//   alert('Password copied to clipboard!');
// })


// generateEl.addEventListener('click', () => {
//   const length = +lengthEl.value;
//   const hasLower = lowercaseEl.checked;
//   const hasUpper = uppercaseEl.checked;
//   const hasNumber = numbers.checked;
//   const hasSymbol = lowercaseEl.checked;
//   resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
// });

// function generatePassword(lower, upper, number, symbol, length) {
//   let generatedPassword = '';
//   const typesCount = lower + upper + number + symbol;

//   console.log('typesCount: ', typesCount);

//   const typesArr= [{ lower }, { upper }, { number }, { symbol }].filter
//   (
//     item => Object.values(item)[0]
//   );

//     console.log('typesArr: ', typesArr)

//   if(typesCount === 0) {
//     return '';
//   }

//   for(let i = 0; i < length; i += typesCount) {
//     typesArr.forEach(type => {
//       const funcName = Object.keys(type)[0];
//       console.log('funcName: ', funcName);
//       generatedPassword += randomFunc[funcName]()
//     })
//   }
//   const finalPassword = generatedPassword.slice(0, length);

//   return finalPassword;
// };
// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");
// var x = document.createElement("INPUT");
// x.setAttribute("type", "text");

// function generatePassword(lower, upper, number, symbol, length) {
//   let generatedPassword = '';
//   const typesCount = lower + upper + number + symbol;

//   console.log('typesCount: ', typesCount);

//   const typesArr= [{ lower }, { upper }, { number }, { symbol }].filter
//   (
//     item => Object.values(item)[0]
//   );

//     console.log('typesArr: ', typesArr)

//   if(typesCount === 0) {
//     return '';
//   }

//   for(let i = 0; i < length; i += typesCount) {
//     typesArr.forEach(type => {
//       const funcName = Object.keys(type)[0];
//       console.log('funcName: ', funcName);
//       generatedPassword += randomFunc[funcName]()
//     })
//   }
//   const finalPassword = generatedPassword.slice(0, length);

//   return finalPassword;
// };

// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// };
// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// };
// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// };
// function getRandomSymbol() {
//   const symbols = '!@#$%^&*()={}<>?,.';
//   return symbols[Math.floor(Math.random() * symbols.length)];
// };




// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generatBtn.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbers.checked;
  const hasSymbol = lowercaseEl.checked;
  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});