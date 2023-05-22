module.exports = [
  {
    name: 'contentSecurityPolicy',
    enabled: true,
    params: {
      directives: {
        'script-src': ["'self'", "'unsafe-inline'"],
      },
    },
  },
  // Los otros middlewares existentes en tu archivo middleware.js
];

module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
