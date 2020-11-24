// const { exit } = require("browser-sync");

$(document).ready(() => {
  let i = 0;
  const pictures = document.querySelector(".container__picture").children;
  const texts = document.querySelector(".group").children;
  console.log(texts);
  $(".container__buttons figure").hover(function () {
    $(this).toggleClass("is--grey");
  });

  $(".left").click(function () {
    $(pictures[i]).toggleClass("is--active");
    $(texts[i]).toggleClass("is--active");
    i = (1 + i) % pictures.length;
    $(pictures[i]).toggleClass("is--active");
    $(texts[i]).toggleClass("is--active");
  });

  $(".right").click(function () {
    if (i) {
      $(pictures[i]).toggleClass("is--active");
      $(texts[i]).toggleClass("is--active");
      i = (i - 1) % pictures.length;
      $(pictures[i]).toggleClass("is--active");
      $(texts[i]).toggleClass("is--active");
      console.log(i);
    } else {
      $(pictures[i]).toggleClass("is--active");
      $(texts[i]).toggleClass("is--active");
      i = pictures.length;
      i = (i - 1) % pictures.length;
      $(pictures[i]).toggleClass("is--active");
      $(texts[i]).toggleClass("is--active");
      console.log(i);
    }
  });
});
