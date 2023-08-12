const arrOne = [{"name":"Private Street Food Tour by Motorbike/Car with Local Students"},
{"name":"Little Havana Food and Walking Tour in Miami"},
{"name":"Grand Circle Island and Haleiwa 9 Hour Tour"},
{"name":"Hoi An"},
{"name":"New York State Top 05 Attractions You Will Absolutely Love"},
{"name":"Top 13 Most Famous Places in the USA"},
{"name":"6 Places to Be Outside in the USA This Winter"}];
const arrTwo = [
  {
      "name": "Dog Walking in Madison South",
      "date": "",
      "desc": "There’s no better way to get into the swing of Saigon than riding a motorbike. Enjoy the immediacy of scooter travel without the self-driving risks on this private guided foodie adventure.",
      "img": "../assets/img/gallery/caption.jpg"
  },
  {
      "name": "Dog Walking in Troy and Shelby Township",
      "date": "",
      "desc": "Taste your way through Miami’s Little Havana neighborhood on a food walking tour exploring the vibrant and historic neighborhood.",
      "img": "../assets/img/gallery/caption-miami.jpg"
  },
  {
      "name": "Dog Walking in Orange County",
      "date": "",
      "desc": "Ideal for first-time visitors, or those with limited time, this full-day tour takes you all around Oahu, making sure that you don't miss a thing.",
      "img": "../assets/img/gallery/caption-driftwood-beach.jpg"
  },
  {
      "name": "Tips for Choosing the Right Pet Sitter in Tampa Bay",
      "date": "",
      "desc": "This city on the central Vietnamese coast is a well-preserved example of the important Southeast Asian trading port it was from the 15th-19th centuries",
      "img": "../assets/img/gallery/caption-hoi-an.jpg"
  },
  {
      "name": "Tips for Choosing the Right Pet Sitter in Richmond West",
      "date": "",
      "desc": "Times Square, Statue of Liberty, Niagara Falls, Metropolitan Museum of Art, Central Park,...",
      "img": "../assets/img/gallery/20170627124008_statue-of-liberty.webp"
  },
  {
      "name": "Tips for Choosing the Right Pet Sitter in Metro Detroit",
      "date": "",
      "desc": "The most iconic places in the USA to visit in your lifetime!...",
      "img": "../assets/img/gallery/20191109114454_times-square-ny.jpg"
  },
  {
      "name": "Puppy Sitting in West Santa Clara County, CA",
      "date": "",
      "desc": "California, Florida, Hawaii, Arizona, U.S. Virgin Islands, Texas....",
      "img": "../assets/img/gallery/palm-springs-canyon.jpg"
  },
  {
      "name": "Puppy Sitting in Mile High, CO",
      "link": "https: //www.fetchpetcare.com/blog/puppy-sitting-in-mile-high-co/",
      "date": "",
      "desc": "If you are a pet parent in Mile High, CO, and need…ith our in-home puppy-sitting services available…"
  },
  {
      "name": "Pet-Sitting in Katy, TX ",
      "link": "https://www.fetchpetcare.com/blog/pet-sitting-in-katy-tx/",
      "date": "",
      "desc": "Are you in need of reliable and trustworthy pet-si…eas such as Cypress, Fulshear, Cinco Ranch, West…"
  },
  {
      "name": "Dog Walking in North–West–South Miami",
      "link": "https://www.fetchpetcare.com/blog/dog-walking-in-north-west-south-miami/",
      "date": "",
      "desc": "For pet owners in North–West–South Miami (NWS Miam…promoting a healthy lifestyle. In this blog from…"
  }
]
function A() {
  arrOne.forEach((item, index) => {
    const desc = item.name;
    arrTwo[index].name = desc;
  });
  console.log(JSON.stringify(arrTwo));
}
A()
// function getDataElement() {
//   let dataList = [];
//   const nameArr = document.getElementsByClassName("fl-post-title");
//   for (var i = 0; i < nameArr.length; i++) {
//     var name = nameArr[i].children[0].attributes.title.value;
//     dataList.push({ name: name });
//   }
//   const imgArr = document.getElementsByClassName("fl-post-image");
//   for (var i = 0; i < imgArr.length; i++) {
//     var img = imgArr[i].children[0].children[0].attributes.src.value;
//     dataList.push({ img: img });
//   }
//   const descArr = document.getElementsByClassName("fl-post-excerpt");
//   for (var i = 0; i < descArr.length; i++) {
//     var desc = descArr[i].children[0].innerText;
//     dataList.push({ desc: desc });
//   }
//   const linkArr = document.getElementsByClassName("fl-post-title");
//   for (var i = 0; i < linkArr.length; i++) {
//     var link = linkArr[i].children[0].attributes.href.value;
//     dataList.push({ link: link });
//   }
//   console.log(dataList);
// }
// getDataElement();
