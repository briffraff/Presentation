function slides() {

    let mannequins = {
        menCol1: [
            ['AT-1', 'mannieImg30'],
            ['AT-4', 'mannieImg30'],
            ['AT-8', 'mannieImg30'],
            ['AT-9', 'mannieImg30'],
            ['AT-10', 'mannieImg30'],
            ['AT-11', 'mannieImg40']
        ],
        menCol2: [
            ['BB-4', 'mannieImg35'],
            ['BB-5', 'mannieImg40'],
            ['BB-6', 'mannieImg50'],
            ['BB-7', 'mannieImg30'],
            ['BB-9', 'mannieImg30'],
            ['BB-12', 'mannieImg30'],
            ['BB-Crossover', 'mannieImg40'],
            ['BB-FlyingDunk', 'mannieImg35'],
            ['BB-JumpDefense', 'mannieImg35'],
            ['BB-Layup', 'mannieImg30'],
            ['BB-RunDribble', 'mannieImg40'],
            ['BB-Wheelchair', 'mannieImg35']
        ],
        menCol3: [
            ['GF-1', 'mannieImg55'],
            ['GF-2', 'mannieImg50'],
            ['GF-3', 'mannieImg35'],
            ['GF-5', 'mannieImg35'],
            ['GF-6', 'mannieImg40'],
            ['GF-7', 'mannieImg50'],
            ['GF-Run', 'mannieImg30']
        ],
        menCol4: [
            ['MA-1', 'mannieImg30'],
            ['MA-2', 'mannieImg35'],
            ['MA-3', 'mannieImg35'],
            ['MA-4', 'mannieImg35'],
            ['MA-5', 'mannieImg30'],
            ['ML-1', 'mannieImg30'],
            ['ML-2', 'mannieImg30'],
            ['ML-5', 'mannieImg30']
        ],
        menCol5: [
            ['M-A-Pose', 'mannieImg35'],
            ['M-T-Pose', 'mannieImg35'],
            ['M-Relaxed', 'mannieImg35']
        ],
        menCol6: [
            ['MAR-1', 'mannieImg25'],
            ['MAR-1-Mirrored', 'mannieImg25'],
            ['MAR-3', 'mannieImg25']
        ],
        menCol7: [
            ['MB-1', 'mannieImg35'],
            ['MB-2', 'mannieImg35'],
            ['MB-2-3rd', 'mannieImg35'],
            ['MB-PRO-B1', 'mannieImg35'],
            ['MLS-0', 'mannieImg35']
        ],
        menCol8: [
            ['MPS-Frank', 'mannieImg35'],
            ['MPS-Mike', 'mannieImg35'],
            ['MPS-MikeV2', 'mannieImg35'],
            ['MPS-R1', 'mannieImg35']
        ],
        menCol9: [
            ['MG-2', 'mannieImg30'],
            ['MT-Y01', 'mannieImg35'],
            ['MY-0', 'mannieImg35'],
            ['PRO-2', 'mannieImg35'],
            ['SBM-2', 'mannieImg25']
        ],
        'men-legforms': [
            ['GF-LegUp', 'mannieImg35'],
            ['GF-P3', 'mannieImg35'],
            ['MA-P1', 'mannieImg35'],
            ['MRP-2', 'mannieImg35'],
            ['MS-1', 'mannieImg35'],
            ['MF-ANK', 'mannieImg25'],
            ['MF-CRW', 'mannieImg25'],
            ['MF-OTC', 'mannieImg25'],
            ['MF-OTK', 'mannieImg30']
        ]
    };

    let config = {
        'nikeLogo': 'https://downloadwap.com/thumbs2/wallpapers/p2/2019/abstract/20/6550dcfb13097318.jpg',
        'extension': '.png',
        'imgRootPath': 'files/img/',
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

        text.innerHTML = 'NIKE MANNEQUINS MEN-[HEADS]';
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