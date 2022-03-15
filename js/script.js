console.log(`Test`);

// for the phone nav list function
let navListButton = document.querySelector(".nList");
let phoneNavList = document.querySelector("header .Container nav");

navListButton.onclick = function () {
	navListButton.classList.toggle("navList");
	phoneNavList.classList.toggle("exbend");
	console.log(`Nav`);
};

// example on a slid list

// let leftButton = document.querySelector(".leftButton");
// let rightButton = document.querySelector(".rightButton");
// let redShoes = document.querySelectorAll(".red");
// let blueShoes = document.querySelectorAll(".blue");
// let yellowShoes = document.querySelectorAll(".yellow");
// let allShoes = [
// 	[redShoes[0], redShoes[1]],
// 	[blueShoes[0], blueShoes[1]],
// 	[yellowShoes[0], yellowShoes[1]],

// let i = 0;
// rightButton.onclick = function () {
// 	i++;
// 	if (i === 3) {
// 		i = 0;
// 	}
// 	allShoes.forEach((ele) => {
// 		if (
// 			ele[0].classList.contains("activat") &&
// 			ele[1].classList.contains("activat")
// 		) {
// 			ele[0].classList.remove("activat");
// 			ele[1].classList.remove("activat");
// 			allShoes[i][0].classList.add("activat");
// 			allShoes[i][1].classList.add("activat");
// 		} else if (
// 			!ele[0].classList.contains("activat") &&
// 			ele[1].classList.contains("activat")
// 		) {
// 			allShoes[i][0].classList.add("activat");
// 			allShoes[i][1].classList.add("activat");
// 		}
// 	});
// };
// leftButton.onclick = function () {
// 	i--;
// 	if (i === -1) {
// 		i = 2;
// 	}
// 	allShoes.forEach((ele) => {
// 		if (
// 			ele[0].classList.contains("activat") &&
// 			ele[1].classList.contains("activat")
// 		) {
// 			ele[0].classList.remove("activat");
// 			ele[1].classList.remove("activat");
// 			allShoes[i][0].classList.add("activat");
// 			allShoes[i][1].classList.add("activat");
// 		} else if (
// 			!ele[0].classList.contains("activat") &&
// 			ele[1].classList.contains("activat")
// 		) {
// 			allShoes[i][0].classList.add("activat");
// 			allShoes[i][1].classList.add("activat");
// 		}
// 	});
// };
