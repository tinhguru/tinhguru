const arrOne = [
  {
    img: "https://www.fetchpetcare.com/wp-content/uploads/2023/07/Untitled-design-4-1024x536.jpg",
  },
  {
    img: "https://www.fetchpetcare.com/wp-content/uploads/2023/07/Untitled-design-2-1-1024x536.jpg",
  },
  {
    img: "https://www.fetchpetcare.com/wp-content/uploads/2023/07/Untitled-design-3-1024x536.jpg",
  },
  {
    img: "https://www.fetchpetcare.com/wp-content/uploads/2023/07/Tampa-Bay-Hero-1024x576.jpg",
  },
  {
    img: "https://www.fetchpetcare.com/wp-content/uploads/2023/07/Richmond-West-Hero-1024x576.jpg",
  },
  {
    img: "https://www.fetchpetcare.com/wp-content/uploads/2023/07/Metro-Detroit-Hero-1024x576.jpg",
  },
  {
    img: "https://www.fetchpetcare.com/wp-content/uploads/2023/07/Untitled-design-2-1024x536.jpg",
  },
  {
    img: "https://www.fetchpetcare.com/wp-content/uploads/2023/07/Untitled-design-1-1024x536.jpg",
  },
  {
    img: "https://www.fetchpetcare.com/wp-content/uploads/2023/07/Untitled-design-1024x536.jpg",
  },
  {
    img: "https://www.fetchpetcare.com/wp-content/uploads/2023/07/Hero_North–West–South-Miami-1024x576.jpg",
  },
];
const arrTwo = [
  {
    name: "Dog Walking in Madison South",
    link: "https://www.fetchpetcare.com/blog/dog-walking-in-madison-south/",
    date: "",
    desc: "At Fetch! Pet Care, we pride ourselves on being th… Five Points, Monona, Waunakee, Westport, or the…",
  },
  {
    name: "Dog Walking in Troy and Shelby Township",
    link: "https://www.fetchpetcare.com/blog/dog-walking-in-troy-and-shelby-township/",
    date: "",
    desc: "Here at Fetch! Pet Care of Troy and Shelby Townshi…s, Lake Orion, Bloomfield, Birmingham, and more….",
  },
  {
    name: "Dog Walking in Orange County",
    link: "https://www.fetchpetcare.com/blog/dog-walking-in-orange-county/",
    date: "",
    desc: "Here at Fetch! Pet Care of OC Central, we are prou… is dedicated to ensuring that each dog receives…",
  },
  {
    name: "Tips for Choosing the Right Pet Sitter in Tampa Bay",
    link: "https://www.fetchpetcare.com/blog/tips-for-choosing-the-right-pet-sitter-in-tampa-bay/",
    date: "",
    desc: "When it comes to our furry family members, we want…rticle from Fetch! Pet Care, we will provide you…",
  },
  {
    name: "Tips for Choosing the Right Pet Sitter in Richmond West",
    link: "https://www.fetchpetcare.com/blog/tips-for-choosing-the-right-pet-sitter-in-richmond-west/",
    date: "",
    desc: "When it comes to finding the perfect pet sitter in…et Care is here to guide you through the process…",
  },
  {
    name: "Tips for Choosing the Right Pet Sitter in Metro Detroit",
    link: "https://www.fetchpetcare.com/blog/tips-for-choosing-the-right-pet-sitter-in-metro-detroit/",
    date: "",
    desc: "When it comes to finding a reliable and trustworth…ice in the area, we’ll explore essential tips to…",
  },
  {
    name: "Puppy Sitting in West Santa Clara County, CA",
    link: "https://www.fetchpetcare.com/blog/puppy-sitting-in-west-santa-clara-county-ca/",
    date: "",
    desc: "At Fetch! Pet Care, we understand that leaving you…roviding the best care possible for your beloved…",
  },
  {
    name: "Puppy Sitting in Mile High, CO",
    link: "https://www.fetchpetcare.com/blog/puppy-sitting-in-mile-high-co/",
    date: "",
    desc: "If you are a pet parent in Mile High, CO, and need…ith our in-home puppy-sitting services available…",
  },
  {
    name: "Pet-Sitting in Katy, TX ",
    link: "https://www.fetchpetcare.com/blog/pet-sitting-in-katy-tx/",
    date: "",
    desc: "Are you in need of reliable and trustworthy pet-si…eas such as Cypress, Fulshear, Cinco Ranch, West…",
  },
  {
    name: "Dog Walking in North–West–South Miami",
    link: "https://www.fetchpetcare.com/blog/dog-walking-in-north-west-south-miami/",
    date: "",
    desc: "For pet owners in North–West–South Miami (NWS Miam…promoting a healthy lifestyle. In this blog from…",
  },
];
function A() {
  arrOne.forEach((item, index) => {
    const desc = item.img;
    arrTwo[index].img = desc;
  });
  console.log(JSON.stringify(arrTwo));
}
function getDataElement() {
  let dataList = [];
  const nameArr = document.getElementsByClassName("fl-post-title");
  for (var i = 0; i < nameArr.length; i++) {
    var name = nameArr[i].children[0].attributes.title.value;
    dataList.push({ name: name });
  }
  const imgArr = document.getElementsByClassName("fl-post-image");
  for (var i = 0; i < imgArr.length; i++) {
    var img = imgArr[i].children[0].children[0].attributes.src.value;
    dataList.push({ img: img });
  }
  const descArr = document.getElementsByClassName("fl-post-excerpt");
  for (var i = 0; i < descArr.length; i++) {
    var desc = descArr[i].children[0].innerText;
    dataList.push({ desc: desc });
  }
  const linkArr = document.getElementsByClassName("fl-post-title");
  for (var i = 0; i < linkArr.length; i++) {
    var link = linkArr[i].children[0].attributes.href.value;
    dataList.push({ link: link });
  }
  console.log(dataList);
}
getDataElement();
