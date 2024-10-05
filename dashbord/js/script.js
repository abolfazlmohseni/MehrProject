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


var gradient1 = BarChart.createLinearGradient(0, 0, 0, 400);
gradient1.addColorStop(0, 'rgb(9, 182, 109)');  
gradient1.addColorStop(1, 'rgb(37, 209, 232)');   

var gradient2 = BarChart.createLinearGradient(0, 0, 0, 400);
gradient2.addColorStop(0, 'rgb(255, 138, 72)');   
gradient2.addColorStop(1, 'rgb(253, 191, 94)');   

var BarChartone = new Chart(BarChart, {
  type: 'bar',
  data: {
    labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
    datasets: [
      {
        label: 'آمار 1',
        data: [213, 54, 96, 153, 456, 245, 355], 
        backgroundColor: gradient1
      },
      {
        label: 'آمار 2',
        data: [175, 123, 466, 485, 174, 453, 125], 
        backgroundColor: gradient2           
      }
    ]
  },
  options: {
    responsive: false,
    scales: {
      x: {
        ticks: {
          font: {
            family: 'iransans',  
            size: 14,  
            style: 'italic',  
            weight: 'bold',   
            lineHeight: 1.2   
          }
        }
      }
    }
  }
}); 



