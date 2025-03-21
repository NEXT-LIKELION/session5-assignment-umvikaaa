//실습3 (지피티의 도움을 받았지만 설명은 열심히 봤습니다다)
const choices = ["가위", "바위", "보"];
const computerChoice = choices[Math.floor(Math.random() * 3)];
const userChoice = prompt("가위, 바위, 보 중 하나를 입력하세요:");

if (!choices.includes(userChoice)) {
    console.log("잘못된 입력입니다. '가위', '바위', '보' 중에서 입력하세요.");
} else {
    console.log(`사용자: ${userChoice}`);
    console.log(`컴퓨터: ${computerChoice}`);

    if (userChoice === computerChoice) {
        console.log("무승부!");
    } else if (
        (userChoice === "가위" && computerChoice === "보") ||
        (userChoice === "바위" && computerChoice === "가위") ||
        (userChoice === "보" && computerChoice === "바위")
    ) {
        console.log("사용자가 이겼습니다!");
    } else {
        console.log("컴퓨터가 이겼습니다!");
    }
}