

for (var x = 0; x < images.length; x++) {
    images[x].setAttribute("src", "https://d2w9rnfcy7mm78.cloudfront.net/11385203/original_ab1e523a1b58600b9220e9e5f73802b1.jpg?1617116812?bc=0");
  };

  for (i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "lime";
}

var links = document.getElementsByTagName("a");
for (var x = 0; x < links.length; x++) {
var size = Math.floor(Math.random() * 20) + 16;
links[x].style.fontSize = size + "px";
}

var divs = document.getElementsByTagName("div");
for (var x = 0; x < divs.length; x++) {
divs[x].style.textTransform = "uppercase";
};


var divs = document.getElementsByTagName("div");
for (var x = 0; x < divs.length; x++) {
divs[x].style.textShadow = "2px 2px #9ACD32";
};