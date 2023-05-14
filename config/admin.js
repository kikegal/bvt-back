module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','7b8a576d9a2f52dffba78090f89205c3'),
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
