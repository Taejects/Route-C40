// Setting Variables -------------*/
var bookmarkName = document.getElementById("bookmarkName");
var siteURL = document.getElementById("siteURL");
var bookmarkSubmit = document.getElementById("submit-bookmark");
var bookmarkUpdate = document.getElementById("update-bookmark");
var bookmarkList, elToSaveEdits, nameResult, urlResult;

// Load Array from local storage -*/
if (localStorage.getItem('bookmarks') == null) {
    bookmarkList = [];
} else {
    bookmarkList = JSON.parse(localStorage.getItem('bookmarks'));
    printToHTML(bookmarkList)

}

// Add Bookmarks -----------------*/
function addBookmark() {
    // Create bookmark object
    var bookmark = {
        name: bookmarkName.value,
        url: siteURL.value
    }
    // Push created object to array    
    bookmarkList.push(bookmark);
    printToHTML(bookmarkList);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkList))
    clearForm();
}

// Loop array items and print them into HTML ----------*/
function printToHTML(bookmarks) {
    var bookMarkTable = ``;
    for (i = 0; i < bookmarks.length; i++) {
        /* Add submitted date to HTML */
        bookMarkTable += `
    <tr>
        <td class='align-middle'>${[i + 1]}</td>
        <td class='align-middle'>${bookmarks[i].newName ? bookmarks[i].newName : bookmarks[i].name}</td>
        <td class='align-middle'>${bookmarks[i].url}</td>        
        <td class='align-middle'><a href="${"http://" + bookmarks[i].url}" target="_blank" class="btn btn-xs btn-info fw-semibold text-white"><i class="fa fa-external-link me-2"></i>Visit</a></td>
        <td class='align-middle'><button onclick="editBookmark(${i})" class="btn btn-xs btn-warning fw-semibold"><i class="fa fa-pen me-2"></i>Update</button></td>
        <td class='align-middle'><button onclick="deleteBookmark(${i})" class="btn btn-xs btn-danger fw-semibold"><i class="fa fa-times me-2"></i>Delete</button></td>
    </tr >
    `;
    }
    document.getElementById("bookmark-list").innerHTML = bookMarkTable;
}

// Delete Bookmark From Array -----------------*/
function deleteBookmark(index) {
    bookmarkList.splice(index, 1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkList))
    printToHTML(bookmarkList);
}

// Clear Form Inputs After Submit -------------*/
function clearForm() {
    bookmarkName.value = "";
    siteURL.value = "";
}

// Search Functions ----------------------------*/
function searchBookmarks(term) {
    var searchResult = []
    var resultCount;
    for (i = 0; i < bookmarkList.length; i++) {
        if (bookmarkList[i].name.toLowerCase().includes(term.toLowerCase()) == true) {
            bookmarkList[i].newName = bookmarkList[i].name.replace(term, `<span class="text-danger">${term}</span>`);
            console.log(bookmarkList[i].newName);
            searchResult.push(bookmarkList[i])
            resultCount = searchResult.length;
        }
    }
    if (!resultCount) {
        document.getElementById("bookmark-list").innerHTML = `
        <td colspan="6">
        <div class="alert alert-warning m-0"><i class="fa fa-warning"></i> No Results Found!</div>
        `
    } else {
        printToHTML(searchResult);
    }
}

// Update Functions ----------------------------*/
function editBookmark(elToUpdate) {
    window.scrollTo(0, 0);

    elToSaveEdits = elToUpdate;
    bookmarkSubmit.classList.replace('d-inline-block', 'd-none');
    bookmarkUpdate.classList.replace('d-none', 'd-inline-block');
    bookmarkName.value = bookmarkList[elToUpdate].name;
    siteURL.value = bookmarkList[elToUpdate].url;
}
/* Save edits */
function saveEdits() {
    bookmarkUpdate.classList.replace('d-inline-block', 'd-none');
    bookmarkSubmit.classList.replace('d-none', 'd-inline-block');

    for (i = 0; i < bookmarkList.length; i++) {
        if (i == elToSaveEdits) {
            bookmarkList[elToSaveEdits].name = bookmarkName.value;
            bookmarkList[elToSaveEdits].url = siteURL.value;
        }
    }
    /* Validate updated info */
    validate()
    if (nameResult && urlResult && bookmarkName.value && siteURL.value) {
        printToHTML(bookmarkList);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarkList))
        clearForm();
        document.querySelector('#bookmarkName + small').innerHTML = ""
        document.querySelector('#siteURL + small').innerHTML = ""
    }
}

// Validate & Submit New Entry -----------------*/
bookmarkSubmit.addEventListener("click", function () {
    validate();
    console.log(nameResult, urlResult)
    if (nameResult && urlResult && bookmarkName.value && siteURL.value) {
        addBookmark()
        document.querySelector('#bookmarkName + small').innerHTML = ""
        document.querySelector('#siteURL + small').innerHTML = ""
    }
});

// Validate Functions --------------------------*/
function validate() {
    var nameRGEX = /^$|^\S+.*/;
    var urlRGEX = /[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/;
    nameResult = nameRGEX.test(bookmarkName.value);
    urlResult = urlRGEX.test(siteURL.value);
    if (nameResult == false || !bookmarkName.value) {
        document.querySelector('#bookmarkName + small').innerHTML = "Please insert a valid Name"
    }
    if (urlResult == false || !siteURL.value) {
        document.querySelector('#siteURL + small').innerHTML = "Please insert a valid URL"
    }
    if (nameResult == false && urlResult == false) {
        document.querySelector('#bookmarkName + small').innerHTML = "Please insert a valid Name";
        document.querySelector('#siteURL + small').innerHTML = "Please insert a valid URL";
    }
}