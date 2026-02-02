let media, blobs = [];

navigator.mediaDevices.getUserMedia({video:1,audio:1})
  .then(s => { prev.srcObject = s; media = s; });

function start() {
  blobs = [];
  let r = new MediaRecorder(media);
  r.ondataavailable = e => blobs.push(e.data);
  r.onstop = () => rec.src = URL.createObjectURL(new Blob(blobs));
  r.start(); setTimeout(() => r.stop(), 5000);
}

function save() {
  let a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob(blobs));
  a.download = "video.webm"; a.click();
}