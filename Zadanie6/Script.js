var alarmWlaczony = false;
var alarmHH, alarmMM, alarmSS;

function drawClock(data, selector) {
    const date = data;
    const hours = document.querySelector(selector + ' .hours');
    hours.style.transform = `rotate(${date.getHours() / 12 * 360}deg)`;
    const minutes = document.querySelector(selector + ' .minutes');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.querySelector(selector + ' .seconds');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;
}

function drawAllClocks() {

    var dataWarszawa = new Date();
    var dataMoskwa = new Date().addHours(1);
    var dataNowyJork = new Date().addHours(-6);
    var dataTokio = new Date().addHours(7);
    var dataLondyn = new Date().addHours(-1)

    sprawdzCzyWlaczycAlarm(dataWarszawa);

    drawClock(dataWarszawa, "#warszawa");
    drawClock(dataMoskwa, "#moskwa");
    drawClock(dataNowyJork, "#nowyjork");
    drawClock(dataTokio, "#tokio");
    drawClock(dataLondyn, "#londyn");
}

function sprawdzCzyWlaczycAlarm(data) {
    if (alarmWlaczony) {
        if (data.getHours === alarmHH && data.getMinutes === alarmMM && data.getSeconds === alarmSS) {
            const sound = new Sound("alarm.mp3");
            sound.play();
            alert("Proszę wstawać");
        }
    }
}

function ustawAlarm() {
    alarmHH = parseInt(document.getElementById("alarmGodzina").value);
    alarmMM = parseInt(document.getElementById("alarmMinuty").value);
    alarmSS = parseInt(document.getElementById("alarmSekundy").value);
    alert(`Włączono budzik na ${alarmHH}:${alarmMM}:${alarmSS}.`);
    alarmWlaczony = true;
}

function wylaczAlarm() {
    alarmWlaczony = false;
}



Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
}

window.setInterval(drawAllClocks, 1000);
