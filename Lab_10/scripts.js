function imageclick(clickedHero) {
    var heroes = document.querySelectorAll(".heroes > .hero:not(#"+clickedHero.id+")");
    heroes.forEach((hero) => {
        hero.style.width = "150px";
        hero.style.height = "150px";
        hero.style.filter = "blur(3px)";
        hero.style.cursor = "pointer";
    });
    clickedHero.style.width = "250px";
    clickedHero.style.height = "250px";
    clickedHero.style.filter = "blur(0px)";
    clickedHero.style.cursor = "default";

    var offset = document.getElementById("desc");

    switch(clickedHero.id) {
        case "pudge":
            offset.style.transform = "translate3d(0, 0, 0)"
            break;
        case "io":
            offset.style.transform = "translate3d(-100vw, 0, 0)"
            break;
        case "broodmother":
            offset.style.transform = "translate3d(-200vw, 0, 0)"
            break;
    }
}