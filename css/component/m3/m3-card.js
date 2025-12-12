function onEdit() {
    alert("편집 버튼이 클릭되었습니다!");
}

const card = document.querySelector('.m3-card');
card.addEventListener('dragstart', () => {
  card.classList.add('drag');
});
card.addEventListener('dragend', () => {
  card.classList.remove('drag');
});


const card2 = document.querySelector('.m3-card-horizontal');
card2.addEventListener('dragstart', () => {
  card2.classList.add('drag');
});
card2.addEventListener('dragend', () => {
  card2.classList.remove('drag');
});

