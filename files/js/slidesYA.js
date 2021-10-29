function slides() {

    let mannequins = {
        yaCol1: [
            ['LPS-YAG15', 'mannieImg55'],
            ['YAG-1', 'mannieImg55'],
            ['YAG-10', 'mannieImg55'],
            ['YAG-12', 'mannieImg55'],
            ['YAG-2', 'mannieImg55'],
            ['YAG-6', 'mannieImg55'],
            ['YAG-A-Pose', 'mannieImg55'],
            ['YAG-B1', 'mannieImg55'],
            ['YAG-G2', 'mannieImg55']
        ],
        yaCol2: [
            ['FPS-YAB19', 'mannieImg55'],
            ['YAB-1', 'mannieImg55'],
            ['YAB-12', 'mannieImg55'],
            ['YAB-14', 'mannieImg55'],
            ['YAB-15', 'mannieImg55'],
            ['YAB-2', 'mannieImg55'],
            ['YAB-8', 'mannieImg55'],
            ['YAB-A-Pose', 'mannieImg55'],
            ['YAB-B1', 'mannieImg55'],
            ['YAB-Clo', 'mannieImg55'],
            ['YAB-SCh', 'mannieImg55']
        ],
        'ya-legforms': [['YAB-S1', 'mannieImg55']]
    };

    let config = {
        'nikeLogo': 'https://downloadwap.com/thumbs2/wallpapers/p2/2019/abstract/20/6550dcfb13097318.jpg',
        'extension': '.png',
        'imgRootPath': 'files/img/YA/',
        'category': 'YA'
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


