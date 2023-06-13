function home(navigateTo) {
  const section = document.createElement('section');
  const containerTitle = document.createElement('div');
  const title = document.createElement('h1');
  const main = document.createElement('main');
  const img = document.createElement('img');
  const containerMain = document.createElement('div');
  const description = document.createElement('p');
  const btnSigUp = document.createElement('a');
  const startLogin = document.createElement('p');
  const btnLogin = document.createElement('a');

  containerTitle.classList.add('header_welcome');
  img.classList.add('main_logo');
  containerMain.classList.add('main_section');
  description.classList.add('main_info');
  btnSigUp.classList.add('main_button');
  startLogin.classList.add('main_logIn');

  img.setAttribute('src', './images/logoOne.png');
  img.setAttribute('alt', 'logo_message');
  btnSigUp.setAttribute('id', 'btnSignUp');
  btnLogin.setAttribute('id', 'btnLogin');

  title.textContent = 'Welcome to';
  description.textContent = 'In this page you can to write more comments for your friends.';
  btnSigUp.textContent = 'SIGN UP';
  startLogin.textContent = 'Have an account? Cool!';
  btnLogin.textContent = 'Log in';

  section.append(containerTitle, main);
  containerTitle.append(title);
  main.append(img, containerMain);
  containerMain.append(description, btnSigUp, startLogin);
  startLogin.append(btnLogin);

  btnLogin.addEventListener('click', () => {
    navigateTo('/login');
  });
  btnSigUp.addEventListener('click', () => {
    navigateTo('/signup');
  });
  return section;
}

export default home;
