var cards = document.querySelectorAll('.popup-cards button');
var dim = document.querySelector('#dim');
var big_card = document.querySelector("#big-card");

cards.forEach(card => {
    card.onclick = () => {
        let title = card.querySelector(".card-title").cloneNode(true);
        let desc = card.querySelector(".card-text").cloneNode(true);
        let img_src = card.querySelector("img").getAttribute("src");
        let linkedin = card.querySelector(".linkedin").firstChild;
        let github = card.querySelector(".github").firstChild;
        dim.classList.remove("hidden");
        big_card.classList.remove("hidden");
        big_card.querySelector("img").setAttribute("src", img_src);
        big_card.querySelector(".card-title").replaceWith(title);
        big_card.querySelector(".card-title").classList.add("text-center", "text-lg-start");
        big_card.querySelector(".card-text").replaceWith(desc);
        big_card.querySelector(".card-text").classList.remove("hidden");

        if (linkedin != null) {
            linkedin = linkedin.nodeValue;
            let targets = big_card.querySelectorAll(".linkedin");
            targets.forEach(target => {
                target.setAttribute("href", linkedin);
                target.classList.remove("hidden");
            });
        } else {
            let targets = big_card.querySelectorAll(".linkedin");
            targets.forEach(target => {
                target.classList.add("hidden");
            });
        }

        if (github != null) {
            github = github.nodeValue;
            let targets = big_card.querySelectorAll(".github");
            targets.forEach(target => {
                target.setAttribute("href", github);
                target.classList.remove("hidden");
            });
        } else {
            let targets = big_card.querySelectorAll(".github");
            targets.forEach(target => {
                target.classList.add("hidden");
            });
        }
    };
});

dim.onclick = () => {
    dim.classList.add("hidden");
    big_card.classList.add("hidden");
};