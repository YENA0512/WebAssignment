var Target = document.getElementById("clock");
var alarmTarget = document.getElementById("alarm");
var time = new Date();
var year = time.getFullYear();
var month = time.getMonth();
var date = time.getDate();
var day = time.getDay();
var hours = time.getHours();
var minutes = time.getMinutes();
var seconds = time.getSeconds();

function changeTime() {
  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
}
function clock() {
  Target.innerText = `${year}-${
    month < 10 ? `0${month}` : month
  }-${date}${day} ${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function inputAlarm() {
  var inputformstring =
    "\
  <input id='hhh' type='text' size='2' maxlength='2' value=" +
    hours +
    "> 시 \
  <input id='mmm' type='text' size='2' maxlength='2' value=" +
    minutes +
    "> 분 \
  <input id='sss' type='text' size='2' maxlength='2' value=" +
    seconds +
    "> 초  \
  <input id='setalarm' type='button' value='추가' onclick='submitalarm()' ></form>";
  alarmTarget.innerHTML = inputformstring;
}

function submitalarm() {
  var hhh = document.getElementById("hhh").value;
  var mmm = document.getElementById("mmm").value;
  var sss = document.getElementById("sss").value;
  var alarmText = document.getElementById("alarm-text");
  var textNode = document.createElement("div");
  var hourValidate = true;
  var minValidate = true;
  var secValidate = true;

  if (hhh < 0 || hhh > 23 || isNaN(hhh)) {
    alert("시 값을 올바르게 입력해주세요");
    hourValidate = false;
    hhh = "00";
  }
  if (mmm < 0 || mmm > 59 || isNaN(mmm)) {
    alert("분 값을 올바르게 입력해주세요");
    minValidate = false;
    mmm = "00";
  }
  if (sss < 0 || sss > 59 || isNaN(sss)) {
    alert("초 값을 올바르게 입력해주세요");
    secValidate = false;
    sss = "00";
  }

  if (hourValidate && minValidate && secValidate) {
    console.log(hhh, mmm, sss);
    var newText = hhh + ":" + mmm + ":" + sss;
    textNode.innerHTML = newText;
    console.log(textNode);

    if (alarmText.childElementCount > 2) {
      alert("알람은 3개까지만 추가 가능합니다");
    } else {
      alarmText.appendChild(textNode);
    }
  }
}

clock();
setInterval(clock, 1000);
inputAlarm();
