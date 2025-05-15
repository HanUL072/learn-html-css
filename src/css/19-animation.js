// 19-animation.js
// 버튼 클릭 시 .like 요소에 transition 클래스 토글

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.toggle-transition');
  const likeDiv = document.querySelector('.like');
  if (btn && likeDiv) {
    btn.addEventListener('click', function () {
      likeDiv.classList.toggle('transition');
    });
  }
});
