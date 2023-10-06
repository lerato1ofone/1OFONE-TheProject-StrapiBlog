module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 8082),
  admin: { 
    auth: { 
      secret: env("ADMIN_JWT_SECRET", "773b9fe92c18413313b726c988728311"),
    },
  },
});