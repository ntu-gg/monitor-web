module.exports = {
  port: process.env.PORT || 3000,
  database_url: process.env.DATABASE_URL || 'mysql://root:@127.0.0.1:3306/monitor'
};
