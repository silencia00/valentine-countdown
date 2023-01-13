const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const valDay = new Date("Feb 14, 2023 00:00:00").getTime();

updatecountdown()

function updatecountdown(){
const live = new Date().getTime();
const remains = valDay - live;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const d = Math.floor(remains / day);
const h = Math.floor((remains % day) / hour);
const m = Math.floor((remains % hour) / minute);
const s = Math.floor((remains % minute) / second);

dayEl.innerText = d
hourEl.innerText = h
minuteEl.innerText = m
secondEl.innerText = s

setTimeout(updatecountdown, 1000)
}