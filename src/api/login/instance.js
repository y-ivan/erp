
import { createAPI } from "@/api/util"
import config from "../config"

const baseUrl = {
  mock: "http://mock.morechips.cn:7300/mock/5dae99e23c8dd226c3d39243/login",
  dev: "",
  pre: "",
  prod: ""
}[config.env || "mock"]

export default createAPI(baseUrl)
