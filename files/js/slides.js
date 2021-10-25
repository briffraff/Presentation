function slides() {

    let mannequins = {
        'first': [
            ['AT-1', 'mannieImg'],
            ['AT-4', 'mannieImg'],
            ['AT-8', 'mannieImg'],
            ['AT-9', 'mannieImg'],
            ['AT-10', 'mannieImg'],
            ['AT-11', 'mannieImg2'],
        ],
        'second': [
            ['MA-1', 'mannieImg'],
            ['MA-2', 'mannieImg'],
            ['MA-3', 'mannieImg'],
            ['MA-4', 'mannieImg'],
            ['MA-5', 'mannieImg'],
            ['MA-P1', 'mannieImg'],
        ],
        'three': [
            ['BB-4', 'mannieImg'],
            ['BB-5', 'mannieImg2'],
            ['BB-6', 'mannieImg3'],
            ['BB-7', 'mannieImg'],
            ['BB-9', 'mannieImg'],
            ['BB-11', 'mannieImg'],
            ['BB-12', 'mannieImg'],
        ],
        'four': [
            ['GF-1', 'mannieImg4'],
            ['GF-2', 'mannieImg3'],
            ['GF-3', 'mannieImg'],
            ['GF-5', 'mannieImg'],
            ['GF-6', 'mannieImg2'],
            ['GF-7', 'mannieImg3'],
            ['GF-LegUp', 'mannieImg'],
        ]
    };

    let config = {
        "nikeLogo": "https://downloadwap.com/thumbs2/wallpapers/p2/2019/abstract/20/6550dcfb13097318.jpg",
        "extension": ".png",
        "imgRootPath": "files/img/",
    };

    const slidesContainer = document.getElementsByClassName("slides")[0];

    function firstPage(nikeLogo) {
        let slide = document.createElement("section");
        let logo = document.createElement("img");
        let text = document.createElement("h2");

        logo.src = nikeLogo;
        logo.width = 300;
        logo.height = 380;
        slide.appendChild(logo);

        text.innerHTML = 'NIKE MANNEQUINS MEN-[HEADS]';
        slide.appendChild(text);

        slidesContainer.appendChild(slide);

        // // <section>
        // //     <img src="https://downloadwap.com/thumbs2/wallpapers/p2/2019/abstract/20/6550dcfb13097318.jpg" alt="" width="300px" height="380px">
        // //     <h2>NIKE MANNEQUINS MEN-[HEADS]</h2>
        // // </section>
    }

    function createEmptySection(name) {
        let slide = document.createElement("section");
        slide.className = name;

        slidesContainer.appendChild(slide);

        // // <section>
        // // </section>
        return slide;
    }

    function addMannequins(whereToAdd, manniesCollection) {

        for (const man of manniesCollection) {
            [manniePose, imageSize] = man;

            let mannie = document.createElement("section");
            mannie.className = "mannie";

            let h1 = document.createElement("h1");
            h1.className = "mannie-title";
            h1.innerHTML = manniePose;
            mannie.appendChild(h1);

            let img = document.createElement("img");
            img.className = imageSize;
            img.src = `${config.imgRootPath}${manniePose}${config.extension}`;
            mannie.appendChild(img);

            whereToAdd.appendChild(mannie);
        }

        // // <section class="mannie">
        // //     <h1 class="mannie-title">AT-1</h1>
        // //     <img class="mannieImg" src="files/img/AT-1.png">
        // // </section>
    }


    firstPage(config.nikeLogo);

    for (const container in mannequins) {
        let emptySection = createEmptySection(container);
        addMannequins(emptySection, mannequins[container]);
    }
}

