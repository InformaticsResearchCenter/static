let url="/qr"

getData(url);

async function getData(url) {
  let resp = await fetch(url);
  let data = await resp.json();
  showQR(data.qr);
  document.getElementById("status").innerHTML = data.status;
  document.getElementById("message").innerHTML = data.message;
  sleep();
}

function sleep(){
var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('getData(url)',refresh)
}

function makeQrCode(text){
    qr = QRCode.generateSVG(text, {
        ecclevel: "M",
        fillcolor: "#F2F2F2",
        textcolor: "#D13438",
        margin: 4,
        modulesize: 8
    });
    var svg = document.getElementById("qrcode");
    svg.replaceChild(qr,svg.firstElementChild);
}

function showQR(text){
  if (typeof text === 'string' && text.length === 0) {
    document.getElementById('qrcode').style.display = 'none';
  } else {
    makeQrCode(text);
  }
}