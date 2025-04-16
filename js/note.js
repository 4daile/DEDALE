
/* === BIG VIEWER === */
console.log("ready note");


const bigViewer = document.getElementById('bigviewer'); 
const bigviewerImg = bigViewer.querySelector('img');
const bigviewerCaption = bigViewer.querySelector('figcaption');
//
const $images = document.querySelectorAll('.textimages'); 
$images.forEach(($image) => {
    $image.addEventListener('click', () => {
        console.log("click image");
        const imgurl = $image.src;
        const imgcaption = $image.alt;
        //
        console.log(imgurl);
        console.log(imgcaption);

        bigviewerImg.src = imgurl;
        bigviewerCaption.textContent = imgcaption;
        bigViewer.classList.remove('hidden');
    });
});

bigViewer.addEventListener('click', () => {
    bigViewer.classList.add('hidden');
})

/* === IMAGES LIEES AU TEXTE === */
const $anchors = document.querySelectorAll(".img-anchor");
console.log($anchors);
$anchors.forEach($anchor => {
    const rect = $anchor.offsetTop;
    console.log(rect);

    const imgId = $anchor.dataset.img;
    console.log(imgId);

    const $image = document.getElementById(imgId);
    console.log($image);
    $image.style.top = rect + "px";
});