function slides() {

    let mannequins = {
        menCol1: [
            ['AT-1', 'mannieImg60'],
            ['AT-10', 'mannieImg60'],
            ['AT-11', 'mannieImg60'],
            ['AT-4', 'mannieImg60'],
            ['AT-8', 'mannieImg60'],
            ['AT-9', 'mannieImg60']
        ],
        menCol2: [
            ['BB-10', 'mannieImg60'],
            ['BB-11', 'mannieImg60'],
            ['BB-12', 'mannieImg60'],
            ['BB-4', 'mannieImg60'],
            ['BB-5', 'mannieImg60'],
            ['BB-6', 'mannieImg60'],
            ['BB-7', 'mannieImg60'],
            ['BB-9', 'mannieImg60'],
            ['BB-Crossover', 'mannieImg60'],
            ['BB-FlyingDunk', 'mannieImg60'],
            ['BB-JumpDefense', 'mannieImg60'],
            ['BB-Layup', 'mannieImg60'],
            ['BB-RunDribble', 'mannieImg60'],
            ['BB-Wheelchair', 'mannieImg60']
        ],
        menCol3: [
            ['GF-1', 'mannieImg60'],
            ['GF-2', 'mannieImg60'],
            ['GF-3', 'mannieImg60'],
            ['GF-5', 'mannieImg60'],
            ['GF-6', 'mannieImg60'],
            ['GF-7', 'mannieImg60'],
            ['GF-Run', 'mannieImg60']
        ],
        menCol4: [
            ['MA-1', 'mannieImg60'],
            ['MA-2', 'mannieImg60'],
            ['MA-3', 'mannieImg60'],
            ['MA-4', 'mannieImg60'],
            ['MA-5', 'mannieImg60'],
            ['ML-1', 'mannieImg60'],
            ['ML-2', 'mannieImg60'],
            ['ML-5', 'mannieImg60']
        ],
        menCol5: [
            ['M-A-Pose', 'mannieImg60'],
            ['M-Relaxed', 'mannieImg60'],
            ['M-T-Pose', 'mannieImg60']
        ],
        menCol6: [
            ['MAR-1', 'mannieImg60'],
            ['MAR-1-Mirrored', 'mannieImg60'],
            ['MAR-3', 'mannieImg60']
        ],
        menCol7: [
            ['MB-1', 'mannieImg60'],
            ['MB-2', 'mannieImg60'],
            ['MB-2-3rd', 'mannieImg60'],
            ['MB-PRO-B1', 'mannieImg60'],
            ['MG-2', 'mannieImg60'],
            ['MLS-0', 'mannieImg60']
        ],
        menCol8: [
            ['MPS-Frank', 'mannieImg60'],
            ['MPS-Mike', 'mannieImg60'],
            ['MPS-MikeV2', 'mannieImg60'],
            ['MPS-R1', 'mannieImg60']
        ],
        menCol9: [
            ['MT-Y01', 'mannieImg60'],
            ['MY-0', 'mannieImg60'],
            ['PRO-2', 'mannieImg60'],
            ['SBM-2', 'mannieImg60']
        ],
        'men-legforms': [
            ['GF-LegUp', 'mannieImg60'],
            ['GF-P3', 'mannieImg60'],
            ['MA-P1', 'mannieImg60'],
            ['MF-ANK', 'mannieImg60'],
            ['MF-CRW', 'mannieImg60'],
            ['MF-OTC', 'mannieImg60'],
            ['MF-OTK', 'mannieImg60'],
            ['MRP-2', 'mannieImg60'],
            ['MS-1', 'mannieImg60']
        ]
    };



    let config = {
        'nikeLogo': 'https://downloadwap.com/thumbs2/wallpapers/p2/2019/abstract/20/6550dcfb13097318.jpg',
        'extension': '.png',
        'imgRootPath': 'files/img/M/',
        'category': 'MEN'
    };

    const slidesContainer = document.getElementsByClassName('slides')[0];

    function firstPage(nikeLogo) {
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

    function createEmptySection(name) {
        let slide = document.createElement('section');
        slide.className = name;

        slidesContainer.appendChild(slide);

        // // <section>
        // // </section>
        return slide;
    };

    function addMannequins(whereToAdd, manniesCollection) {

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

    firstPage(config.nikeLogo);

    for (const container in mannequins) {
        let emptySection = createEmptySection(container);
        addMannequins(emptySection, mannequins[container]);
    }
};