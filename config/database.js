module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'cluster0.c1ktm.mongodb.net'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', ),
        database: env('DATABASE_NAME', 'Strapi-Blog'),
        username: env('DATABASE_USERNAME', 'LeratoLetsepe'),
        password: env('DATABASE_PASSWORD', 'zlhfMgR4mwufcmnU'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
