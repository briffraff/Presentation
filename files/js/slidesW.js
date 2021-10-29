function slides() {

    let mannequins = {
        womenCol1: [
            ['W-A-FIT', 'mannieImg60'],
            ['W-A-FIT2', 'mannieImg60'],
            ['WA-1', 'mannieImg60'],
            ['WA-2', 'mannieImg60'],
            ['WA-3', 'mannieImg60'],
            ['WA-4', 'mannieImg60']
        ],
        womenCol2: [
            ['W-A-Pose', 'mannieImg60'],
            ['W-A-PoseNaturalGait', 'mannieImg60']
        ],
        womenCol3: [
            ['WAR-1', 'mannieImg60'],
            ['WAR-2', 'mannieImg60'],
            ['WAR-2-Mirrored', 'mannieImg60'],
            ['WAR-3', 'mannieImg60']
        ],
        womenCol4: [
            ['W-HP', 'mannieImg60'],
            ['W-KB', 'mannieImg60'],
            ['W-Relaxed', 'mannieImg60'],
            ['W-Relaxed2', 'mannieImg60'],
            ['W-RO', 'mannieImg60'],
            ['WA-Relaxed', 'mannieImg60'],
            ['WB-1', 'mannieImg60'],
            ['WB-2', 'mannieImg60'],
            ['WC-1', 'mannieImg60']
        ],
        womenCol5: [
            ['EMA-0', 'mannieImg60'],
            ['WL-2', 'mannieImg60'],
            ['WL-2-Mirrored', 'mannieImg60'],
            ['WL-3', 'mannieImg60'],
            ['WL-4', 'mannieImg60'],
            ['WL-5', 'mannieImg60']
        ],
        womenCol6: [
            ['WPS-Jane', 'mannieImg60'],
            ['WPS-Jane-P', 'mannieImg60'],
            ['WPS-Jane-P2', 'mannieImg60'],
            ['WPS-Monica', 'mannieImg60']
        ],
        womenCol7: [
            ['WT-10', 'mannieImg60'],
            ['WT-1B', 'mannieImg60'],
            ['WT-2A', 'mannieImg60'],
            ['WT-2B', 'mannieImg60'],
            ['WT-3A', 'mannieImg60'],
            ['WT-5A', 'mannieImg60'],
            ['WT-6', 'mannieImg60'],
            ['WT-7', 'mannieImg60'],
            ['WT-9', 'mannieImg60'],
            ['WT-B5', 'mannieImg60'],
            ['WT-H', 'mannieImg60'],
            ['WT-Y01', 'mannieImg60'],
            ['WT-YogaCamel2', 'mannieImg60']
        ],
        'women-legforms': [
            ['WP-1', 'mannieImg60'],
            ['WP-R', 'mannieImg60'],
            ['WP-R3', 'mannieImg60'],
            ['WS-1', 'mannieImg60'],
            ['WT-P2', 'mannieImg60']
        ]
    };

    let config = {
        'nikeLogo': 'https://downloadwap.com/thumbs2/wallpapers/p2/2019/abstract/20/6550dcfb13097318.jpg',
        'extension': '.png',
        'imgRootPath': 'files/img/W/',
        'category': 'WOMEN'
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