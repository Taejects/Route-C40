// Setting Variables -------------*/
let passText = "<i class='fa-regular fa-face-smile-beam'></i> Valid";
let failText = "<i class='fa-regular fa-face-sad-tear'></i> Invalid";
let userNameResult, userMailResult, userAgeResult, userTelResult, userPassResult;
let fleg;

/* Hint for password while user typing*/
$("#pass").keypress(function () {
  $("#pass")
    .next("span")
    .attr("class", "text-success")
    .html("At least 8 characters, 1 Number, 1 Lowercase, 1 Uppercase & 1 Special Character");
});

// Set REGEXs --------------------------*/
let nameREGEX = /^$|^\S+.*/;
let mailREGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let ageREGEX = /^\d+$/;
let telREGEX = /^\d{11}$/gm;
let passREGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;

// Validate User Name --------------------------*/
function validateUser() {
  userNameResult = nameREGEX.test($("#user").val());
  if ($("#user").val() && userNameResult) {
    $("#user").addClass("valid");
    $("#user").next("span").attr("class", "text-success").html(passText);
  } else {
    $("#user").removeClass("valid");
    $("#user").next("span").attr("class", "text-danger").html(failText);
  }
  check();
}
// Validate Email Address --------------------------*/
function validateEmail() {
  userMailResult = mailREGEX.test($("#email").val());
  if (userMailResult) {
    $("#email").addClass("valid");
    $("#email").next("span").attr("class", "text-success").html(passText);
  } else {
    $("#email").next("span").attr("class", "text-danger").html(failText);
  }
  check();
}
// Validate Age --------------------------*/
function validateAge() {
  userAgeResult = ageREGEX.test($("#age").val());
  if (userAgeResult) {
    $("#age").addClass("valid");
    $("#age").next("span").attr("class", "text-success").html(passText);
  } else {
    $("#age").next("span").attr("class", "text-danger").html(failText);
  }
  check();
}
// Validate Phone Number --------------------------*/
function validatePhone() {
  userTelResult = telREGEX.test($("#phone").val());
  if (userTelResult) {
    $("#phone").addClass("valid");
    $("#phone").next("span").attr("class", "text-success").html(passText);
  } else {
    $("#phone").next("span").attr("class", "text-danger").html(failText);
  }
  check();
}
// Validate Password --------------------------*/
function validatePass() {
  userPassResult = passREGEX.test($("#pass").val());
  if (userPassResult) {
    $("#pass").addClass("valid");
    $("#pass").next("span").attr("class", "text-success").html(passText);
  } else {
    $("#pass").next("span").attr("class", "text-danger").html(failText);
  }
  check();
}
// Validate Confirmed Password --------------------------*/
function validateConfirmPass() {
  if (userPassResult && $("#pass").val() && $("#pass-confirm").val() == $("#pass").val()) {
    $("#pass-confirm").addClass("valid");
    $("#pass-confirm").next("span").attr("class", "text-success").html(passText);
  } else {
    $("#pass-confirm")
      .next("span")
      .attr("class", "text-danger")
      .html("<i class='fa-regular fa-face-sad-tear'></i> Must matched with password filed");
  }
  check();
}
// Check that all fields filled and Valid --------------*/
function check() {
  let inputs = $("#contact-form input").length;
  let valids = $("#contact-form .valid").length;
  if (inputs == valids) {
    $("#submit").prop("disabled", false);
  }
}

$("#submit").click(function () {
  $("#submit").prop("disabled", true);
  $("#contact-form").hide();
  document.querySelector("#contact-modal .modal-body").scrollTo(0, 0);
  $("#contact-modal .modal-body").prepend(`
  <div class="reg-success text-center w-100 h-100 bg-white bg-opacity-5 d-flex align-items-center justify-content-center flex-column ">
  <i class='fa-regular fa-face-smile-beam fa-2xl text-success'></i>
  <div class="mt-4 alert alert-success w-50">You are DONE</div>
  </div>
  `);
  closeContact(1000, 500);
});

$(document).on("keydown", function (e) {
  if (e.key === "Escape") {
    if ($("#contact-modal").hasClass("show")) {
      console.log("has");
      closeContact(0, 0);
    }
  }
});

function closeContact(del, fad) {
  $("#contact-modal")
    .delay(del)
    .fadeOut(fad, function () {
      $("#contact-modal").removeClass("d-flex");
      $(".reg-success").remove();
      $("#contact-form input").val("");
      $("#contact-form span").html("");
    });
}
