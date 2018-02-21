const endpoint =
  'https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
const input = document.querySelector('input');
const articlesList = document.querySelector('.article-wrapper');

function displayData(data) {
  for (const page in data.query.pages) {
    let htmlContent = '';
    const article = data.query.pages[page];
    htmlContent = `
            <a href="https://en.wikipedia.org/?curid=${article.pageid}">
              <div class="article-item">
                <img src="${article.thumbnail.source}">
                <div class="content">
                  <h2>${article.title}</h2>
                  <p>${article.extract}</p>
                </div>
              </div>
            </a>
          `;
    articlesList.insertAdjacentHTML('beforeend', htmlContent);
  }
}

input.addEventListener('keypress', e => {
  if (e.which === 13) {
    articlesList.innerHTML = '';
    const title = e.target.value;
    const api = endpoint + title;
    fetch(api)
      .then(response => response.json())
      .then(displayData);
  }
});
