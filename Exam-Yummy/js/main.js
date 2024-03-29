import { fetchMeals } from "./meals-get.js";
import { fetchAreasIngs } from "./areas-ings-get.js";
import { searchMeals } from "./search.js";

/* Call API for First Time, Filling Homepage with Random Meals */
let homeURL = "https://themealdb.com/api/json/v1/1/search.php?s=";
fetchMeals(homeURL);
$("#search-meals").removeClass("active");

/* Areas Menu Item Trigger */
$("#getAreas").click(function () {
  toTop();
  /* Call for listing all areas */
  let areasURL = "https://themealdb.com/api/json/v1/1/list.php?a=list";
  fetchAreasIngs(areasURL, "area");
  $("#search-meals").removeClass("active");
});

/* Ingredients Menu Item Trigger */
$("#getIngs").click(function () {
  toTop();
  /* Call for listing all ingredients */
  let ingURL = "https://themealdb.com/api/json/v1/1/list.php?i=list";
  fetchAreasIngs(ingURL, "ing");
  $("#search-meals").removeClass("active");
});

/* Categories Menu Item Trigger */
let categoriesURL = "https://themealdb.com/api/json/v1/1/categories.php";
$("#getCategories").click(function () {
  toTop();
  /* Call for listing all categories */
  fetchAreasIngs(categoriesURL, "category");
  $("#search-meals").removeClass("active");
});

/* Search Menu Item Trigger */
$("#search").click(function () {
  toTop();
  $("#search-meals").addClass("active");
});

/* Search By First Letter */
let keyword, url;
$("#by-letter").bind("keyup", function () {
  /* Accept only one character*/
  const node = $(this);
  node.val(node.val().replace(/^([a-zA-Z]).*/g, "$1"));
  /* Check if user input a value */
  if ($(this).val()) {
    keyword = $(this).val();
    url = `https://themealdb.com/api/json/v1/1/search.php?f=${keyword}`;
    searchMeals(url);
  }
});

/* Search By Meal Name */
$("#by-name").on("keyup", function () {
  /* Check if user input a value */
  if ($(this).val()) {
    keyword = $(this).val();
    url = `https://themealdb.com/api/json/v1/1/search.php?s=${keyword}`;
    searchMeals(url);
  }
});

/* Open / Close Contact Modal */
$("#contact").click(function () {
  $("#contact-form").show();
  $("#contact-modal").addClass("show d-flex").removeClass("d-none");
});
$("#contact-modal .btn-close").click(function () {
  $("#contact-modal").removeClass("show d-flex").addClass("d-none");
});

/* Animate page to top */
function toTop() {
  $("body, html").animate({ scrollTop: top }, 500);
}

$(".site-logo, #home").click(function () {
  toTop();
  fetchMeals(homeURL);
  $("#search-meals").removeClass("active");
});

$(".site-logo").click(function () {
  $("nav .active").removeClass("active");
  $("#home").addClass("active");
});

/* Nav Animation */
let menuBtn = $("#menu-toggler");
let offcanvas = $("#offcanvas");
let nav = $("#offcanvas nav");
let navWidth = nav.innerWidth();

/*Start with navigation hidden*/
offcanvas.css("left", -navWidth);

/*Click to open navigation*/
menuBtn.on("click", function () {
  menuBtn.html(`<i class="fa fa-times fa-2xl"></i>`);
  let offcanvasLeft = offcanvas.offset().left;
  if (offcanvasLeft == 0) {
    closeOffcanvas();
  } else {
    offcanvas.animate({ left: 0 }, 500);
    for (let i = 0; i < 6; i++) {
      $("nav li")
        .eq(i)
        .animate({ top: 0 }, (i + 6) * 100);
    }
  }
});
/*click to close navigation*/
function closeOffcanvas() {
  menuBtn.html(`<i class="fa fa-bars fa-2xl"></i>`);
  for (let i = 0; i < 6; i++) {
    $("nav li")
      .eq(i)
      .animate({ top: 300 }, (i + 6) * 100);
  }
  offcanvas.animate({ left: -navWidth }, 500);
}

/*Escape to close modal*/
$(document).on("keydown", function (e) {
  if (e.key === "Escape") {
    $(".modal.show:not(#contact-modal)").removeClass("show d-flex").addClass("d-none");
  }
});

/*Navigation Active item*/
$("nav a:not(#contact)").click(function () {
  $(this).parent().parent().find(".active").removeClass("active");
  $(this).addClass("active");
});
