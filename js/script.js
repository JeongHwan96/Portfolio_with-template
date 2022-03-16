const content = "주도적으로 문제해결과 목표달성을 위해 노력하는 김정환 입니다.";
const text = document.querySelector(".typingContents");
let i = 0;

function typing() {
  if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt;
    i++;
  }
}
setInterval(typing, 200);
