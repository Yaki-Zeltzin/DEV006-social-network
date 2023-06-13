function signIn(navigateTo) {
  const signInSection = document.createElement('section');
  const header = document.createElement('div');
  const title = document.createElement('h2');
  const subtitle = document.createElement('h3');
  const main = document.createElement('main');
  const logInForm = document.createElement('form');
  const emailInput = document.createElement('input');
  const passwordInput = document.createElement('input');
  const btnLogIn = document.createElement('input');
  const logInInvite = document.createElement('p');
  const btnSignUp = document.createElement('a');
  const o = document.createElement('p');
  const btnGoogle = document.createElement('input');
  const iconGoogle = document.createElement('img');

  signInSection.classList.add('page_logIn');
  header.classList.add('header_logIn');
  title.classList.add('logIn');
  subtitle.classList.add('header_continue');
  main.classList.add('form_logIN');
  logInForm.classList.add('logIn_form');
  btnLogIn.classList.add('button');
  logInInvite.classList.add('logIn_invite');
  o.classList.add('logIn_invite');
  btnSignUp.classList.add('signUpA');
  btnGoogle.classList.add('button');
  iconGoogle.classList.add('iconGoogle');

  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('id', 'email_logIn');
  emailInput.setAttribute('placeholder', 'Email');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('id', 'password_logIn');
  passwordInput.setAttribute('placeholder', 'Password');
  btnLogIn.setAttribute('type', 'submit');
  btnLogIn.setAttribute('value', 'LOG IN');
  btnGoogle.setAttribute('type', 'button');
  btnGoogle.setAttribute('value', 'Login with Google');
  iconGoogle.setAttribute('alt', 'Google icon');
  iconGoogle.setAttribute('src', 'images/logoOne.png');

  title.textContent = 'LOG IN';
  subtitle.textContent = 'TO CONTINUE';
  btnLogIn.textContent = 'LOG IN';
  logInInvite.textContent = 'dont have an account? ';
  btnSignUp.textContent = 'Sign Up';
  o.textContent = 'or';

  signInSection.append(header, main);
  header.append(title, subtitle);
  main.append(logInForm);
  logInForm.append(emailInput, passwordInput, btnLogIn, logInInvite, o, btnGoogle);
  logInInvite.append(btnSignUp);

  btnSignUp.addEventListener('click', () => {
    navigateTo('/signup');
  });

  return signInSection;
}

export default signIn;
