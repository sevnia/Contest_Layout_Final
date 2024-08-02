document.addEventListener("DOMContentLoaded", () => {
	"use strict";

	addEventListener("submit", (e) => {
		// const name = document.getElementById("name").value;
		const id = document.getElementById("id").value;
		// const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;
		
		/** 한글만 가능 (2자리에서 6자리) */
		// const nameCheck = (/^[가-힣]{2,6}$/).test(name);

		/** ID (4~20자리, 첫글자 숫자 X) */
		const idCheck = (/^[A-Za-z]{1}[A-Za-z0-9]{3,19}$/).test(id);

		/** TLD가 없는 이메일을 검사 */
		// const emailCheck = (/^[a-z0-9\.\-_]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/).test(email);

		/** 알파벳, 숫자, 그리고 특정 특수 문자가 포함되어 있으며 최소 8자 이상인 문자열을 검사 */
		const passwordCheck = (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/).test(password);

		// if (nameCheck) {
		// 	alert("회원가입 되었습니다.");
		// } else if (!nameCheck) {
		// 	alert("한글 2자리에서 6자리를 입력해주세요.");
		// 	e.preventDefault();
		// }

		if (idCheck) {
			alert("회원가입 되었습니다.");
		} else if (!idCheck) {
			alert("ID 4자리에서 20자리를 입력하세요.");
			e.preventDefault();
		}

		// if (emailCheck) {
		// 	alert("회원가입 되었습니다.");
		// } else if (!emailCheck) {
			
		// 	alert("이메일은 TLD가 포함되어 있는 이메일을 입력해주세요.");
		// 	e.preventDefault();
		// }

		if (passwordCheck) {
			alert("회원가입 되었습니다.");
		} else if (!passwordCheck) {
			alert("비밀번호는 알파벳, 숫자, 특수 문자를 포함해 8자리 이상으로 입력해주세요.");
			e.preventDefault();
		}

	});

});
