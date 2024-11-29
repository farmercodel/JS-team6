const colorPicker = document.querySelector('.color-picker-container');
const display = document.getElementById('birthdate-display');
const innerCircle = document.querySelector('.inner-circle');
const colorPickerCircle = document.querySelector('.color-picker');

let isDateFixed = false; // 생년월일 고정 여부
let selectedDate = null; // 생년월일 저장 변수
let saveBirthD = null;

// 날짜 계산용 변수
const startDate = new Date('1960-01-01');
const endDate = new Date('2024-12-31');
const totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));

// 유효한 RGB 고리 영역 내에서만 동작하도록 확인하는 함수
function isWithinRing(x, y, radiusOuter, radiusInner) {
    const distance = Math.sqrt(x * x + y * y);
    return distance <= radiusOuter && distance >= radiusInner;
}

// 마우스 움직임에 따라 생년월일 계산
colorPicker.addEventListener('mousemove', (event) => {
    if (isDateFixed) return; // 고정된 경우 동작하지 않음

    const rect = colorPicker.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    // RGB 고리의 유효 영역에서만 동작 (회색 고리 제외)
    if (!isWithinRing(x, y, rect.width / 2, rect.width / 3)) return;

    const angle = Math.atan2(y, x) * (180 / Math.PI);
    const hue = (angle + 360) % 360;

    // Map hue (0-360) to total days
    const dayIndex = Math.floor((hue / 360) * totalDays);
    selectedDate = new Date(startDate.getTime() + dayIndex * (1000 * 60 * 60 * 24)); // 생년월일 계산 및 저장

    // Format the date as YYYY-MM-DD
    const year = selectedDate.getFullYear();
    const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
    const day = selectedDate.getDate().toString().padStart(2, '0');

    display.textContent = `${year}-${month}-${day}`;
    saveBirthD = `${year} - ${month} - ${day}`
});

// RGB 고리를 클릭하면 생년월일 고정
colorPickerCircle.addEventListener('click', (event) => {
    const rect = colorPicker.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    // RGB 고리의 유효 영역에서만 고정
    if (!isWithinRing(x, y, rect.width / 2, rect.width / 3)) return;

    isDateFixed = true;
    display.style.color = "red"; // 고정 상태 표시

    console.log('생년월일 고정:', selectedDate); // 고정된 생년월일 확인용
    localStorage.setItem("birthday", saveBirthD);

});

// 생년월일 해제
innerCircle.addEventListener('click', () => {
    if (!isDateFixed) return; // 고정 상태가 아니면 무시
    isDateFixed = false;
    display.style.color = "#333"; // 기본 상태로 복원
    display.textContent = "YYYY-MM-DD"; // 기본 텍스트로 초기화
    selectedDate = null; // 고정 해제 시 생년월일 초기화

    localStorage.removeItem('birthday');

    console.log('생년월일 해제됨'); // 고정 해제 확인용
});