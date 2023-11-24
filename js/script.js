const body = document.querySelector('.section');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');

window.onload = function () {
  setTimeout(() => {
    // body.style.display = 'flex'
    body.style.opacity = '1';
  }, 700);

  function generateQuote() {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      }).then((data) => {
        const random = Math.floor(Math.random() * data.length);
        const quote = `${data[random].text}`;
        const author = `${data[random].author}`;
        document.querySelector('h1').innerHTML = quote
        document.querySelector('p').innerHTML = author
      })
  }

  const btn = document.querySelector('.btn').addEventListener('click', generateQuote)

  generateQuote()
};
