let input = document.querySelector(".input");
let add = document.querySelector(".add");
let tasks = document.querySelector(".tasks");
// window.localStorage.clear();
add.addEventListener("click", function (element) {
  if (input.value) {
    //add the value in local storege
    window.localStorage.setItem("tasks", input.value);
    var item = document.createElement("div");
    let but = document.createElement("button");
    let disc = document.createElement("p");
    but.innerHTML = "Delet";
    disc.prepend(window.localStorage.getItem("tasks"));
    item.prepend(disc);
    item.append(but);
    disc.style.cssText = "padding:10px";
    item.style.cssText =
      "width: 100%;height: 40px;position: relative;border-radius: 10px; background-color:#fff ;margin-bottom:5px";
    but.style.cssText =
      "background-color:red;color:#fff;position: absolute;border-radius:10px;right:10px;top:10px";
    tasks.appendChild(item);
    but.addEventListener("click", function (e) {
      window.localStorage.removeItem("tasks");
      item.remove();
    });
  }
  element.preventDefault();
});

if (window.localStorage.getItem("tasks")) {
  var item = document.createElement("div");
  let but = document.createElement("button");
  let disc = document.createElement("p");
  but.innerHTML = "Delet";
  disc.append(window.localStorage.getItem("tasks"));
  item.prepend(disc);
  item.append(but);
  disc.style.cssText = "padding:10px;";
  item.style.cssText =
    "width: 100%;height: 40px;position: relative;border-radius: 10px; background-color:#fff ;margin-bottom:5px";
  but.style.cssText =
    "background-color:red;color:#fff;position: absolute;border-radius:10px;right:10px;top:10px";
  tasks.appendChild(item);
  but.addEventListener("click", function (e) {
    window.localStorage.removeItem("tasks");
    item.remove();
  });
}
