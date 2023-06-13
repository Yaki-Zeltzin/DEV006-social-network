const page404 = (navigateTo) => {
  const section404 = document.createElement('section');
  const imgCat404 = document.createElement('img');
  const articleCat404 = document.createElement('article');
  const articleDescription404 = document.createElement('article');
  const h1Description404 = document.createElement('h1');
  const articleBtnContainer404 = document.createElement('article');
  const btn404 = document.createElement('button');
  const articleDog404 = document.createElement('article');
  const imgDog404 = document.createElement('img');

  section404.classList.add('pageNotFound');
  articleCat404.classList.add('cat404');
  articleDescription404.classList.add('description-pageNotFound');
  articleBtnContainer404.classList.add('container-btn_pageNotFound');
  btn404.classList.add('btn-pageNotfound');
  articleDog404.classList.add('dog404');

  imgCat404.setAttribute('src', './images/cat_bookshelf.png');
  imgCat404.setAttribute('alt', 'cat404');
  h1Description404.textContent = 'Woops! 404 Page not found';
  btn404.setAttribute('type', 'button');
  btn404.textContent = 'Home';
  imgDog404.setAttribute('src', 'images/dog_404.png');
  imgDog404.setAttribute('alt', 'dog404');

  articleCat404.appendChild(imgCat404);
  articleDescription404.appendChild(h1Description404);
  articleBtnContainer404.appendChild(btn404);
  articleDog404.appendChild(imgDog404);

  section404.appendChild(articleCat404);
  section404.appendChild(articleDescription404);
  section404.appendChild(articleBtnContainer404);

  section404.appendChild(articleDog404);
  return section404;
};

export default page404;
