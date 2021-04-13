/*使图片在点击时进行切换。

首先，找到另一张你想要在你的页面上展示的图片，且尺寸与第一张图片尽可能相同。
将这张图片储存在你的images目录下。
将图片重命名为'firefox2.png'（去掉引号）。
打开 main.js 文件，输入下面的 JavaScript 代码 */

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}