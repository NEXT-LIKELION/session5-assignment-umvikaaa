//실습1
const movies = prompt("등급을 입력하세요 (A, B, C)")
if (movies === "A") {
    console.log("모든 등급 영화 열람 가능합니다");
} else if (movies === "B") {
    console.log("B, C 등급 영화 열람 가능합니다");
} else if (movies === "C") {
    console.log("C 등급 영화 열람 가능합니다");
} else {
    console.log("올바른 등급을 입력하세요 (A, B, C 중 하나)");
}

//실습2
let height = 5;
for (let i = 0; i < height; i++) {
    let spaces = "";
    let stars = "";
    for (let j = 0; j < height - i - 1; j++) {
        spaces += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        stars += "*";
    }
    console.log(spaces + stars);
}