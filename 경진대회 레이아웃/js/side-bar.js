document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    
	// 사이드 바 함수
    const showSide = document.querySelector(".iii")
    const hideSide = document.querySelector("#hide-side");
    const sideBar = document.querySelector("aside");
    showSide.addEventListener("click", () => {sideBar.style.display = "block";});
    hideSide.addEventListener("click", () => {sideBar.style.display = "none";});

});