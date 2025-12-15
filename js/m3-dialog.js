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
