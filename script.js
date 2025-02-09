let btn = document.querySelector(".btn");
let article1 = document.querySelector(".article_1");
let article2 = document.querySelector(".article_2");
let article3 = document.querySelector(".article_3");
let article4 = document.querySelector(".article_4");
let btnimg = document.querySelector(".btn_img");
let secu = 1;
function run() {
  if (secu == 1) {
    article1.className = "article_1_1";
    article2.className = "article_2_1";
    article3.className = "article_3_1";
    article4.className = "article_4_1";
    btnimg.src = "img/sun.png";
    btn.className = "btn_1";
    secu = 0;
  } else if (secu == 0) {
    article1.className = "article_1";
    article2.className = "article_2";
    article3.className = "article_3";
    article4.className = "article_4";
    btnimg.src = "img/moon.png";
    btn.className = "btn";
    secu = 1;
  }
}
btn.addEventListener("click", run);
