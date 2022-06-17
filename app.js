var Basedate = prompt("기준일을 입력해주세요", "2022-01-01");
var today = new Date();
const now = new Date();
var startDate = new Date(Basedate);
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1; // 월
let day = today.getDay(); // 요일
let date = today.getDate();
var startMilli = startDate.getTime();
var todayMilli = today.getTime();
var calcDay = 24 * 60 * 60 * 1000;
var passedDay = Math.round((todayMilli - startMilli) / calcDay);
if (passedDay < 0) {
    passedDay = passedDay * -1;
    pm = "+";
} else pm = "-"; //디데이가 현재보다 이전일 경우