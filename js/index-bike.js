/* 3. technology.html */
function technologyEbikeBlog(id) {
  fetch("../js/json/data-e-bike.json")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.error(err);
    })
    .then((data) => {
      const listData = data.ebike.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
      listData.forEach((item) => {
        const dateDisplay = new Date(`${item.date}`).toLocaleDateString(
          "en-us",
          { year: "numeric", month: "short", day: "numeric" }
        );
        item.desc = item.desc ? item.desc : "Read more";
        document.getElementById(
          id
        ).innerHTML += `<div class="col-lg-4 col-sm-6 mb-3"> <a href="${item.link}"> <img src="${item.img}" style="width:100%; height: 15rem;object-fit:cover;object-position:center center"> </a> <div class="card-body d-flex flex-column p-2"> <a href="${item.link}"> <h4 class="mt-2 mb-0">${item.name}</h4> </a> <div class="card-text mt-1"> <small class="text-muted post-date"> <span class="icon icon-calendar icon-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path fill="#758CA3" fill-rule="evenodd" d="M21 6V5c0-.5523-.4477-1-1-1H4c-.5523 0-1 .4477-1 1v1h18zm0 2H3v13c0 .5523.4477 1 1 1h16c.5523 0 1-.4477 1-1V8zm-2-6h1c1.6569 0 3 1.3431 3 3v16c0 1.6569-1.3431 3-3 3H4c-1.6569 0-3-1.3431-3-3V5c0-1.6569 1.3431-3 3-3h1V1c0-.5523.4477-1 1-1s1 .4477 1 1v1h10V1c0-.5523.4477-1 1-1s1 .4477 1 1v1zM6 18c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm-8-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm-8-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 8c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm0-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm0-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1z"> </path> </svg> </span> ${dateDisplay} </small> </div> <div class="card-text mt-3 mb-1"> <a style="color: #670000;" href="${item.link}">${item.desc}.</a> </div> </div> </div>`;
      });
    });
}

function getListItemPages(id, query, skip) {
  fetch("../js/json/data-e-bike.json")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.error(err);
    })
    .then((data) => {
      const listData = data.tech.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
      let listItem = [];
      if (skip == 0) {
        listItem = listData.slice(0, query);
      } else {
        listItem = listData.slice(query * skip, query * skip + query);
      }
      listItem.forEach((item, index) => {
        const dateDisplay = new Date(`${item.date}`).toLocaleDateString(
          "en-us",
          { year: "numeric", month: "short", day: "numeric" }
        );
        item.desc = item.desc ? item.desc : "Read more";
        document.getElementById(
          id
        ).innerHTML += `<div class="col-lg-4 col-sm-6 mb-3"> <a href="${item.link}"> <img src="${item.img}" style="width:100%; height: 15rem;object-fit:cover;object-position:center center"> </a> <div class="card-body d-flex flex-column p-2"> <a href="${item.link}"> <h4 class="mt-2 mb-0">${item.name}</h4> </a> <div class="card-text mt-1"> <small class="text-muted post-date"> <span class="icon icon-calendar icon-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path fill="#758CA3" fill-rule="evenodd" d="M21 6V5c0-.5523-.4477-1-1-1H4c-.5523 0-1 .4477-1 1v1h18zm0 2H3v13c0 .5523.4477 1 1 1h16c.5523 0 1-.4477 1-1V8zm-2-6h1c1.6569 0 3 1.3431 3 3v16c0 1.6569-1.3431 3-3 3H4c-1.6569 0-3-1.3431-3-3V5c0-1.6569 1.3431-3 3-3h1V1c0-.5523.4477-1 1-1s1 .4477 1 1v1h10V1c0-.5523.4477-1 1-1s1 .4477 1 1v1zM6 18c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm-8-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm-8-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 8c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm0-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm0-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1z"> </path> </svg> </span> ${dateDisplay} </small> </div> <div class="card-text mt-3 mb-1"> <a style="color: #670000;" href="${item.link}">${item.desc}.</a> </div> </div> </div>`;
      });
    });
}

// Add event listener to table
function clickPagination(id, q, s) {
  document.getElementById(id).addEventListener("click", function () {
    const list = document.getElementById("technologyId");
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    let index = document.getElementsByClassName("w3-bar")[0].children.length;
    for (let i = 0; i < index; i++) {
      document.getElementsByClassName("w3-bar")[0].children[i].className =
        "w3-bar-item w3-button w3-hover-black";
    }
    document.getElementById(id).className = "w3-bar-item w3-black w3-button";
    getListItemPages("technologyId", q, s);
  });
}

document.getElementById("page-first").addEventListener("click", function () {
  const list = document.getElementById("technologyId");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  let index = document.getElementsByClassName("w3-bar")[0].children.length;
  for (let i = 0; i < index; i++) {
    document.getElementsByClassName("w3-bar")[0].children[i].className =
      "w3-bar-item w3-button w3-hover-black";
  }
  document.getElementById("page-one").className =
    "w3-bar-item w3-black w3-button";

  getListItemPages("technologyId", 6, 0);
});

document.getElementById("page-end").addEventListener("click", function () {
  const list = document.getElementById("technologyId");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  let index = document.getElementsByClassName("w3-bar")[0].children.length;
  for (let i = 0; i < index; i++) {
    document.getElementsByClassName("w3-bar")[0].children[i].className =
      "w3-bar-item w3-button w3-hover-black";
  }
  document.getElementById("page-ten").className =
    "w3-bar-item w3-black w3-button";
  getListItemPages("technologyId", 6, 4);
});
// show list ebike
technologyEbikeBlog("technologyEbikeId");
// show the first 6 item on list
getListItemPages("technologyId", 6, 0);
// listen click action and show item on view list
clickPagination("page-one", 6, 0);
clickPagination("page-two", 6, 1);
clickPagination("page-three", 6, 2);
clickPagination("page-four", 6, 3);
clickPagination("page-five", 6, 4);
clickPagination("page-six", 6, 4);
clickPagination("page-seven", 6, 4);
clickPagination("page-eight", 6, 4);
clickPagination("page-nine", 6, 4);
clickPagination("page-ten", 6, 4);
