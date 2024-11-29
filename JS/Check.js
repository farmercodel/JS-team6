// 로컬 스토리지에서 이름을 가져와 출력
const nameDisplay = document.getElementById("nameList");
const userName = localStorage.getItem("userName");


const phoneDisplay = document.getElementById("savedPhoneNumber");
const fullNumber = localStorage.getItem("savedPhoneNumber")

const birthDisplay = document.getElementById("birthday")
const birth = localStorage.getItem("birthday")

if (userName) {
    nameDisplay.innerText = userName; // 로컬 스토리지에서 가져온 이름 출력
} else {
    nameDisplay.innerText = "입력한 이름이 없습니다."; // 이름이 없을 경우 메시지
}

if (fullNumber) {
    phoneDisplay.innerText = fullNumber; 
} else {
    phoneDisplay.innerText = "입력한 전화번호가 없습니다.";
}

if (birth) {
    birthDisplay.innerText = birth; 
} else {
    birthDisplay.innerText = "입력한 전화번호가 없습니다.";
}
