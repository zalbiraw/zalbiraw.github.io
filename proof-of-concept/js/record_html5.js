var audio_context,
    recorder,
    r_start   = $('.record-start'),
    r_stop    = $('.record-stop'),
    js        = document.createElement("script");


js.type = "text/javascript";
js.src = "js/recordmp3.js";
document.body.appendChild(js);    

function toggleRecording(state) {
  if (state)
  {
    r_start.css("display", "none");
    r_stop.css("display", "inline");
  } else {
    r_start.css("display", "inline");
    r_stop.css("display", "none");
  }
}

function startRecording(button) {
  recorder && recorder.record();
  toggleRecording(true);
}

function stopRecording(button) {
  recorder && recorder.stop();
  toggleRecording(false);
  recorder && recorder.exportWAV(function(blob) {});
  recorder.clear();
}

window.onload = function init() {
  try {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    navigator.getUserMedia = (  navigator.getUserMedia ||
                                navigator.webkitGetUserMedia ||
                                navigator.mozGetUserMedia ||
                                navigator.msGetUserMedia);
    window.URL = window.URL || window.webkitURL;
    
    audio_context = new AudioContext;
  } catch (e) {
    alert('No web audio support in this browser!');
  }
  
  if (navigator.getUserMedia)
  {
    navigator.getUserMedia({audio: true}, function(stream) {
      recorder = new Recorder(audio_context.createMediaStreamSource(stream));
    }, function(e) {
    alert('No live audio input: ' + e);
  });

  }
};