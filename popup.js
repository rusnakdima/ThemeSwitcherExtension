// document.getElementById("light").addEventListener("click", function() {
//   setLightTheme();
// });

// document.getElementById("dark").addEventListener("click", function() {
//   setDarkTheme();
// });

// function setLightTheme() {
//   var boxElem = document.querySelectorAll("html, body");
//   for(var i=0; i < boxElem.length; i++) {
//     boxElem[i].style.color = "#000";
//     boxElem[i].style.backgroundColor = "#fff";
//   }
//   var boxElem1 = document.querySelectorAll("aside, div, main, selection, header, footer, tr, th, tbody, thead, td, table, pre, code, section, button");
//   for(var i=0; i < boxElem1.length; i++) {
//     boxElem1[i].style.color = "#000";
//     boxElem1[i].style.backgroundColor = "transparent";
//   }
//   var elem = document.querySelectorAll("p, span, input, label, li, a, u, b, i, h1, h2, h3, h4, h5, h6");
//   for(var i=0; i < elem.length; i++) {
//     elem[i].style.color = "#000";
//     elem[i].style.backgroundColor = "#fff";
//   }
// }

// function setDarkTheme() {
//   var boxElem = document.querySelectorAll("html, body");
//   for(var i=0; i < boxElem.length; i++) {
//     boxElem[i].style.color = "#fff";
//     boxElem[i].style.backgroundColor = "#000";
//   }
//   var boxElem1 = document.querySelectorAll("aside, div, main, selection, header, footer, tr, th, tbody, thead, td, table, pre, code, section, button");
//   for(var i=0; i < boxElem1.length; i++) {
//     boxElem1[i].style.color = "#fff";
//     boxElem1[i].style.backgroundColor = "transparent";
//   }
//   var elem = document.querySelectorAll("p, span, input, label, li, a, u, b, i, h1, h2, h3, h4, h5, h6");
//   for(var i=0; i < elem.length; i++) {
//     elem[i].style.color = "#fff";
//     elem[i].style.backgroundColor = "#000";
//   }
// }




document.addEventListener("keydown", (e)=>{
  if(e.metaKey && e.altKey && e.code == "KeyZ"){
    var boxElem = document.querySelectorAll("html, body");
    for(var i=0; i < boxElem.length; i++) {
      boxElem[i].style = "color: #000; background-color: #fff";
    }
    var boxElem1 = document.querySelectorAll("aside, div, main, selection, header, footer, tr, th, tbody, thead, td, table, pre, code, section, button");
    for(var i=0; i < boxElem1.length; i++) {
      boxElem1[i].style = "color: #000; background-color: transparent";
    }
    var elem = document.querySelectorAll("p, span, input, label, li, a, u, b, i, h1, h2, h3, h4, h5, h6");
    for(var i=0; i < elem.length; i++) {
      elem[i].style = "color: #000; background-color: #fff";
    }
  }
  if(e.metaKey && e.altKey && e.code == "KeyX"){
    var boxElem = document.querySelectorAll("html, body");
    for(var i=0; i < boxElem.length; i++) {
      var styles = window.getComputedStyle(boxElem[i]);
      var currentColor = styles.color;
      var currentBackColor = styles.backgroundColor;
      var newColor = invertColor(currentColor);
      var newBackColor = invertColor(currentBackColor);
      boxElem[i].style = `color: ${newColor}; background-color: ${newBackColor}`;
    }
    var boxElem1 = document.querySelectorAll("aside, div, main, selection, header, footer, tr, th, tbody, thead, td, table, pre, code, section, button");
    for(var i=0; i < boxElem1.length; i++) {
      var styles = window.getComputedStyle(boxElem1[i]);
      var currentColor = styles.color;
      var currentBackColor = styles.backgroundColor;
      var newColor = invertColor(currentColor);
      var newBackColor = invertColor(currentBackColor);
      boxElem1[i].style = `color: ${newColor}; background-color: ${newBackColor}`;
    }
    var elem = document.querySelectorAll("p, span, input, label, li, a, u, b, i, h1, h2, h3, h4, h5, h6");
    for(var i=0; i < elem.length; i++) {
      var styles = window.getComputedStyle(elem[i]);
      var currentColor = styles.color;
      var currentBackColor = styles.backgroundColor;
      var newColor = invertColor(currentColor);
      var newBackColor = invertColor(currentBackColor);
      elem[i].style = `color: ${newColor}; background-color: ${newBackColor}`;
    }
  }
})

function invertColor(color) {
  var hex;
  if (color.slice(0, 1) === '#') { // проверяем, является ли цвет HEX
    hex = color.slice(1); // удаляем решетку из начала цвета
    hex = hex.length === 3 ? hex.repeat(2) : hex; // если цвет в формате #RGB, преобразуем его в формат #RRGGBB
    hex = hex.split('').map(function(char) {
      // инвертируем каждый канал цвета (R, G, B)
      return (15 - parseInt(char, 16)).toString(16);
    }).join('');
    return '#' + hex; // возвращаем противоположный цвет в формате HEX
  } else if (color.slice(0, 3) === 'rgb') { // проверяем, является ли цвет RGB
    var rgb = color.match(/\d+/g); // получаем массив из RGB значений
    var invRgb = rgb.map(function(val) {
      // инвертируем каждое значение RGB
      return 255 - parseInt(val);
    });
    if (color.indexOf('rgba') !== -1) { // проверяем, является ли цвет RGBA
      var alpha = color.split(',')[3].trim(); // получаем значение прозрачности
      return `rgba(${invRgb.join(',')},${alpha})`; // возвращаем противоположный цвет в формате RGBA
    } else {
      return `rgb(${invRgb.join(',')})`; // возвращаем противоположный цвет в формате RGB
    }
  } else {
    return color; // если формат цвета неизвестен, возвращаем исходный цвет
  }
}