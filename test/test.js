/*function onConnect() {
    console.log("web connect device");
    javascript:android123.connectDevice(); // 连接设备
}

function showMsgFromWeb() {
    console.log('this is example java call js');
}*/

var test = document.getElementById("resultText");

function initInBodySDK() {
    javascript:android123.initInBodySDKJava("[InBody Test]InBody init SDK.");
}


// Callbacks
function initInBodySDKCallBack(res) {
    console.log("[InBody Test] init callback result: " + res);
    test.value = res;
}



function connectDevice() {
    javascript:android123.connectDeviceJava();
}

function measureBodyData() {
    javascript:android123.measureBodyDataJava();
}


function connectDeviceCallBack(res) {
    console.log("[InBody Test] connect device callback result: " + res);
    test.value = res;
}

function measureBodyDataCallBack(res) {
    console.log("[InBody Test] measure body data callback result: " + res);
    test.value = res;
}

