/* Problem 01
-----------------------------------------------------------*/
var pro01Submit = document.getElementById("pro01-btn");

function get01Result() {
    var proResult = Number(document.getElementById("pro01-input").value);
    if (isNaN(proResult)) {
        alert('Please insert a valid number')
    } else {
        document.getElementById("pro01-result").value = proResult
    }
}

/* Problem 02
-----------------------------------------------------------*/
var pro02Submit = document.getElementById("pro02-btn");

function get02Result() {
    var proResult = Number(document.getElementById("pro02-input").value);
    if (isNaN(proResult)) {
        alert('Please insert a valid number')
    } else if (proResult % 3 == 0 && proResult % 4 == 0) {
        document.getElementById("pro02-result").value = "YES 😇"
    } else {
        document.getElementById("pro02-result").value = "NO! 😐"
    }
}

/* Problem 03
-----------------------------------------------------------*/
var pro03Submit = document.getElementById("pro03-btn");

function get03Result() {
    var proResult01 = Number(document.getElementById("pro03-01-input").value);
    var proResult02 = Number(document.getElementById("pro03-02-input").value);

    if (isNaN(proResult01) || isNaN(proResult02)) {
        alert('Please insert a valid number for both inputs');
    } else if (proResult01 > proResult02) {
        document.getElementById("pro03-result").value = proResult01;
    } else if (proResult02 > proResult01) {
        document.getElementById("pro03-result").value = proResult02;
    } else {
        document.getElementById("pro03-result").value = "No max value, both are equal!"
    }
}

/* Problem 03 [17][switch]
-----------------------------------------------------------*/
var pro03sSubmit = document.getElementById("pro03s-btn");

function get03sResult() {
    var proResult01 = Number(document.getElementById("pro03s-01-input").value);
    var proResult02 = Number(document.getElementById("pro03s-02-input").value);
    var proResult = proResult01 - proResult02;

    if (isNaN(proResult01) || isNaN(proResult02)) {
        alert('Please insert a valid number')
    } else {
        switch (true) {
            case (proResult > 0):
                document.getElementById("pro03s-result").value = proResult01
                break;
            case (proResult < 0):
                document.getElementById("pro03s-result").value = proResult02
                break;
            default:
                document.getElementById("pro03s-result").value = "No max value, both are equal!"
        }
    }
}


/* Problem 04
-----------------------------------------------------------*/
var pro04Submit = document.getElementById("pro04-btn");

function get04Result() {
    var proResult = Number(document.getElementById("pro04-input").value);
    if (isNaN(proResult) || !proResult) {
        alert('Please insert a valid number')
    } else if (proResult > 0) {
        document.getElementById("pro04-result").value = "Positive! 😇";
    } else if (proResult < 0) {
        document.getElementById("pro04-result").value = "Negative! 😐";
    } else {
        document.getElementById("pro04-result").value = "Zero! 😑";
    }
}

/* Problem 04 [19][Switch]
-----------------------------------------------------------*/
var pro04sSubmit = document.getElementById("pro04s-btn");

function get04sResult() {
    var proResult = Number(document.getElementById("pro04s-input").value);
    if (isNaN(proResult) || !proResult) {
        alert('Please insert a valid number')
    } else {
        switch (true) {
            case (proResult > 0):
                document.getElementById("pro04s-result").value = "Negative! 😐";
                break;
            case (proResult < 0):
                document.getElementById("pro04s-result").value = "Positive! 😇";
                break;
            default:
                document.getElementById("pro04s-result").value = "Zero! 😑";
        }
    }
}

/* Problem 05
-----------------------------------------------------------*/
var pro05Submit = document.getElementById("pro05-btn");

function get05Result() {
    var proResult01 = Number(document.getElementById("pro05-01-input").value);
    var proResult02 = Number(document.getElementById("pro05-02-input").value);
    var proResult03 = Number(document.getElementById("pro05-03-input").value);

    if (isNaN(proResult01) || isNaN(proResult02) || isNaN(proResult03) || !proResult01 || !proResult02 || !proResult03) {
        alert('Please insert a valid number for all inputs');
    } else {
        document.getElementById("pro05-01-result").value = Math.max(proResult01, proResult02, proResult03);
        document.getElementById("pro05-02-result").value = Math.min(proResult01, proResult02, proResult03);
    }
}

/* Problem 06
-----------------------------------------------------------*/
var pro06Submit = document.getElementById("pro06-btn");

function get06Result() {
    var proResult = Number(document.getElementById("pro06-input").value);
    if (isNaN(proResult) || !proResult) {
        alert('Please insert a valid number')
    } else if (proResult % 2 == 0) {
        document.getElementById("pro06-result").value = "EVEN! 😇"
    } else {
        document.getElementById("pro06-result").value = "ODD! 😐"
    }
}

/* Problem 06s [18][Switch]
-----------------------------------------------------------*/
var pro06sSubmit = document.getElementById("pro06s-btn");

function get06sResult() {
    var proResult = Number(document.getElementById("pro06s-input").value) % 2;
    if (isNaN(proResult) || !proResult) {
        alert('Please insert a valid number larger than 0')
    } else {
        switch (true) {
            case (proResult == 0):
                document.getElementById("pro06s-result").value = "EVEN! 😇"
                break;
            case (proResult > 0):
                document.getElementById("pro06s-result").value = "ODD! 😐"
                break;
            default:
        }
    }
}

/* Problem 07
-----------------------------------------------------------*/
var pro07Submit = document.getElementById("pro07-btn");

function get07Result() {
    var proResult = document.getElementById("pro07-input").value;
    if (!isNaN(proResult)) {
        alert('Please insert a valid character')
    } else if (proResult == 'a' || proResult == 'e' || proResult == 'i' || proResult == 'o' || proResult == 'u') {
        document.getElementById("pro07-result").value = "Vowel! 😇"
    } else {
        document.getElementById("pro07-result").value = "Consonant! 😐"
    }
}

/* Problem 07 [Switch]
-----------------------------------------------------------*/
var pro07sSubmit = document.getElementById("pro07s-btn");

function get07sResult() {
    var proResult = document.getElementById("pro07s-input").value;
    if (!isNaN(proResult)) {
        alert('Please insert a valid character')
    } else {
        switch (proResult) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                document.getElementById("pro07s-result").value = "Vowel! 😇"
                break;
            default:
                document.getElementById("pro07s-result").value = "Consonant! 😐"
        }
    }

}

/* Problem 08
-----------------------------------------------------------*/
var pro08Submit = document.getElementById("pro08-btn");

function get08Result() {
    var proResult = Number(document.getElementById("pro08-input").value);
    if (isNaN(proResult)) {
        alert('Please insert a valid number')
    } else if (proResult < 2) {
        alert('Please insert a valid number larger than 1')
    } else {
        document.getElementById("pro08-result").value = '';
        var i;
        var proResult = document.getElementById("pro08-input").value;
        for (i = 1; i < proResult; i++) {
            document.getElementById("pro08-result").value += i + ', ';
        }
        document.getElementById("pro08-result").value += proResult;
    }
}

/* Problem 09
-----------------------------------------------------------*/
var pro09Submit = document.getElementById("pro09-btn");

function get09Result() {
    var proResult = Number(document.getElementById("pro09-input").value);
    if (isNaN(proResult)) {
        alert('Please insert a valid number')
    } else if (proResult < 1) {
        alert('Please insert a valid number larger than 1')
    } else {
        document.getElementById("pro09-result").value = '';
        var i;
        var proResult = document.getElementById("pro09-input").value;
        for (i = 1; i < 12; i++) {
            document.getElementById("pro09-result").value += i * proResult + ', ';
        }
        document.getElementById("pro09-result").value += proResult * 12;
    }
}

/* Problem 10
-----------------------------------------------------------*/
var pro10Submit = document.getElementById("pro10-btn");

function get10Result() {
    var proResult = Number(document.getElementById("pro10-input").value);
    if (isNaN(proResult)) {
        alert('Please insert a valid number')
    } else if (proResult < 3) {
        alert('Please insert a valid number larger than 2')
    } else {
        document.getElementById("pro10-result").value = '';
        var i;
        var proResult = document.getElementById("pro10-input").value;
        for (i = 0; i < proResult; i += 2) {
            if (i > 0 && i < proResult - 2) {
                document.getElementById("pro10-result").value += i + ', ';
            } else if (i != 0) {
                document.getElementById("pro10-result").value += i
            }
        }

    }
}

/* Problem 11
-----------------------------------------------------------*/
var pro11Submit = document.getElementById("pro11-btn");

function get11Result() {
    var proResult01 = Number(document.getElementById("pro11-01-input").value);
    var proResult02 = Number(document.getElementById("pro11-02-input").value);

    if (isNaN(proResult01) || isNaN(proResult02)) {
        alert('Please insert a valid number for both inputs');
    } else {
        document.getElementById("pro11-result").value = proResult01 ** proResult02;
    }
}

/* Problem 11 [Loop]
-----------------------------------------------------------*/
var pro11lSubmit = document.getElementById("pro11l-btn");

function get11lResult() {
    var proResult01 = Number(document.getElementById("pro11l-01-input").value);
    var proResult02 = Number(document.getElementById("pro11l-02-input").value);
    var result = proResult01;
    if (isNaN(proResult01) || isNaN(proResult02)) {
        alert('Please insert a valid number for both inputs');
    } else if (proResult02 == 0) {
        document.getElementById("pro11l-result").value = 0

    }
    else if (proResult02 == 1) {
        document.getElementById("pro11l-result").value = proResult01

    } else {
        console.log(result);
        for (i = 1; i < proResult02; i++) {
            result *= proResult01;
            console.log(result);
        }
        document.getElementById("pro11l-result").value = result
    }

}
/* Problem 12
-----------------------------------------------------------*/
var pro12Submit = document.getElementById("pro12-btn");

function get12Result() {
    var proResult01 = Number(document.getElementById("pro12-01-input").value);
    var proResult02 = Number(document.getElementById("pro12-02-input").value);
    var proResult03 = Number(document.getElementById("pro12-03-input").value);
    var proResult04 = Number(document.getElementById("pro12-04-input").value);
    var proResult05 = Number(document.getElementById("pro12-05-input").value);

    var pro1201Result = proResult01 + proResult02 + proResult03 + proResult04 + proResult05;
    var pro1202Result = pro1201Result / 5;
    var pro1203Result = pro1202Result * 100 / 100 + '%';

    if (isNaN(proResult01) || isNaN(proResult02) || isNaN(proResult03) || isNaN(proResult04) || isNaN(proResult05)) {
        alert('Please insert a valid number')
    } else if ((proResult01 > 100) || (proResult02 > 100) || (proResult03 > 100) || (proResult04 > 100) || (proResult05 > 100)) {
        alert('Every subject result must be <= 100')
    } else {
        document.getElementById("pro12-01-result").value = pro1201Result;
        document.getElementById("pro12-02-result").value = pro1202Result;
        document.getElementById("pro12-03-result").value = pro1203Result;
    }
}

/* Problem 13
-----------------------------------------------------------*/
var pro13Submit = document.getElementById("pro13-btn");

function get13Result() {
    var proResult = Number(document.getElementById("pro13-input").value);
    if (isNaN(proResult)) {
        alert('Please insert a valid number')
    } else if (proResult == 1 || proResult == 3 || proResult == 5 || proResult == 7 || proResult == 8 || proResult == 10 || proResult == 12) {
        document.getElementById("pro13-result").value = 'This month is [31] days'
    }
    else if (proResult == 4 || proResult == 6 || proResult == 9 || proResult == 11) {
        document.getElementById("pro13-result").value = 'This month is [30] days'
    } else if (proResult == 2) {
        document.getElementById("pro13-result").value = 'This month is [28] days'
    } else {
        document.getElementById("pro13-result").value = 'Entered value must be between 1 and 12'

    }
}

/* Problem 13 [Switch]
-----------------------------------------------------------*/
var pro13sSubmit = document.getElementById("pro13s-btn");

function get13sResult() {
    var proResult = Number(document.getElementById("pro13s-input").value);
    if (isNaN(proResult)) {
        alert('Please insert a valid number')
    } else {
        switch (proResult) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                document.getElementById("pro13s-result").value = 'This month is [31] days'
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                document.getElementById("pro13s-result").value = 'This month is [30] days'
                break;
            case 2:
                document.getElementById("pro13s-result").value = 'This month is [28] days'
                break;
            default:
                document.getElementById("pro13s-result").value = 'Entered value must be between 1 and 12'
        }
    }
}

/* Problem 14
-----------------------------------------------------------*/
var pro14Submit = document.getElementById("pro14-btn");

function get14Result() {
    var proResult01 = Number(document.getElementById("pro14-01-input").value * 100 / 100);
    var proResult02 = Number(document.getElementById("pro14-02-input").value * 100 / 100);
    var proResult03 = Number(document.getElementById("pro14-03-input").value * 100 / 100);
    var proResult04 = Number(document.getElementById("pro14-04-input").value * 100 / 100);
    var proResult05 = Number(document.getElementById("pro14-05-input").value * 100 / 100);

    function checkGrade(marks) {
        var grade;
        if (marks >= 90) {
            grade = "A";
        } else if (marks >= 80 && marks < 90) {
            grade = "B";
        } else if (marks >= 70 && marks < 80) {
            grade = "C";
        } else if (marks >= 60 && marks < 70) {
            grade = "D";
        } else if (marks >= 40 && marks < 60) {
            grade = "E";
        } else {
            grade = "F";
        }
        return grade;
    }

    if (isNaN(proResult01) || isNaN(proResult02) || isNaN(proResult03) || isNaN(proResult04) || isNaN(proResult05)) {
        alert('Please insert a valid number')
    } else if ((proResult01 > 100) || (proResult02 > 100) || (proResult03 > 100) || (proResult04 > 100) || (proResult05 > 100)) {
        alert('Every subject result must be <= 100')
    } else {
        document.getElementById("pro14-01-result").value = checkGrade(proResult01);
        document.getElementById("pro14-02-result").value = checkGrade(proResult02);
        document.getElementById("pro14-03-result").value = checkGrade(proResult03);
        document.getElementById("pro14-04-result").value = checkGrade(proResult04);
        document.getElementById("pro14-05-result").value = checkGrade(proResult05);
    }
}
/* Problem 20
-----------------------------------------------------------*/
var pro20submit = document.getElementById("pro20-btn");

var calcOperator;
function getOperator(operatorID) {
    calcOperator = (document.getElementById(operatorID).id);
}

function get20Result() {
    var proResult01 = Number(document.getElementById("pro20-01-input").value);
    var proResult02 = Number(document.getElementById("pro20-02-input").value);
    if (isNaN(proResult01) || isNaN(proResult02)) {
        alert('Please insert valid numbers')
    } if (proResult01 && proResult02 && calcOperator) {
        switch (calcOperator) {
            case "btn-plus":
                document.getElementById("pro20-result").value = proResult01 + '+' + proResult02 + '=' + (proResult01 + proResult02)
                break;
            case "btn-minus":
                document.getElementById("pro20-result").value = proResult01 + '-' + proResult02 + '=' + (proResult01 - proResult02)
                break;
            case "btn-times":
                document.getElementById("pro20-result").value = proResult01 + '✕' + proResult02 + '=' + (proResult01 * proResult02)
                break;
            case "btn-div":
                document.getElementById("pro20-result").value = proResult01 + '÷' + proResult02 + '=' + (proResult01 / proResult02)
                break;
        }
    } else {
        alert('Please fill in both inputs and an operator between')
    }
}