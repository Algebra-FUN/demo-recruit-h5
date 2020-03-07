var page = 1;

$(() => {
    loadBGs()
    $('#cover').click(() => {
        progressControl()
    })
})

function loadBGs() {
    for (let i = 1; i < 7; i++) {
        let url = `url(./assets/bg/${i}.jpg)`;
        let display = i == 1 ? 'block' : 'none';
        $(`#page-${i}`).css({ 'background-image': url, 'z-index': -i, 'display': display })
    }
}

function progressControl() {
    if (page == 6) {
        return;
    }
    $(`#page-${page}`).fadeOut('slow');
    page++;
    $(`#page-${page}`).css('display', 'block');
    switch (page) {
        case 2:
            require(['page/2'])
            break;
        case 4:
            loadPage4();
            break;
        case 5:
            loadPage5();
            break;
        case 6:
            require(['page/6'])
            break;
    }
}

function initEnts(parent, tag, resId) {
    for (let i = 1; i < 7; i++) {
        let swing = i % 2 == 0 ? '' : '-reverse'
        $(parent).append(`<div class='free-ent Monster-ent' id=${tag}-${i}></div>`)
        $(`#${tag}-${i}`).append(`<img class=swing${swing} src=assets/img/${resId}/${tag}-${i}.png>`);
    }
}

function loadPage4() {
    initEnts('#Monster-4-block', 'ad', 4);
    for (let i = 1; i < 7; i++) {
        let w = 36 * (i > 3 ? -1 : 1) * ((i - 2) % 3 == 0 ? 1 : 0.8);
        let h = ((i - 1) % 3 - 1) * 18;
        $(`#ad-${i}`).css('transform', `translate(${w}vw,${h - 4}vw)`);
    }
}

function loadPage5() {
    var deg = 0;
    const v = 1;

    const ovalMotion = () => {
        if (page == 6) {
            return;
        }
        requestAnimationFrame(() => {
            for (let i = 1; i < 7; i++) {
                let a = (deg + 60 * i) * Math.PI / 180
                let y = Math.sin(a);
                let x = Math.cos(a);
                let transform = `translate(${36 * x}vw,${12 * y}vw) scale(${1 + y * 0.3})`;
                $(`#pl-${i}`).css({ 'transform': transform, 'z-index': y > 0 ? 1 : -1 })
            }
            deg += v;
            ovalMotion();
        })
    }

    initEnts('#Monster-5-block', 'pl', 5);
    ovalMotion();
}