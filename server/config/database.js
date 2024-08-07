// config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'aws-0-eu-central-1.pooler.supabase.com'),
      port: env.int('DATABASE_PORT', 6543),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres.zldbygongcaqnyfdpfcp'),
      password: env('DATABASE_PASSWORD', 'UJr5qP@tynCcUbj'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: false, // Set to false
      },
    },
    debug: false,
  },
});
