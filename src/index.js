import "./styles.css";
const queryString = require("query-string");
const Hls = require("hls.js");

// Replace with your asset's playback ID

var playbackId = window.location.search.split("?muxVideo=")[1];
console.log({ playbackId });
var url = "https://stream.mux.com/" + playbackId + ".m3u8";

var video = document.getElementById("myVideo");
// HLS.js-specific setup code
if (playbackId !== undefined && Hls.isSupported()) {
  var hls = new Hls();
  hls.loadSource(url);
  hls.attachMedia(video);
} else {
  video.outerHTML = `
    <p><code>Hls</code> isn't supported, or playbackID is missing</p>
  `;
}
