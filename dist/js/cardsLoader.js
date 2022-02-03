const loadButton = document.getElementById('load-btn');
let result = null;
let i = 0;
let last = 5;

loadButton.addEventListener('click', async() => {
    if (result) {
        for (i; i <= last; i++) {
            const listItem = document.createElement('li');
            const itemImg = document.createElement('img');
            const cardContent = document.createElement('div');
            const cardLink = document.createElement('a');
            const cardHeading = document.createElement('h3');
            const cardAuthor = document.createElement('div');
            const span = document.createElement('span');
            const cardText = document.createElement('div');
            const cardTextLight = document.createElement('div');
            if (result[i]) {
                listItem.classList.add('cards__item');

                itemImg.classList.add('cards__img');
                itemImg.src = './img/photo.jpg';

                cardContent.classList.add('cards__content');

                cardHeading.classList.add('cards__heading_low');
                cardHeading.textContent = 'Card Name';

                cardTextLight.classList.add('cards__text_light');
                cardTextLight.textContent = result[i].title;

                cardText.classList.add('cards__text');
                cardText.textContent = result[i].body;

                cardAuthor.classList.add('cards__author');
                cardAuthor.innerHTML = 'Posted by <span>Eugenia</span>, on July 24, 2019';

                cardLink.classList.add('cards__link');
                cardLink.textContent = 'Continue reading';

                cardContent.append(cardHeading);
                cardContent.append(cardTextLight);
                cardContent.append(cardText);
                cardContent.append(cardAuthor);
                cardContent.append(cardLink);

                listItem.append(itemImg);
                listItem.append(cardContent);

                document.getElementById('posts').append(listItem);
            } else {
                break;
            }
        }
        last += 6;
    } else {
        result = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json());
        for (i; i <= last; i++) {
            const listItem = document.createElement('li');
            const itemImg = document.createElement('img');
            const cardContent = document.createElement('div');
            const cardLink = document.createElement('a');
            const cardHeading = document.createElement('h3');
            const cardAuthor = document.createElement('div');
            const span = document.createElement('span');
            const cardText = document.createElement('div');
            const cardTextLight = document.createElement('div');
            if (result[i]) {
                listItem.classList.add('cards__item');

                itemImg.classList.add('cards__img');
                itemImg.src = './img/photo.jpg';

                cardContent.classList.add('cards__content');

                cardHeading.classList.add('cards__heading_low');
                cardHeading.textContent = 'Card Name';

                cardTextLight.classList.add('cards__text_light');
                cardTextLight.textContent = result[i].title;

                cardText.classList.add('cards__text');
                cardText.textContent = result[i].body;

                cardAuthor.classList.add('cards__author');
                cardAuthor.innerHTML = 'Posted by <span>Eugenia</span>, on July 24, 2019';

                cardLink.classList.add('cards__link');
                cardLink.textContent = 'Continue reading';

                cardContent.append(cardHeading);
                cardContent.append(cardTextLight);
                cardContent.append(cardText);
                cardContent.append(cardAuthor);
                cardContent.append(cardLink);

                listItem.append(itemImg);
                listItem.append(cardContent);

                document.getElementById('posts').append(listItem);
            } else {
                break;
            }
        }
        last += 6;
    }
})