const shortsURLRegex = /http[s]?:\/\/www\.youtube\.com\/shorts/;

const interval = setInterval(() => {
  for (node of document.querySelectorAll("ytd-grid-video-renderer")) {
    if (node.querySelector("a#thumbnail").href.match(shortsURLRegex) !== null) {
      node.remove();
    }
  }
}, 500);
