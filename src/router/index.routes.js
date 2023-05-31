import Welcome from '../views/welcome.js';
import Login from '../views/logIn.js';
import Signup from '../views/signUp.js';

const content = document.getElementById('root');

// function that receives a route and return it's page
const router = (route) => {
  content.innerHTML = '';
  switch (route) {
    case '#/': {
      return content.appendChild(Welcome());
    }
    case '#/logIn': {
      return content.appendChild(Login());
    }
    case '#/signUp': {
      return content.appendChild(Signup());
    }
    default:
      return console.log('404');
  }
};

export { router };
