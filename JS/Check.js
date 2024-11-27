// 로컬 스토리지에서 이름을 가져와 출력
const nameDisplay = document.getElementById("nameList");
const userName = localStorage.getItem("userName");

if (userName) {
    nameDisplay.innerText = userName; // 로컬 스토리지에서 가져온 이름 출력
} else {
    nameDisplay.innerText = "입력한 이름이 없습니다."; // 이름이 없을 경우 메시지
}