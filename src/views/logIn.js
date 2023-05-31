export default () => {
  const views = `
  <section class="page_logIn">
    <header class="header_logIn">
      <h2 class="logIn">LOG IN</h2>
      <h3 class="header_continue">TO CONTINUE</h3>
    </header>
    <main class="form_logIN">
      <form class="logIn_form" action="" method="post">
        <input id="email_logIn" type="email" name="email_logIn" placeholder="Email">
        <input id="password_logIn" type="password" name="password" placeholder="password">
        <input class="button" type="submit" value="LOG IN">
        <p class="logIn_invite">don't have an account? <a class="signUpA" href="#/signUp">Sign Up</a>here.</p>
        <p>o</p>
        <input class="button" type="submit" value="Continua con Google">
      </form>
    </main>
  </section>`;
  const body = document.getElementById('body');
  body.classList.add('logIn');
  const divElement = document.createElement('div');
  divElement.innerHTML = views;

  return divElement;
};
