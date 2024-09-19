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
        menuElem.style.width = "2.5%"
        mainSection.style.width = "97.5%"
        FlagMenu = true
        ContentTextElem.forEach(function (item) {
            item.classList = "hidden"
        })
        nameCompanyElem.classList = "hidden"
    } else {
        menuElem.style.width = "12%"
        mainSection.style.width = "88%"
        FlagMenu = false
        ContentTextElem.forEach(function (item) {
            item.classList -= "hidden"
        })
        nameCompanyElem.classList = "name-Company"

    }
})

