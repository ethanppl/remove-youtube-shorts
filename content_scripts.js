const shortsURLRegex = /http[s]?:\/\/www\.youtube\.com\/shorts/;

const interval = setInterval(() => {
  const url = new URL(document.URL);

  if (url.pathname === "/") {
    // home page
    for (node of document.querySelectorAll("ytd-rich-section-renderer")) {
      if (node.querySelector("ytd-rich-shelf-renderer").isShorts) {
        node.remove();
      }
    }
  } else if (url.pathname === "/feed/subscriptions") {
    // subscriptions page
    for (node of document.querySelectorAll("ytd-grid-video-renderer")) {
      if (node.querySelector("a#thumbnail").href.match(shortsURLRegex) !== null) {
        node.remove();
      }
    }
  }
}, 500);
