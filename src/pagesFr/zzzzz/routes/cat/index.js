/**
 * 用 cat 记录 node server 的运行状况
 */
import CtripUtil from "ctriputil";

export default function(app, server) {
  CtripUtil.cat.http(server);
}
