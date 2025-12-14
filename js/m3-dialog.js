var modal = document.querySelector(".m-dialog");
var openBtn = document.querySelector(".openBtn");
var closeBtn = modal.querySelector(".close-btn");
var confirmBtn = modal.querySelector(".confirm-btn");

// 열기 버튼 클릭 → 모달 열기
openBtn.onclick = () => {
    modal.classList.add("open");
}

// 닫기 버튼 클릭 → 모달 닫기
closeBtn.onclick = () => {
    modal.classList.remove("open");
}

// 배경 클릭 시 닫기 (선택 기능)
modal.onclick = (e) => {
    if (e.target === modal) {
        modal.classList.remove("open");
    }
}


// dialog 태그 사용시
// Open Dialog
// openBtn.onclick = () => {
//     // dialog.show(); // backdrop 없음
//     modal.showModal(); // backdrop 있음
// };

// // Close Dialog
// closeBtn.onclick = () => {
//     modal.close();
// };

// // Confirm Action
// confirmBtn.onclick = () => {
//     // Action logic here...
//     console.log("Confirmed!");
//     modal.close();
// };

// // Backdrop Click Close
// modal.onclick = (event) => {
//     if (event.target === modal) {
//         modal.close();
//     }
// };
