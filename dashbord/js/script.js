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

// chart On
var BarChart = document.getElementById("Bar-Chart").getContext("2d");


var Bargradient1 = BarChart.createLinearGradient(0, 0, 0, 400);
Bargradient1.addColorStop(0, 'rgb(9, 182, 109)');  
Bargradient1.addColorStop(1, 'rgb(37, 209, 232)');   

var Bargradient2 = BarChart.createLinearGradient(0, 0, 0, 400);
Bargradient2.addColorStop(0, 'rgb(255, 138, 72)');   
Bargradient2.addColorStop(1, 'rgb(253, 191, 94)');   

var BarChartone = new Chart(BarChart, {
  type: 'bar',
  data: {
    labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
    datasets: [
      {
        label: 'آمار 1',
        data: [213, 54, 96, 153, 456, 245, 355], 
        backgroundColor: Bargradient1
      },
      {
        label: 'آمار 2',
        data: [175, 123, 466, 485, 174, 453, 125], 
        backgroundColor: Bargradient2           
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

// chart Two

var StatusChart = document.getElementById("Status-Chart");

// var Statusgradient1 = StatusChart.createLinearGradient(0, 0, 0, 400);
// Statusgradient1.addColorStop(0, 'rgb(9, 182, 109)');  
// Statusgradient1.addColorStop(1, 'rgb(37, 209, 232)');   


var LineChartone = new Chart(StatusChart, {
  type: 'line',
  data: {
    labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
    datasets: [
      {
        label: 'آمار 1',
        data: [213, 54, 96, 153, 456, 245, 355], 
        backgroundColor: "#000"
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
