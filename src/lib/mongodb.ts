/** @deprecated MongoDB replaced by MySQL — re-exports for compatibility */
export {
  getPool as connectDB,
  isMysqlConfigured as isMongoConfigured,
  isMysqlConfigured,
} from "@/lib/mysql";
