module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','70bfcc011b2ffdb8757730921aa6c4a1'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});
