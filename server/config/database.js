// strapi-api/config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'aws-0-eu-central-1.pooler.supabase.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres.zldbygongcaqnyfdpfcp'),
      password: env('DATABASE_PASSWORD', 'UJr5qP@tynCcUbj'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
        ca: env('DATABASE_CA_CERT'),  // Add this line to use the CA certificate
      },
    },
    debug: false,
  },
});
