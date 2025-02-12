const sql = require("mssql");

let pool = null;

/**
 * Initialize the database connection
 * @param {object} config - MSSQL connection config
 */
async function initConnection(config) {
  try {
    pool = await sql.connect(config);
    console.log("Database Connected");
  } catch (error) {
    console.error("Connection Failed:", error.message);
    throw error;
  }
}

/**
 * Execute a query with optional parameters.
 * @param {string} query - SQL query string
 * @param {object} params - Key-value pairs for parameterized queries
 * @returns {Promise<any>} - Query result
 */
async function executeQuery(query, params = {}) {
  if (!pool) throw new Error("Database not initialized yet.");

  try {
    const request = pool.request();

    for (const [key, value] of Object.entries(params)) {
      request.input(key, value);
    }

    const result = await request.query(query);
    return result.recordset;
  } catch (error) {
    console.error("Query Execution Failed:", error.message);
    throw error;
  }
}

/**
 * Close the database connection
 */
async function closeConnection() {
  if (pool) {
    await pool.close();
    pool = null;
    console.log("MSSQL Connection Closed");
  }
}

// Export functions as a module
module.exports = {
  initConnection,
  executeQuery,
  closeConnection,
};
