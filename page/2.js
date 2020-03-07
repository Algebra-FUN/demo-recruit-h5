define(() => {
    const from = 27;
    const d = 8;

    for (let i = 0; i < 7; i++) {
        $('#page-2').append(`<div class='free-ent' id=line-${i}></div>`);
        $(`#line-${i}`).css({ 'top': `${from + i * d}vh`, 'display': 'none' });
        $(`#line-${i}`).delay(350 + 400 * i).fadeIn(800);
        let dotType = i % 4 == 0 ? 1 : 0;
        $(`#line-${i}`).append(`<img class=line src=assets/img/2/dot-${dotType}.png>`);
        $(`#line-${i}`).append(`<img class=line src=assets/img/2/text-${i}.png>`);
    }
});