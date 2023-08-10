// 요소(element), input 혹은 상수
const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");
const passwordConfirmInput = document.querySelector("#passwordConfirmInput");
const submitButton = document.querySelector("#submitButton");

clickSubmit();

function clickSubmit() {
  submitButton.addEventListener("click", handleSubmit);
}
// 이메일 형식인지 확인 (true 혹은 false 반환)
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// 회원가입 진행
function handleSubmit(e) {
  e.preventDefault();

  const data = [
    ["1234@abc.com", "1234"],
    ["abc@abc.com", "12345"],
  ];

  const email = emailInput.value;
  const password = passwordInput.value;
  const passwordConfirm = passwordConfirmInput.value;
  var flag = true;
  console.log(data);

  // 잘 입력했는지 확인
  const isEmailValid = validateEmail(email);
  //비번 유효성 최소 4글자, 최대 20글자
  const isPasswordValid = password.length >= 4 && password.length <= 20;

  const isPasswordSame = password === passwordConfirm;

  if (!isPasswordValid && password) {
    flag = false;
    return alert("비밀번호는 4글자 이상 20글자 이하이어야 합니다.");
  } else if (!isEmailValid && email) {
    flag = false;
    return alert("이메일 형식이 맞지 않습니다.");
  } else if (!isPasswordSame && passwordConfirm) {
    flag = false;
    return alert("비밀번호가 일치하지 않습니다.");
  }
  data.forEach((person) => {
    if (person[0] == email) {
      flag = false;
      return alert("중복된 아이디입니다.");
    }
  });
  if (flag) {
    alert(`정상적으로 회원가입되었습니다.`);
    window.location.href = "index.html";
  }
}
