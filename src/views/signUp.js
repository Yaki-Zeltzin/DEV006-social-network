const body = document.getElementById('body');

export default () => {
  const views = `
    <section class="page_signUp">
  <header class="header_signUp">
    <h2 class="signUp">SIGN UP</h2>
    <h3 class="header_continue">TO CONTINUE</h3>
  </header>
  <main class="form_signUp">
    <form class="signUp_form" action="" method="post">
      <input id="user_name" type="text" name="name" placeholder="Username">
      <input id="email" type="email" name="email" placeholder="Email">
      <input id="password" type="password" name="password" placeholder="Password">
      <input class="button" type="submit" value="SIGN UP">
      <p class="signUp_invitate">Have an account? Cool! <a href="#/logIn">Log in</a>then.</p>
    </form>
  </main>
</section>`;

  body.classList.add('signUp');
  body.classList.remove('logIn');
  const divElement = document.createElement('div');
  divElement.innerHTML = views;

  return divElement;
};
