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

function batteryCharge() {
  var batteryWidth = document.getElementById("battery");
  var clockContainer = document.getElementById("clock");
  var maxwidth = 100;

  widthPerSec = setInterval(() => {
    if (maxwidth <= 0) {
      clearInterval();
      if (maxwidth == 0) {
        clockContainer.style.backgroundColor = "black";
        clockContainer.style.color = "black";
      }
    } else {
      maxwidth -= 1;
      batteryWidth.style.width = maxwidth + "px";
    }
  }, 1000);
}
clock();
setInterval(clock, 1000);
inputAlarm();
batteryCharge();

// 개선

const clockManager = {
  // DOM 요소들

  target: document.getElementById("clock"),

  alarmTarget: document.getElementById("alarm"),

  batteryWidth: document.getElementById("battery"),

  clockContainer: document.getElementById("clock"),

  // 현재 날짜와 시간 가져오기

  currentTime: function () {
    const time = new Date();

    return {
      year: time.getFullYear(),

      month: time.getMonth(),

      date: time.getDate(),

      day: time.getDay(),

      hours: time.getHours(),

      minutes: time.getMinutes(),

      seconds: time.getSeconds(),
    };
  },

  // 한 자리 숫자 앞에 0 붙이기

  paddedValue: function (value) {
    return value < 10 ? `0${value}` : value;
  },

  // 현재 날짜와 시간 표시하기

  clock: function () {
    const { year, month, date, day, hours, minutes, seconds } =
      this.currentTime();

    this.target.innerText = `${year}-${this.paddedValue(
      month
    )}-${this.paddedValue(date)}${day} ${this.paddedValue(
      hours
    )}:${this.paddedValue(minutes)}:${this.paddedValue(seconds)}`;
  },

  // 알람 설정 폼 생성하기

  generateAlarmForm: function (hours, minutes, seconds) {
    return `

    <input id='hhh' type='text' size='2' maxlength='2' value=${this.paddedValue(
      hours
    )}> 시 

    <input id='mmm' type='text' size='2' maxlength='2' value=${this.paddedValue(
      minutes
    )}> 분

    <input id='sss' type='text' size='2' maxlength='2' value=${this.paddedValue(
      seconds
    )}> 초

    <input id='setalarm' type='button' value='추가' onclick='clockManager.submitAlarm()'></form>

  `;
  },

  // 알람 설정 폼 표시하기

  inputAlarm: function () {
    const { hours, minutes, seconds } = this.currentTime();

    const inputformstring = this.generateAlarmForm(hours, minutes, seconds);

    this.alarmTarget.innerHTML = inputformstring;
  },

  // 시간 검증

  isValidHour: function (value) {
    return value >= 0 && value <= 23 && !isNaN(value);
  },

  // 분 검증

  isValidMinute: function (value) {
    return value >= 0 && value <= 59 && !isNaN(value);
  },

  // 초 검증

  isValidSecond: function (value) {
    return value >= 0 && value <= 59 && !isNaN(value);
  },

  // 알람 추가하기

  addAlarm: function (alarmText, textNode) {
    if (alarmText.childElementCount > 2) {
      alert("알람은 3개까지만 추가 가능합니다");

      return false;
    } else {
      alarmText.appendChild(textNode);

      return true;
    }
  },

  // 알람 설정하고 입력 검증하기

  submitAlarm: function () {
    let hhh = document.getElementById("hhh").value;

    let mmm = document.getElementById("mmm").value;

    let sss = document.getElementById("sss").value;

    let alarmText = document.getElementById("alarm-text");

    let textNode = document.createElement("div");

    // 입력 검증 및 조기 리턴

    if (!this.isValidHour(hhh)) {
      alert("시 값을 올바르게 입력해주세요");

      return;
    }

    if (!this.isValidMinute(mmm)) {
      alert("분 값을 올바르게 입력해주세요");

      return;
    }

    if (!this.isValidSecond(sss)) {
      alert("초 값을 올바르게 입력해주세요");

      return;
    }

    // 새로운 알람 추가

    const newText = `${hhh}:${mmm}:${sss}`;

    textNode.innerHTML = newText;

    this.addAlarm(alarmText, textNode);
  },

  // 배터리 충전이 완료되었는지 확인하고, 배터리 UI 업데이트

  updateBatteryUI: function (maxwidth) {
    if (maxwidth <= 0) {
      clearInterval();

      if (maxwidth === 0) {
        this.clockContainer.style.backgroundColor = "black";

        this.clockContainer.style.color = "black";
      }
    } else {
      maxwidth -= 1;

      this.batteryWidth.style.width = `${maxwidth}px`;
    }
  },

  // 배터리 충전하기

  batteryCharge: function () {
    let maxwidth = 100;

    setInterval(() => this.updateBatteryUI(maxwidth), 1000);
  },

  // 클록 초기화하기

  init: function () {
    this.clock();

    setInterval(() => this.clock(), 1000);

    this.inputAlarm();

    this.batteryCharge();
  },
};

// 클록 시작하기

clockManager.init();
