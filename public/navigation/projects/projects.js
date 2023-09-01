function changeImage(imageSrc) {
    let iframe = document.getElementById("displayFrame");
    iframe.width = iframe.contentWindow.document.body.scrollWidth;
    iframe.height = iframe.contentWindow.document.body.scrollHeight;
    iframe.src = imageSrc;
}