document.addEventListener("DOMContentLoaded", () => {
	"use strict";

	var boardTitle = document.getElementById("board-title");
	var boardText = document.getElementById("area-text");

	addEventListener("submit", (e) => {
		if (boardTitle == "" || boardTitle.length == 0) {
			alert("제목을 입력해주세요.");
			e.preventDefault();
		}
		if (boardText == "") {
			alert("내용을 입력해주세요.");
			e.preventDefault();
		} else if (boardText.length <= 10) {
			alert("글 내용은 10자 이상으로 입력해주세요.");
			e.preventDefault();
		}
	});

});