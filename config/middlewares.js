

module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      directives: {
        
        'connect-src': ["'self'", "https:"],
        'base-uri': ["'self'"],
        'font-src': ["'self'", "https:", "data:"],
        'form-action': ["'self'"],
        'frame-ancestors': ["'self'"],
        'object-src': ["'none'"],
        'script-src': ["'self'"],
        'script-src-attr': ["'none'"],
        'style-src': ["'self'", "https:", "'unsafe-inline'"],
        'upgrade-insecure-requests': [],
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
