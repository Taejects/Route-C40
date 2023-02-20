// Setting Variables -------------*/
var userMail = document.getElementById("userMail");
var userPass = document.getElementById("userPass");
var userSubmit = document.getElementById("submit-log-user");
var logForm = document.getElementById("log-form");
var logout, usersList, userMailResult;

// Load Array from local storage -*/
if (localStorage.getItem('users') == null) {
    usersList = [];
    logForm.classList.add("d-flex", "flex-column", "align-items-center", "justify-content-end");
    logForm.style.background = "url('../assets/imgs/no-users.png') center 12% / 38% no-repeat";
    logForm.innerHTML = `
        <div class="alert alert-warning text-center m-0 w-100">
        <p class="m-0"><i class="fa fa-times me-2"></i> There is no registered users.</p>
        </div>
        <p class="mt-3 mb-0 text-center"><a class="text-info fw-semibold" href="js-assignment-04-REG.html">Click here to Signup page</a></p>
        `
} else {
    usersList = JSON.parse(localStorage.getItem('users'));
    for (i = 0; i < usersList.length; i++) {
        if (usersList[i].flag == true) {
            successLogin()
        }
    }
}

// Validate & Submit New Entry -----------------*/
userSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    validate();
    if (userMailResult && userPass.value) {
        for (i = 0; i < usersList.length; i++) {
            if (userMail.value.toLowerCase() == usersList[i].mail) {
                if (userPass.value == usersList[i].pass) {
                    usersList[i].flag = true;
                    localStorage.setItem('users', JSON.stringify(usersList))
                    successLogin()
                } else {
                    document.querySelector('#userMail + small').innerHTML = "";
                    document.querySelector('#userPass + small').innerHTML = "Password not match email address"
                }
                break;
            } else {
                document.querySelector('#userMail + small').innerHTML = "Mail address didn't found!";
            }
        }
    }
});

// Validate Functions --------------------------*/
function validate() {
    var mailRGES = /[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/;
    userMailResult = mailRGES.test(userMail.value);
    if (userMailResult == false || !userMail.value) {
        document.querySelector('#userMail + small').innerHTML = "Please insert a valid Email address"
    } else {
        document.querySelector('#userMail + small').innerHTML = ""
    }
    if (!userPass.value) {
        document.querySelector('#userPass + small').innerHTML = "Please insert password"
    } else {
        document.querySelector('#userPass + small').innerHTML = ""
    }
    if (userMailResult == false && !userPass.value) {
        document.querySelector('#userMail + small').innerHTML = "Please insert a valid Email address";
        document.querySelector('#userPass + small').innerHTML = "Please insert password";
    }
}

// Success Login -------------------------------*/
function successLogin() {
    logForm.classList.add("d-flex", "flex-column", "align-items-center", "justify-content-end");
    logForm.style.background = "url('../assets/imgs/welcome.png') center 12% / 38% no-repeat";
    logForm.innerHTML = `
        <div class="alert alert-success text-center m-0 w-100">
        <p class="m-0"><i class="fa fa-check me-2"></i>Welcome, <span class="fw-semibold">${usersList[i].name}</span></p>
        </div> 
        <div class="pt-3">
        <a id="logout" href="#!" class="text-danger text-decoration-none fw-semibold"><i class="fa-solid fa-arrow-right-from-bracket fa-flip-horizontal"></i> Logout</a>
        </div>
        `;
    logoutFN()
}

// Logout --------------------------------------*/
function logoutFN() {
    logout = document.getElementById("logout")
    logout.addEventListener("click", function () {
        for (i = 0; i < usersList.length; i++) {
            if (usersList[i].flag = true) {
                usersList[i].flag = false;
                localStorage.setItem('users', JSON.stringify(usersList));
                location.reload();
            }
        }
    });
}