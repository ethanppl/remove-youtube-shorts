const interval = setInterval(() => {
  for (node of document.querySelectorAll("ytd-grid-video-renderer")) {
    if (node.querySelector("a#thumbnail").href.match("https://www.youtube.com/shorts/") !== null) {
      node.remove();
    }
  }
}, 500);
