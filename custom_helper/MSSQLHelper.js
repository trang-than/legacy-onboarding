const Helper = require("@codeceptjs/helper");
require("dotenv").config();

const {
  initConnection,
  executeQuery,
  closeConnection,
} = require("../utils/mssqlUtil.js");

class MSSQLHelper extends Helper {
  legacyDBConfig = {
    who: "HELPER",
    user: process.env.LEGACYDB_USER,
    password: process.env.LEGACYDB_PASSWORD,
    server: process.env.LEGACYDB_HOST,
    database: process.env.LEGACYDB_SCHEMA,
    connectionTimeout: 60000,
    requestTimeout: 60000,
    options: {
      port: parseInt(process.env.LEGACYDB_PORT),
      instanceName: process.env.LEGACYDB_INSTANCE,
      encrypt: false,
      enableArithAbort: true,
    },
  };

  constructor(config = {}) {
    super(config);
    this.config = config || { default: this.legacyDBConfig };
  }

  async connectDBConnection(config = null) {
    const dbConfig = config || this.legacyDBConfig;
    return await initConnection(dbConfig);
  }

  async getJanusPersonRecord() {
    console.log("Query Person record...");
    const resultSet = await executeQuery(
      "SELECT TOP 1 * FROM tblPerson (NOLOCK) WHERE Source IN ('bismarcktribune', 'chippewa', 'beatricedailysun', 'columbustelegram', 'fremonttribune')"
    );
    return resultSet;
  }

  async closeDBConnection() {
    console.log("Close DB connection...");
    return await closeConnection();
  }
}

module.exports = MSSQLHelper;
