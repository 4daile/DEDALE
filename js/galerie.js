console.log("read galery");

const $blocs = document.querySelectorAll('.bloc');
$blocs.forEach( ($bloc) => {
    $bloc.addEventListener('click', () => {
        const title = $bloc.querySelector('.bloc_text').textContent;
        const url = $bloc.dataset.url;
        window.parent.postMessage(title+"___"+url, window.location.origin);
    });
});