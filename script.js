const token = "fYsLU9AyVYV93G3ZqsJ5nZYKOQ-hQkIa";

// =======================
// JAM DIGITAL
// =======================

function updateClock(){

  const now = new Date();

  let jam = now.getHours().toString().padStart(2,'0');
  let menit = now.getMinutes().toString().padStart(2,'0');
  let detik = now.getSeconds().toString().padStart(2,'0');

  document.getElementById("clock").innerHTML =
  `${jam}:${menit}:${detik}`;

}

setInterval(updateClock,1000);

updateClock();

// =======================
// WIFI STATUS
// =======================

function updateWifi(){

  const wifiText =
  document.getElementById("wifiText");

  const wifiStatus =
  document.getElementById("wifiStatus");

  const pingText =
  document.getElementById("pingText");

  if(navigator.onLine){

    wifiText.innerHTML =
    "ESP8266 Connected Successfully";

    wifiStatus.innerHTML =
    "ONLINE";

    wifiStatus.style.background =
    "linear-gradient(45deg,#22c55e,#16a34a)";

    // SIMULASI PING
    let ping =
    Math.floor(Math.random() * 20) + 5;

    pingText.innerHTML =
    ping + " ms";

  }else{

    wifiText.innerHTML =
    "No Internet Connection";

    wifiStatus.innerHTML =
    "OFFLINE";

    wifiStatus.style.background =
    "linear-gradient(45deg,#ef4444,#dc2626)";

    pingText.innerHTML =
    "-- ms";

  }

}

window.addEventListener("online",updateWifi);
window.addEventListener("offline",updateWifi);

updateWifi();

// =======================
// FORMAT WAKTU
// =======================

function getTime(){

  const now = new Date();

  let jam = now.getHours().toString().padStart(2,'0');
  let menit = now.getMinutes().toString().padStart(2,'0');
  let detik = now.getSeconds().toString().padStart(2,'0');

  return `${jam}:${menit}:${detik}`;

}

// =======================
// LAMPU 1
// =======================

function lampu1On(){

  fetch(`https://blynk.cloud/external/api/update?token=${token}&V0=1`);

  document.getElementById("lamp1").className =
  "lamp on-lamp";

  document.getElementById("dot1").className =
  "dot on-dot";

  document.getElementById("status1").innerHTML =
  "ON";

  document.getElementById("time1").innerHTML =
  "Lampu dinyalakan jam " + getTime();

}

function lampu1Off(){

  fetch(`https://blynk.cloud/external/api/update?token=${token}&V0=0`);

  document.getElementById("lamp1").className =
  "lamp off-lamp";

  document.getElementById("dot1").className =
  "dot off-dot";

  document.getElementById("status1").innerHTML =
  "OFF";

  document.getElementById("time1").innerHTML =
  "Lampu dimatikan jam " + getTime();

}

// =======================
// LAMPU 2
// =======================

function lampu2On(){

  fetch(`https://blynk.cloud/external/api/update?token=${token}&V1=1`);

  document.getElementById("lamp2").className =
  "lamp on-lamp";

  document.getElementById("dot2").className =
  "dot on-dot";

  document.getElementById("status2").innerHTML =
  "ON";

  document.getElementById("time2").innerHTML =
  "Lampu dinyalakan jam " + getTime();

}

function lampu2Off(){

  fetch(`https://blynk.cloud/external/api/update?token=${token}&V1=0`);

  document.getElementById("lamp2").className =
  "lamp off-lamp";

  document.getElementById("dot2").className =
  "dot off-dot";

  document.getElementById("status2").innerHTML =
  "OFF";

  document.getElementById("time2").innerHTML =
  "Lampu dimatikan jam " + getTime();

}
// =======================
// TIMER LAMPU 1
// =======================

let lampu1OnTime = "";
let lampu1OffTime = "";

function saveTimer1(){

  lampu1OnTime =
  document.getElementById("onTime1").value;

  lampu1OffTime =
  document.getElementById("offTime1").value;

  alert("Jadwal Lampu 1 berhasil disimpan");

}

// =======================
// TIMER LAMPU 2
// =======================

let lampu2OnTime = "";
let lampu2OffTime = "";

function saveTimer2(){

  lampu2OnTime =
  document.getElementById("onTime2").value;

  lampu2OffTime =
  document.getElementById("offTime2").value;

  alert("Jadwal Lampu 2 berhasil disimpan");

}

// =======================
// AUTO CHECK TIMER
// =======================

function checkTimer(){

  const now = new Date();

  let jam =
  now.getHours().toString().padStart(2,'0');

  let menit =
  now.getMinutes().toString().padStart(2,'0');

  let currentTime =
  `${jam}:${menit}`;

  // LAMPU 1 ON
  if(currentTime == lampu1OnTime){

    lampu1On();

  }

  // LAMPU 1 OFF
  if(currentTime == lampu1OffTime){

    lampu1Off();

  }

  // LAMPU 2 ON
  if(currentTime == lampu2OnTime){

    lampu2On();

  }

  // LAMPU 2 OFF
  if(currentTime == lampu2OffTime){

    lampu2Off();

  }

}

// CEK SETIAP 1 DETIK
setInterval(checkTimer,1000);