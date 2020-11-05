let modal = document.querySelector(".feedback");
let popup = document.querySelector(".modal-window");
let close = document.querySelector(".close");
let map = document.querySelector(".show-map");
let bigMap = document.querySelector(".modal-map");
let closeMap = bigMap.querySelector(".close");


modal.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-hiden");
    popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-hiden");
    popup.classList.remove("modal-show");
});

map.addEventListener("click", function(evt) {
    evt.preventDefault();
    bigMap.classList.remove("modal-hiden");
});

closeMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    bigMap.classList.add("modal-hiden");
});
