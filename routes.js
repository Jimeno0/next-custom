const routes = require('next-routes')();

// const languages = 'en|es';

routes.getRoute = (routeName, params = {}) => {
  const route = routes.routes.find(route => route.name === routeName);

  const { id, user } = params;
  return route.toPath({
    id: id || null,
    user: user || null,
  });
};

routes
  .add('index', '/', 'index')
  .add('user', '/user/:user', 'user');

module.exports = routes;

