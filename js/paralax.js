const blob = document.getElementById("blob");

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
    left : `${clientX}px`,
    top : `${clientY}px`
    }, {duration : 3000, fill: "forwards"});
}

document.body.onmousedown = event => {
    blob.classList.toggle('blob_click');
}
document.body.onmouseup = event => {
    blob.classList.toggle('blob_click');
}

    //Тут я немного сначала натупил и это можно было сделать(и сделано в данный момент) легче - замена всему что снизу с 57 строки в css
    // document.getElementById('dot1').onmouseover = function () {
    //     $('.dot1_modal').toggleClass('open');
    // }
    // document.getElementById('dot1').onmouseout = function () {
    //     $('.dot1_modal').toggleClass('open');
    // }
    // document.getElementById('dot2').onmouseover = function () {
    //     $('.dot2_modal').toggleClass('open');
    // }
    // document.getElementById('dot2').onmouseout = function () {
    //     $('.dot2_modal').toggleClass('open');
    // }
    // document.getElementById('dot3').onmouseover = function () {
    //     $('.dot3_modal').toggleClass('open');
    // }
    // document.getElementById('dot3').onmouseout = function () {
    //     $('.dot3_modal').toggleClass('open');
    // }
    // document.getElementById('dot4').onmouseover = function () {
    //     $('.dot4_modal').toggleClass('open');
    // }
    // document.getElementById('dot4').onmouseout = function () {
    //     $('.dot4_modal').toggleClass('open');
    // }
// });