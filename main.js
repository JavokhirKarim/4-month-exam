/////////////////////1-masala
// function getSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     let digit = (i - 1) * i;
//     sum = sum + digit;
//   }
//   console.log(sum);
// }
// getSum(5);

/////2-masala
// let arr = [1589, 31851, 512, 78, 180975];
// for (let i of arr) {
//   let sum = 0;
//   let l = i.toString();
//   for (j = 0; j <= l.length; j++) {
//     let yigindi = 0;
//     let son = l * 1;
//     while (son > 0) {
//       yigindi += son % 10;
//       son = Math.floor(son / 10);
//     }
//     console.log(yigindi);
//     break;
//   }
// }

/////3-masala
// function getTotalPrice(ids, products) {
//   let sum = 0;
//   for (let i of ids) {
//     sum += products[i].price;
//   }
//   console.log(sum);
// }
// getTotalPrice(
//   [1, 2, 3],
//   [
//     { id: 1, name: "Bike", price: 100 },
//     { id: 2, name: "TV", price: 400 },
//     { id: 3, name: "Album", price: 800 },
//     { id: 4, name: "Book", price: 600 },
//     { id: 5, name: "Phone", price: 500 },
//     { id: 6, name: "Computer", price: 1000 },
//     { id: 7, name: "Skate", price: 300 },
//     { id: 8, name: "Keyboard", price: 200 },
//     { id: 9, name: "Bottle", price: 700 },
//   ]
// );

////////////////////////4-masala
// let str = "Men kelajakda kuchli dasturchi bo'laman";
// let s = str.split("").filter((el, i, arr) => el !== " ");
// let e = s.filter((el, i, arr) => el !== "e");
// let a = e.filter((el, i, arr) => el !== "a");
// let u = a.filter((el, i, arr) => el !== "u");
// let o = u.filter((el, i, arr) => el !== "o");
// let i = o.filter((el, i, arr) => el !== "i");
// let sign = i.filter((el, i, arr) => el !== "'");
// let len = s.filter((el) => el !== "'").length;
// let undosh = s.filter((el) => el !== "'").length - sign.length;
// console.log(Math.abs(undosh - sign.length));

//////5-masla
// function getNumberDigit(arr) {
//   const result = {};

//   for (let i = 0; i < arr.length; i++) {
//     const number = arr[i];
//     const numberOfDigits = number.toString().length;
//     // console.log(numberOfDigits);
//     result[number] = numberOfDigits;
//   }

//   return result;
// }

// const numbersArray = [10, 453, 89, 589, 9034, 28574, 184, 73901, 5];

// console.log(getNumberDigit(numbersArray));
// let showMenu = false;
// const navbar = document.querySelector(".nav-links");
// const menuBtn = document.querySelector(".menu-btn");
// console.log(navbar, menuBtn);

// menuBtn.addEventListener("click", () => {
//   showMenu = !showMenu;
//   if (showMenu) {
//     navbar.classList.add("show-menu");
//   } else {
//     navbar.classList.remove("show-menu");
//   }
// });
window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = "20px";
  } else {
    backtop.style.bottom = "-50px";
  }
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "5px 5px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "15px 15px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}
