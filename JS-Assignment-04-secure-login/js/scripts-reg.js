// Setting Variables -------------*/
var userName = document.getElementById("userName");
var userMail = document.getElementById("userMail");
var userPass = document.getElementById("userPass");
var userSubmit = document.getElementById("submit-reg-user");
var regForm = document.getElementById("reg-form");
var usersList, userNameResult, userMailResult, userPassResult;

// Load Array from local storage -*/
if (localStorage.getItem('users') == null) {
    usersList = [];
} else {
    usersList = JSON.parse(localStorage.getItem('users'));
    for (i = 0; i < usersList.length; i++) {
        if (usersList[i].flag == true) {
            successLogin()
            logoutFN();
        }
    }
}

// Add Users -----------------*/
function addUser() {
    // Create user object
    var user = {
        name: userName.value,
        mail: userMail.value.toLowerCase(),
        pass: userPass.value,
        flag: false
    }
    // Push created object to array    
    usersList.push(user);
    localStorage.setItem('users', JSON.stringify(usersList))
    regForm.classList.add("d-flex", "flex-column", "align-items-center", "justify-content-end");
    regForm.style.background = "url('../assets/imgs/welcome.png') center 12% / 38% no-repeat";
    regForm.innerHTML = `
                <div class="alert alert-success text-center m-0 w-100">
                <p class="m-0"><i class="fa fa-check me-2"></i>Registered Successfully</p>
                </div>
                <p class="mt-3 mb-0 text-center"><a class="text-info fw-semibold" href="js-assignment-04-LOG.html">Click here to login page</a></p>
                `
}

// Validate & Submit New Entry -----------------*/
userSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    validate();
    // First registration, no local storage created:
    if (localStorage.getItem('users') == null) {
        if (userNameResult && userMailResult && userPassResult) {
            addUser();
        }
    } else {
        // Already local storage has saved data:
        if (userNameResult && userMailResult && userPassResult) {
            for (i = 0; i < usersList.length; i++) {
                if (userMail.value == usersList[i].mail) {
                    document.querySelector('#userMail + small').innerHTML = "This mail address is already registered";
                } else {
                    document.querySelector('#userMail + small').innerHTML = "";
                    addUser();

                }
            }
        }
    }
});

// Validate Functions --------------------------*/
function validate() {
    var nameRGEX = /^$|^\S+.*/;
    var mailRGEX = /[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/;
    var passRGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,12})/;
    userNameResult = nameRGEX.test(userName.value);
    userMailResult = mailRGEX.test(userMail.value);
    userPassResult = passRGEX.test(userPass.value);
    if (userNameResult == false || !userName.value) {
        document.querySelector('#userName + small').innerHTML = "Please insert a valid Name"
    } else {
        document.querySelector('#userName + small').innerHTML = ""
    }
    if (userMailResult == false || !userMail.value) {
        document.querySelector('#userMail + small').innerHTML = "Please insert a valid Email address"
    } else {
        document.querySelector('#userMail + small').innerHTML = ""
    }
    if (userPassResult == false || !userPass.value) {
        document.querySelector('#userPass + small').innerHTML = "Please insert a valid password"
    } else {
        document.querySelector('#userPass + small').innerHTML = ""
    }
    if (userNameResult == false && userMailResult == false && userPassResult == false) {
        document.querySelector('#userName + small').innerHTML = "Please insert a valid Name";
        document.querySelector('#userMail + small').innerHTML = "Please insert a valid Email address";
        document.querySelector('#userPass + small').innerHTML = "Please insert a valid password";
    }
}
// Success Login -------------------------------*/
function successLogin() {
    regForm.classList.add("d-flex", "flex-column", "align-items-center", "justify-content-end");
    regForm.style.background = "url('../assets/imgs/welcome.png') center 12% / 38% no-repeat";
    regForm.innerHTML = `
        <div class="alert alert-success text-center m-0 w-100">
        <p class="m-0"><i class="fa fa-check me-2"></i>Welcome, <span class="fw-semibold">${usersList[i].name}</span></p>
        </div> 
        <div class="pt-3">
        <a id="logout" href="#!" class="text-danger text-decoration-none fw-semibold"><i class="fa-solid fa-arrow-right-from-bracket fa-flip-horizontal"></i> Logout</a>
        </div>
        `;
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