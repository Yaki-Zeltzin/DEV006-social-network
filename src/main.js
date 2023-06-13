//import './lib/config/firebase.js';

// myFunction();
// import { router } from './router/index.routes.js';

// router(window.location.hash);
// window.addEventListener('hashchange', () => {
//   router(window.location.hash);
// });

import home from './templates/home';
import signIn from './templates/signIn';
import signUp from './templates/signUp';
import page404 from './templates/page404';

const routes = [
  { path: '/', component: home },
  { path: '/login', component: signIn },
  { path: '/signup', component: signUp },
  { path: '/error', component: page404 },
];

const defaultRoute = '/';
const root = document.getElementById('root');

function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);

  if (route && route.component) {
  //agregar un registro al historial de navegacion
    window.history.pushState(
      {}, //estado
      route.path, //titulo
      window.location.origin + route.path, //url
    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);
