// shortcut
let $ = document
// Elemenets
const menuElem = $.querySelector(".menu-section")
const nameCompanyElem = $.querySelector(".name-Company")
const ContentTextElem = $.querySelectorAll(".menu_content-text")
const BtnSizeMenu = $.querySelector("#BtnSizeMenu")
const mainSection = $.querySelector(".main-section")
let FlagMenu = true
// Menu size

BtnSizeMenu.addEventListener('click', function () {
    if (FlagMenu === false) {
        menuElem.style.width = "2.5%";
        mainSection.style.width = "97.5%";
        FlagMenu = true;
        ContentTextElem.forEach(function (item) {
            item.classList.add("hidden");
        });
        nameCompanyElem.classList.add("hidden");
        BtnSizeMenu.classList.add("closemenu");
    } else {
        menuElem.style.width = "12%";
        mainSection.style.width = "88%";
        FlagMenu = false;
        ContentTextElem.forEach(function (item) {
            item.classList.remove("hidden");
        });
        nameCompanyElem.classList.remove("hidden");
        BtnSizeMenu.classList.remove("closemenu");
    }
});


