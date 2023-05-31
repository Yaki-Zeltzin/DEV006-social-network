export default () => {
  const views = `
    <header class="header_welcome">
     <h1>WELCOME to</h1>
    </header>
  <main>
    <img src="./images/logoOne.png" alt="logo_message" class="main_logo">
    <div class="main_section">
      <p class="main_info">In this page you can to write more comments for your friends.</p>
      <a href='#/signUp'class="main_button sigUp">SIGN UP</a>
      <p class="main_logIn">Have an account? Cool! <a href="#/logIn">Log in</a>then.</p>
    </div>
  </main>`;
  const body = document.getElementById('body');
  body.classList.remove('signUp');
  body.classList.remove('logIn');
  const divElement = document.createElement('div');
  divElement.innerHTML = views;

  return divElement;
};
