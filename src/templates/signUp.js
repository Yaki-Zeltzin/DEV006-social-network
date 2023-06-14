import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../lib/config/firebaseConfig.js"

function signUp(navigateTo) {
  const signUpSection = document.createElement('section');
  const header = document.createElement('div');
  const title = document.createElement('h2');
  const subtitle = document.createElement('h3');
  const main = document.createElement('article');
  const signUpForm = document.createElement('form');
  const nameInput = document.createElement('input');
  const emailInput = document.createElement('input');
  const passwordInput = document.createElement('input');
  const btnSignUp = document.createElement('input');
  const logInInvite = document.createElement('p');
  const btnLogIn = document.createElement('a');
  const o = document.createElement('p');
  const btnGoogle = document.createElement('input');
  const iconGoogle = document.createElement('img');

  signUpSection.classList.add('page_signUp');
  header.classList.add('header_signUp');
  title.classList.add('signUp');
  subtitle.classList.add('header_continue');
  main.classList.add('form_signUp');
  signUpForm.classList.add('signUp_form');
  btnSignUp.classList.add('button');
  logInInvite.classList.add('signUp_invitate');
  o.classList.add('signUp_invitate');
  btnGoogle.classList.add('button');
  iconGoogle.classList.add('iconGoogle');

  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('id', 'user_name');
  nameInput.setAttribute('placeholder', 'Username');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('id', 'email');
  emailInput.setAttribute('placeholder', 'Email');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('id', 'password');
  passwordInput.setAttribute('placeholder', 'Password');
  btnSignUp.setAttribute('value', 'SIGN UP');
  btnSignUp.setAttribute('type', 'submit');
  btnGoogle.setAttribute('type', 'button');
  btnGoogle.setAttribute('value', 'Continua con Google');
  iconGoogle.setAttribute('alt', 'Google icon');
  iconGoogle.setAttribute('src', 'images/logoOne.png');

  title.textContent = 'SIGN UP';
  subtitle.textContent = 'TO CONTINUE';
  logInInvite.textContent = 'Have an account? Cool! ';
  btnLogIn.textContent = 'Log in';
  o.textContent = 'o';

  signUpSection.append(header, main);
  header.append(title, subtitle);
  main.append(signUpForm);
  signUpForm.append(nameInput, emailInput, passwordInput, btnSignUp, logInInvite, o, btnGoogle);
  logInInvite.append(btnLogIn);

  signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = signUpForm['user_name'].value;
    const email = signUpForm['email'].value;
    const password = signUpForm['password'].value;

    console.log(name, email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    signUpForm.reset();
  });

  btnLogIn.addEventListener('click', () => {
    navigateTo('/login');
  });


  return signUpSection;
}

export default signUp;
