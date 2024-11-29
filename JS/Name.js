const nameList = [];
const signUpButton = document.getElementById("signUpButton");

signUpButton.disabled = true

document.getElementById("verify").addEventListener("click", function () {
const codeInput = document.getElementById("name").value;

const code = parseInt(codeInput, 10);
if (isNaN(code) || code < 44032 || code > 55203) {
    showAlert("아스키 코드로 이름을 입력하십시오.", null);
    document.getElementById("name").value = "";
    nameList.length = 0;
    document.getElementById("nameList").innerText = "";
    document.getElementById("name").value = "";
    localStorage.removeItem('userName');
    signUpButton.disabled = true;
    return;
}

const char = String.fromCharCode(code);
showAlert("정확하게 입력한 것이 맞습니까?", function () {
    showAlert("정말 정확하게 입력하였습니까?", function () {
    showAlert(`${char}이/가 정말 맞습니까?`, function () {
        const char = String.fromCharCode(code);
        nameList.push(char);
        document.getElementById("nameList").innerText = nameList.join("");
        document.getElementById("name").value = "";
        
        localStorage.setItem("userName", nameList.join("")); // 로컬 스토리지에 이름 저장
        signUpButton.disabled = false;
    });
    });
});
});

document.getElementById("reset").addEventListener("click", function () {
    showAlert("초기화하시겠습니까?", function () {
      showAlert("정말 초기화하시겠습니까?", function () {
        showAlert("초기화합니다.", function () {
            nameList.length = 0;
            document.getElementById("nameList").innerText = "";
            document.getElementById("name").value = "";
            localStorage.removeItem('userName');
            signUpButton.disabled = true;
    });
    });
});
});

function showAlert(message, callback) {
    document.getElementById("alertMessage").innerText = message;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("Alert").style.display = "block";

    let count = 1;
    document.getElementById("count").innerText = count;
    document.getElementById("alertButton").disabled = true;

    const countInterval = setInterval(() => {
    count--;
    document.getElementById("count").innerText = count;
    if (count <= 0) {
    clearInterval(countInterval);
    document.getElementById("alertButton").disabled = false;
    document.getElementById("alertButton").innerText = "확인";
    }
}, 1000);

document.getElementById("alertButton").onclick = function () {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("Alert").style.display = "none";
    if (callback) callback();
    document.getElementById("alertButton").innerText = "확인";
};
}

// Sign up이 disable이어도 버튼이 눌리는 현상 발생 -> 이벤트 리스너 추가해 해결
signUpButton.addEventListener("click", function(event) {
    if (signUpButton.disabled) {
        event.preventDefault(); // 버튼 비활성화 -> 클릭 무시
    } else { // signUpButton == enable
        window.location.href = "Main.html";
    }
});