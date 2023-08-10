/* 1. human-animal-and-nature.html */
function animalBlog(id) {
  fetch("../js/json/data-animal.json")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.error(err);
    })
    .then((data) => {
      const listData = data;
      listData.forEach((item) => {
        document.getElementById(
          id
        ).innerHTML += `<div class="col-lg-4 col-sm-6 mb-3"> <a href="${item.link}"> <img src="${item.img}" style="width:100%; height: 15rem;object-fit:cover;object-position:center center"> </a> <div class="card-body d-flex flex-column p-2"> <a href="${item.link}"> <h4 class="mt-2 mb-0">${item.name}</h4> </a> <div class="card-text mt-1"> <small class="text-muted post-date"> <span class="icon icon-calendar icon-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path fill="#758CA3" fill-rule="evenodd" d="M21 6V5c0-.5523-.4477-1-1-1H4c-.5523 0-1 .4477-1 1v1h18zm0 2H3v13c0 .5523.4477 1 1 1h16c.5523 0 1-.4477 1-1V8zm-2-6h1c1.6569 0 3 1.3431 3 3v16c0 1.6569-1.3431 3-3 3H4c-1.6569 0-3-1.3431-3-3V5c0-1.6569 1.3431-3 3-3h1V1c0-.5523.4477-1 1-1s1 .4477 1 1v1h10V1c0-.5523.4477-1 1-1s1 .4477 1 1v1zM6 18c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm-8-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm-8-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 8c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm0-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm0-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1z"> </path> </svg> </span> ${item.date} </small> </div> <div class="card-text mt-3 mb-1"> <a style="color: #670000;" href="${item.link}">${item.desc}.</a> </div> </div> </div>`;
      });
    });
}

animalBlog("animalId");

/* 2. health.html */
function healthBlog(id) {
  fetch("../js/json/data-health.json")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.error(err);
    })
    .then((data) => {
      const listData = data;
      listData.forEach((item) => {
        document.getElementById(
          id
        ).innerHTML += `<div class="col-lg-4 col-sm-6 mb-3"> <a href="${item.link}"> <img src="${item.img}" style="width:100%; height: 15rem;object-fit:cover;object-position:center center"> </a> <div class="card-body d-flex flex-column p-2"> <a href="${item.link}"> <h4 class="mt-2 mb-0">${item.name}</h4> </a> <div class="card-text mt-1"> <small class="text-muted post-date"> <span class="icon icon-calendar icon-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path fill="#758CA3" fill-rule="evenodd" d="M21 6V5c0-.5523-.4477-1-1-1H4c-.5523 0-1 .4477-1 1v1h18zm0 2H3v13c0 .5523.4477 1 1 1h16c.5523 0 1-.4477 1-1V8zm-2-6h1c1.6569 0 3 1.3431 3 3v16c0 1.6569-1.3431 3-3 3H4c-1.6569 0-3-1.3431-3-3V5c0-1.6569 1.3431-3 3-3h1V1c0-.5523.4477-1 1-1s1 .4477 1 1v1h10V1c0-.5523.4477-1 1-1s1 .4477 1 1v1zM6 18c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm-8-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm-8-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 8c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm0-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm0-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1z"> </path> </svg> </span> ${item.date} </small> </div> <div class="card-text mt-3 mb-1"> <a style="color: #670000;" href="${item.link}">${item.desc}.</a> </div> </div> </div>`;
      });
    });
}

healthBlog("heathId");

/* 3. technology.html */
function technologyBlog(id) {
  fetch("../js/json/data-technology.json")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.error(err);
    })
    .then((data) => {
      const listData = data.tech;
      listData.forEach((item) => {
        document.getElementById(
          id
        ).innerHTML += `<div class="col-lg-4 col-sm-6 mb-3"> <a href="${item.link}"> <img src="${item.img}" style="width:100%; height: 15rem;object-fit:cover;object-position:center center"> </a> <div class="card-body d-flex flex-column p-2"> <a href="${item.link}"> <h4 class="mt-2 mb-0">${item.name}</h4> </a> <div class="card-text mt-1"> <small class="text-muted post-date"> <span class="icon icon-calendar icon-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path fill="#758CA3" fill-rule="evenodd" d="M21 6V5c0-.5523-.4477-1-1-1H4c-.5523 0-1 .4477-1 1v1h18zm0 2H3v13c0 .5523.4477 1 1 1h16c.5523 0 1-.4477 1-1V8zm-2-6h1c1.6569 0 3 1.3431 3 3v16c0 1.6569-1.3431 3-3 3H4c-1.6569 0-3-1.3431-3-3V5c0-1.6569 1.3431-3 3-3h1V1c0-.5523.4477-1 1-1s1 .4477 1 1v1h10V1c0-.5523.4477-1 1-1s1 .4477 1 1v1zM6 18c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm-8-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm-8-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 8c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm0-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm0-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1z"> </path> </svg> </span> ${item.date} </small> </div> <div class="card-text mt-3 mb-1"> <a style="color: #670000;" href="${item.link}">${item.desc}.</a> </div> </div> </div>`;
      });
    });
}

function technologyEbikeBlog(id) {
  fetch("../js/json/data-technology.json")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.error(err);
    })
    .then((data) => {
      const listData = data.ebike;
      listData.forEach((item) => {
        document.getElementById(
          id
        ).innerHTML += `<div class="col-lg-4 col-sm-6 mb-3"> <a href="${item.link}"> <img src="${item.img}" style="width:100%; height: 15rem;object-fit:cover;object-position:center center"> </a> <div class="card-body d-flex flex-column p-2"> <a href="${item.link}"> <h4 class="mt-2 mb-0">${item.name}</h4> </a> <div class="card-text mt-1"> <small class="text-muted post-date"> <span class="icon icon-calendar icon-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path fill="#758CA3" fill-rule="evenodd" d="M21 6V5c0-.5523-.4477-1-1-1H4c-.5523 0-1 .4477-1 1v1h18zm0 2H3v13c0 .5523.4477 1 1 1h16c.5523 0 1-.4477 1-1V8zm-2-6h1c1.6569 0 3 1.3431 3 3v16c0 1.6569-1.3431 3-3 3H4c-1.6569 0-3-1.3431-3-3V5c0-1.6569 1.3431-3 3-3h1V1c0-.5523.4477-1 1-1s1 .4477 1 1v1h10V1c0-.5523.4477-1 1-1s1 .4477 1 1v1zM6 18c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm-8-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm-8-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 8c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm0-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm0-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1z"> </path> </svg> </span> ${item.date} </small> </div> <div class="card-text mt-3 mb-1"> <a style="color: #670000;" href="${item.link}">${item.desc}.</a> </div> </div> </div>`;
      });
    });
}
technologyEbikeBlog("technologyEbikeId");
technologyBlog("technologyId");

/* 4. traveler.html */
function travelerBlog(id) {
  fetch("../js/json/data-traveler.json")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.error(err);
    })
    .then((data) => {
      const listData = data;
      listData.forEach((item) => {
        document.getElementById(
          id
        ).innerHTML += `<div class="col-lg-4 col-sm-6 mb-3"> <a href="${item.link}"> <img src="${item.img}" style="width:100%; height: 15rem;object-fit:cover;object-position:center center"> </a> <div class="card-body d-flex flex-column p-2"> <a href="${item.link}"> <h4 class="mt-2 mb-0">${item.name}</h4> </a> <div class="card-text mt-1"> <small class="text-muted post-date"> <span class="icon icon-calendar icon-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path fill="#758CA3" fill-rule="evenodd" d="M21 6V5c0-.5523-.4477-1-1-1H4c-.5523 0-1 .4477-1 1v1h18zm0 2H3v13c0 .5523.4477 1 1 1h16c.5523 0 1-.4477 1-1V8zm-2-6h1c1.6569 0 3 1.3431 3 3v16c0 1.6569-1.3431 3-3 3H4c-1.6569 0-3-1.3431-3-3V5c0-1.6569 1.3431-3 3-3h1V1c0-.5523.4477-1 1-1s1 .4477 1 1v1h10V1c0-.5523.4477-1 1-1s1 .4477 1 1v1zM6 18c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm-8-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm-8-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 8c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm0-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm0-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1z"> </path> </svg> </span> ${item.date} </small> </div> <div class="card-text mt-3 mb-1"> <a style="color: #670000;" href="${item.link}">${item.desc}.</a> </div> </div> </div>`;
      });
    });
}

travelerBlog("travelId");

function scrollFn() {
  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);

  var xDown = null;
  var yDown = null;

  function getTouches(evt) {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  }

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }
  let isLoader = false;

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* right swipe */
      } else {
        /* left swipe */
      }
    } else {
      if (yDiff > 0) {
        /* down swipe */
        if (!isLoader) {
          document.getElementById("loader").style.display = "inline-block";
          isLoader = true;
        }
      } else {
        /* up swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  }
}
// scrollFn()
var pStart = { x: 0, y: 0 };
var pStop = { x: 0, y: 0 };

function swipeStart(e) {
  if (typeof e["targetTouches"] !== "undefined") {
    var touch = e.targetTouches[0];
    pStart.x = touch.screenX;
    pStart.y = touch.screenY;
  } else {
    pStart.x = e.screenX;
    pStart.y = e.screenY;
  }
}

function swipeEnd(e) {
  if (typeof e["changedTouches"] !== "undefined") {
    var touch = e.changedTouches[0];
    pStop.x = touch.screenX;
    pStop.y = touch.screenY;
  } else {
    pStop.x = e.screenX;
    pStop.y = e.screenY;
  }

  swipeCheck();
}

function swipeCheck() {
  var changeY = pStart.y - pStop.y;
  var changeX = pStart.x - pStop.x;
  if (isPullDown(changeY, changeX)) {
    alert("Swipe Down!");
  } else {
    alert("Swipe Up!");
  }
}

function isPullDown(dY, dX) {
  // methods of checking slope, length, direction of line created by swipe action
  return (
    dY < 0 &&
    ((Math.abs(dX) <= 100 && Math.abs(dY) >= 300) ||
      (Math.abs(dX) / Math.abs(dY) <= 0.3 && dY >= 60))
  );
}

document.addEventListener(
  "touchstart",
  function (e) {
    swipeStart(e);
  },
  false
);
document.addEventListener(
  "touchend",
  function (e) {
    swipeEnd(e);
  },
  false
);
