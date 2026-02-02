const preview = document.getElementById('preview');
const recordedVideo = document.getElementById('recorded-video');
const timestamp = document.getElementById('timestamp');

const videoSelect = document.getElementById('videoSource');
const audioSelect = document.getElementById('audioSource');
const startStreamBtn = document.getElementById('start-stream');

let mediaRecorder;
let recordedChunks = [];
let stream = null;

let recordStartTime = null;
let timestampInterval = null;

//* ✅ First request permission to get real device labels
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(tempStream => {
    //* Stop temp stream to free devices
    tempStream.getTracks().forEach(track => track.stop());

    //* Now get actual device names
    return navigator.mediaDevices.enumerateDevices();
  })
  .then(gotDevices)
  .catch(err => {
    console.error('Permission denied or error accessing devices:', err);
    alert('Camera/mic permission is required to list devices.');
  });

function gotDevices(devices) {
  videoSelect.innerHTML = '';
  audioSelect.innerHTML = '';

  devices.forEach(device => {
    const option = document.createElement('option');
    option.value = device.deviceId;
    option.text = device.label || `${device.kind} ${videoSelect.length + 1}`;

    if (device.kind === 'videoinput') {
      videoSelect.appendChild(option);
    } else if (device.kind === 'audioinput') {
      audioSelect.appendChild(option);
    }
  });
}

//* Start stream with selected devices
startStreamBtn.onclick = () => {
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
  }

  const constraints = {
    video: { deviceId: { exact: videoSelect.value } },
    audio: { deviceId: { exact: audioSelect.value } }
  };

  navigator.mediaDevices.getUserMedia(constraints)
    .then(s => {
      stream = s;
      preview.srcObject = stream;
    })
    .catch(err => {
      console.error('Error starting stream:', err);
      alert('Could not access selected devices.');
    });
};

//* Start recording
document.getElementById('start-record').onclick = () => {
  if (!stream) {
    alert('Please start the stream first.');
    return;
  }

  recordedChunks = [];
  mediaRecorder = new MediaRecorder(stream);

  //* Start recording
  mediaRecorder.start();
  recordStartTime = Date.now();

  //* Start timestamp counter
  timestampInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - recordStartTime) / 1000);
    const min = String(Math.floor(elapsed / 60)).padStart(2, '0');
    const sec = String(elapsed % 60).padStart(2, '0');
    timestamp.textContent = `${min}:${sec}`;
  }, 500);

  mediaRecorder.ondataavailable = event => {
    if (event.data.size > 0) {
      recordedChunks.push(event.data);
    }
  };

  mediaRecorder.onstop = () => {
    clearInterval(timestampInterval);
    timestamp.textContent = '00:00';

    const blob = new Blob(recordedChunks, { type: 'video/webm; codecs=vp8,opus' });
    const url = URL.createObjectURL(blob);
    recordedVideo.src = url;
    document.getElementById('download').disabled = false;

    document.getElementById('download').onclick = () => {
      const a = document.createElement('a');
      a.href = url;
      a.download = 'recording.webm';
      a.click();
    };
  };
};

//* Stop recording
document.getElementById('stop-record').onclick = () => {
  if (mediaRecorder && mediaRecorder.state === 'recording') {
    mediaRecorder.stop();
  }

  //* Stop camera and mic after recording
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    preview.srcObject = null;
  }
};

//* Playback controls
document.getElementById('play').onclick = () => recordedVideo.play();
document.getElementById('pause').onclick = () => recordedVideo.pause();
document.getElementById('forward').onclick = () => recordedVideo.currentTime += 5;
document.getElementById('rewind').onclick = () => recordedVideo.currentTime -= 5;

//* Timestamp overlay (for playback)
setInterval(() => {
  if (!recordedVideo.paused && !recordedVideo.ended) {
    const min = Math.floor(recordedVideo.currentTime / 60).toString().padStart(2, '0');
    const sec = Math.floor(recordedVideo.currentTime % 60).toString().padStart(2, '0');
    timestamp.textContent = `${min}:${sec}`;
  }
}, 500);
