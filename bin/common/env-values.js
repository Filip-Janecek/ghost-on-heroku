module.exports = {
  mysqlDatabaseUrl: process.env.MYSQL_DATABASE_URL || process.env.HEROKU_POSTGRESQL_RED_URL/*|| process.env.JAWSDB_URL*/ || process.env.CLEARDB_DATABASE_URL
}
