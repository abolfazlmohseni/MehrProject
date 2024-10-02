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
// Charts

var BarChart = document.getElementById("Bar-Chart").getContext("2d");
var BarChartone = new Chart(BarChart, {
  type: 'bar',
  data: {
    labels: ['1/1','1/2','1/3','1/4','1/5','1/6','1/7','1/8','1/9','1/10'], //دیتای تستی
    datasets: [
      {
        label: 'رطوبت خاک',
        data: [16, 83, 88, 26, 93, 25, 36, 61, 87, 63],    // دیتای تستی
        backgroundColor: 'rgba(13, 110, 253, 0.3)',
        borderColor: '#7A89FF',
        borderWidth: 3,
        hoverBorderWidth: 3.5,
      },
      {
        label: 'دما',
        data: [22, 65, 72, 55, 80, 45, 60, 70, 85, 78],    // دیتای تستی
        backgroundColor: 'rgba(253, 110, 13, 0.3)',
        borderColor: '#FF7A89',
        borderWidth: 3,
        hoverBorderWidth: 3.5,
      }
    ]
  },
  options: {
    responsive: false,
    scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      }
    }
  }
});



