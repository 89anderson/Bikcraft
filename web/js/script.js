if(window.SimpleSlide) {

    new SimpleSlide({
        slide: 'quote', // nome do atributo data-slide="principal"
        time: 5000, // tempo de transição dos slides
        pauseOnHover: true, // pausa a transição automática 
    });

    new SimpleSlide({
        slide: 'portfolio',
        time: 5000,
        nav: true,
        pauseOnHover: true,
    });
}

if(window.SimpleAnime) {

    new SimpleAnime();

}