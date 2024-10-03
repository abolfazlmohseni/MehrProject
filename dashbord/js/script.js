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

// ایجاد گرادینت برای آمار 1
var gradient1 = BarChart.createLinearGradient(0, 0, 0, 400);
gradient1.addColorStop(0, 'rgb(9, 182, 109)');   // رنگ بالا
gradient1.addColorStop(1, 'rgb(37, 209, 232)');   // رنگ پایین

// ایجاد گرادینت برای آمار 2
var gradient2 = BarChart.createLinearGradient(0, 0, 0, 400);
gradient2.addColorStop(0, 'rgb(255, 138, 72)');   // رنگ بالا
gradient2.addColorStop(1, 'rgb(253, 191, 94)');   // رنگ پایین

var BarChartone = new Chart(BarChart, {
  type: 'bar',
  data: {
    labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'], // دیتای تستی
    datasets: [
      {
        label: 'آمار 1',
        data: [213, 54, 96, 153, 456, 245, 355],  // دیتای تستی
        backgroundColor: gradient1
      },
      {
        label: 'آمار 2',
        data: [175, 123, 466, 485, 174, 453, 125],  // دیتای تستی
        backgroundColor: gradient2                // استفاده از گرادینت برای آمار 2
      }
    ]
  },
  options: {
    responsive: false,
    scales: {
      x: {
        ticks: {
          font: {
            family: 'iransans',  // تنظیم خانواده فونت برای محور X
            size: 14,         // اندازه فونت
            style: 'italic',  // سبک فونت (italic)
            weight: 'bold',   // وزن فونت (bold)
            lineHeight: 1.2   // فاصله خطوط
          }
        }
      }
    }
  }
}); 



