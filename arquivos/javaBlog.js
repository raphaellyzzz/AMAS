document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newNewsForm');
    const newsDiv = document.getElementById('news');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('newsTitle').value;
        const link = document.getElementById('newsLink').value;
        const image = document.getElementById('newsImage').value;

        if (title && link && image) {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');

            const newsLink = document.createElement('a');
            newsLink.href = link;
            newsLink.target = '_blank';

            const newsImage = document.createElement('img');
            newsImage.src = image;
            newsImage.alt = title;

            const newsTitle = document.createElement('h4');
            newsTitle.textContent = title;

            newsLink.appendChild(newsImage);
            newsLink.appendChild(newsTitle);
            newsItem.appendChild(newsLink);
            newsDiv.appendChild(newsItem);

            form.reset();
        }
    });
});