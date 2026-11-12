import mysql, { type Pool, type ResultSetHeader, type RowDataPacket } from "mysql2/promise";

type GlobalMysql = {
  pool: Pool | null;
};

declare global {
  // eslint-disable-next-line no-var
  var mysqlCache: GlobalMysql | undefined;
}

const cached: GlobalMysql = global.mysqlCache ?? { pool: null };
global.mysqlCache = cached;

export function isMysqlConfigured() {
  return Boolean(
    process.env.MYSQL_HOST &&
      process.env.MYSQL_USER &&
      process.env.MYSQL_DATABASE &&
      process.env.MYSQL_PASSWORD !== undefined
  );
}

export function getPool() {
  if (!isMysqlConfigured()) {
    throw new Error(
      "MySQL is not configured. Set MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE in web/.env.local."
    );
  }

  if (!cached.pool) {
    cached.pool = mysql.createPool({
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT || 3306),
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD || "",
      database: process.env.MYSQL_DATABASE,
      waitForConnections: true,
      connectionLimit: 10,
      namedPlaceholders: true,
      timezone: "Z",
    });
  }

  return cached.pool;
}

export async function queryRows<T extends RowDataPacket[]>(
  sql: string,
  params?: Record<string, unknown> | unknown[]
) {
  const [rows] = await getPool().query<T>(sql, params);
  return rows;
}

export async function execute(
  sql: string,
  params?: Record<string, unknown> | unknown[]
) {
  const [result] = await getPool().execute<ResultSetHeader>(sql, params);
  return result;
}

/** @deprecated use isMysqlConfigured */
export const isMongoConfigured = isMysqlConfigured;
/** @deprecated use getPool */
export async function connectDB() {
  return getPool();
}
