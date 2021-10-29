const slidesContainer = document.getElementsByClassName('slides')[0];
let config = {};

export function firstPage(nikeLogo) {
    let slide = document.createElement('section');
    let logo = document.createElement('img');
    let text = document.createElement('h2');

    logo.src = nikeLogo;
    logo.width = 300;
    logo.height = 380;
    slide.appendChild(logo);

    text.innerHTML = `NIKE MANNEQUINS ${config.category}-[HEADS]`;
    slide.appendChild(text);

    slidesContainer.appendChild(slide);

    // // <section>
    // //     <img src='https://downloadwap.com/thumbs2/wallpapers/p2/2019/abstract/20/6550dcfb13097318.jpg' alt='' width='300px' height='380px'>
    // //     <h2>NIKE MANNEQUINS MEN-[HEADS]</h2>
    // // </section>
};

export function createEmptySection(name) {
    let slide = document.createElement('section');
    slide.className = name;

    slidesContainer.appendChild(slide);

    // // <section>
    // // </section>
    return slide;
};

export function addMannequins(whereToAdd, manniesCollection) {

    for (const man of manniesCollection) {
        let [manniePose, imageSize] = man;

        let mannie = document.createElement('section');
        mannie.className = 'mannie';

        let h1 = document.createElement('h1');
        h1.className = 'mannie-title';
        h1.innerHTML = manniePose;
        mannie.appendChild(h1);

        let img = document.createElement('img');
        img.className = imageSize;
        img.src = `${config.imgRootPath}${manniePose}${config.extension}`;
        mannie.appendChild(img);

        whereToAdd.appendChild(mannie);
    }

    // // <section class='mannie'>
    // //     <h1 class='mannie-title'>AT-1</h1>
    // //     <img class='mannieImg35' src='files/img/AT-1.png'>
    // // </section>
};