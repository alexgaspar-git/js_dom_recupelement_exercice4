//1

let secondH1 = document.getElementsByTagName('h1')[1];
console.log(secondH1.textContent);

//2

let lastLi = document.getElementsByTagName('li')[3];
console.log(lastLi.textContent);

//3

let firstP = document.getElementsByTagName('p')[0];
console.log(firstP.textContent.toUpperCase());

//4

let li = document.getElementsByTagName('li');

let liTab = Array.prototype.slice.call(li);

liTab.forEach(element => {
    console.log(element.textContent.toUpperCase());
});

