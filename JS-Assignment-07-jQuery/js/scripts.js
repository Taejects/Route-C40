/* Nav Animation ---------------------------- */
$("#offcanvas ul a[href^='#']").on("click", function () {
  let id = $(this).attr("href");
  let target = $(document).find(id);
  let top = target.offset().top;

  $("body, html").animate({ scrollTop: top }, 500);
});

/* Off-Canvas Sliding Nav ------------------- */
let menuBtn = $("#menu-toggle");
let menuBar = $("#offcanvas");
let menuBarWidth = menuBar.innerWidth();
let closeBtn = $("#close-vanvas");

menuBar.show().css("left", -menuBarWidth);

menuBtn.on("click", function () {
  let menuBarLeft = menuBar.offset().left;
  if (menuBarLeft == 0) {
    closeOffCanvas();
  } else {
    $(menuBar).animate({ left: 0 }, 500);
    $(menuBtn).animate({ marginLeft: menuBarWidth }, 500);
    $(".hero-section .wrapper").animate({ marginLeft: menuBarWidth });
  }
});

$(closeBtn).on("click", function () {
  closeOffCanvas();
});

function closeOffCanvas() {
  $(menuBar).animate({ left: -menuBarWidth }, 500);
  $(menuBtn).animate({ marginLeft: 0 }, 500);
  $(".hero-section .wrapper").animate({ marginLeft: 0 });
}

/* Accordion Tabs ---------------------------- */
let accTabs = $("#acc-tabs");
let accTitle = $("#acc-tabs h3");

accTitle.on("click", function () {
  if (
    $(this).next("div").attr("style") == "display: none;" ||
    $(this).next("div").attr("style") == "display: none"
  ) {
    let nextEl = $(this).next("div");
    $(this).parent().find("div").slideUp();
    nextEl.slideDown();
  } else {
    $(this).next("div").slideUp();
  }
});

/* Textarea Characters Counter --------------- */
let textArea = $("#user-msg");
let counter = textArea.next("span").find("span");
let charsNum = 100;
textArea.on("keyup", function () {
  charsNum = $(this).val().length;
  if (charsNum < 101 && charsNum >= 0) {
    counter.text(100 - charsNum);
  } else {
    counter.text("NO more");
  }
});

/* Event Countdown --------------------------- */
function countdown() {
  // total time in seconds
  let endTime = Date.parse(new Date("30 March 2023 9:00")) / 1000; // One second in Millisecond ;
  let now = Date.parse(new Date()) / 1000;
  let remainTime = endTime - now;

  let days = Math.floor(remainTime / 86400); // Total seconds in a day
  let hours = Math.floor((remainTime - days * 86400) / 3600); // Total seconds in an hour
  let minutes = Math.floor((remainTime - days * 86400 - hours * 3600) / 60); // Total seconds in a minute
  let seconds = Math.floor(remainTime - days * 86400 - hours * 3600 - minutes * 60);

  if (hours < "10") {
    hours = "0" + hours;
  }
  if (minutes < "10") {
    minutes = "0" + minutes;
  }
  if (seconds < "10") {
    seconds = "0" + seconds;
  }

  $("#days").html(days);
  $("#hours").html(hours);
  $("#minutes").html(minutes);
  $("#seconds").html(seconds);
}

setInterval(function () {
  countdown();
}, 1000);
