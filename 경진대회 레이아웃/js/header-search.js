document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    // header 검색 함수
	const find = document.getElementById("find");
	find.addEventListener("click", (e) => {
		const input = document.getElementById("search").value;
		if (input == "") {
			alert("검색어를 입력해주세요.");
			e.preventDefault();	// form 전송을 막는 함수
		}
	});
});