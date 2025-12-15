function onEdit() {
  alert("편집 버튼이 클릭되었습니다!");
}

const cards = document.querySelectorAll('.m3-card, .horizontal');
cards.forEach(function (card) {
  card.addEventListener('dragstart', function () {
    card.classList.add('drag');
  });
  card.addEventListener('dragend', function () {
    card.classList.remove('drag');
  });
});