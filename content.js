let fileName = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg"
]

let imgs = document.getElementsByTagName('img');

for (imgsEle of imgs) {
    let randomNum = Math.floor(Math.random() * fileName.length)
    let file = 'images/' + fileName[randomNum]
    let url = chrome.runtime.getURL(file);
    imgsEle.src = url;
}