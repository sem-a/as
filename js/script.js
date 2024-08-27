const darkModeIsActive = () => {
    const flag = document.querySelector("#darkmodeButton");
    const body = document.querySelector("body");
    const text = document.querySelector(".darkmode-text");

    if (flag.checked) {
        body.classList.remove("darkmode");
        text.innerHTML = "Нужна темная тема?";
    } else {
        body.classList.add("darkmode");
        text.innerHTML = "Нужна светлая тема?";
    }
};

const createPortfolioCard = (data) => {
    const cardsContainer = document.querySelector('.portfolio__cards');

    const portfolioCard = document.createElement('div');
    portfolioCard.className = 'portfolio-card';

    const cardContainer = document.createElement('a');
    cardContainer.className = 'card-container';
    cardContainer.href = data.link;
    cardContainer.target = '_blank';

    const cardTitle = document.createElement('div');
    cardTitle.className = 'card-title';

    const cardLogo = document.createElement('div');
    cardLogo.className = 'card-logo';
    const logoImg = document.createElement('img');
    logoImg.src = data.imgPath;
    cardLogo.appendChild(logoImg);

    const cardTitleText = document.createElement('h3');
    cardTitleText.textContent = data.title;
    cardTitle.appendChild(cardLogo);
    cardTitle.appendChild(cardTitleText);

    const cardDescription = document.createElement('div');
    cardDescription.className = 'card-description';
    const descriptionText = document.createElement('p');
    descriptionText.className = 'text';
    descriptionText.textContent = data.description;
    cardDescription.appendChild(descriptionText);

    const cardLink = document.createElement('div');
    cardLink.className = 'card-link';
    const linkText = document.createElement('p');
    linkText.className = 'text';
    linkText.textContent = 'перейти';
    const arrowDiv = document.createElement('div');
    arrowDiv.className = 'arrow';
    cardLink.appendChild(linkText);
    cardLink.appendChild(arrowDiv);

    // Добавление элементов в контейнер
    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardDescription);
    cardContainer.appendChild(cardLink);
    portfolioCard.appendChild(cardContainer);

    // Добавление карточки в тело документа
    cardsContainer.appendChild(portfolioCard);
}

const data = fetch('js/portfolio.json')
    .then((response) => response.json())
    .then((json) => {
        for (let i = 0; i < json.portfolio.length; i++) {
            createPortfolioCard(json.portfolio[i]);
        }
    });

const darkmodeButton = document.querySelector("#darkmodeButtonContainer");

darkmodeButton.addEventListener("click", darkModeIsActive);

// плавная прокрутка до якоря
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute("href").substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
}
