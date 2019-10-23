
import { createAPI } from "@/api/util"
import config from "../config"

const baseUrl = {
  mock: "http://mock.morechips.cn:7300/mock/5dae9e80f489d42788c29579/user",
  dev: "",
  pre: "",
  prod: ""
}[config.env || "mock"]

export default createAPI(baseUrl)
