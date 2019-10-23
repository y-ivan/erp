
const env = process.env.NODE_ENV

export default {
  env: env === "development" ? "mock" : env === "production" ? "prod" : "dev"
}
