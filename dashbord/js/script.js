window.addEventListener("DOMContentLoaded",function () {
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
var BarChart = $.getElementById("Bar-Chart").getContext("2d");


var Bargradient1 = BarChart.createLinearGradient(0, 0, 0, 400);
Bargradient1.addColorStop(0, 'rgb(9, 182, 109)');  
Bargradient1.addColorStop(1, 'rgb(37, 209, 232)');   

var Bargradient2 = BarChart.createLinearGradient(0, 0, 0, 400);
Bargradient2.addColorStop(0, 'rgb(255, 138, 72)');   
Bargradient2.addColorStop(1, 'rgb(253, 191, 94)');   

var BarChartOne = new Chart(BarChart, {
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
var StatusChart = $.getElementById("Status-Chart").getContext("2d");

var Linegradient1 = StatusChart.createLinearGradient(0, 0, 0, 400);
Linegradient1.addColorStop(0, 'rgba(255, 61, 87,0.6)');  
Linegradient1.addColorStop(1, 'rgba(255, 138, 72,0.01)');   

var LinChartOne = new Chart(StatusChart, {
  type: 'line',
  data: {
    labels: ['1/1','1/2','1/3','1/4','1/5','1/6','1/7','1/8','1/9','1/10'], //دیتای تستی
    datasets: [{
      label: 'رطوبت خاک',
      data: [16, 83, 88, 26, 93, 25, 36, 61, 87, 63],    //دیتای تستی
      backgroundColor: Linegradient1,
      borderColor: Linegradient1,
      borderWidth: 1.5,
      hoverBorderWidth: 2,
      hoverBorderColor:"#000",
      hoverBackgroundColor:"#000",
    }]
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

})