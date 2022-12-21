import HttpResponseStatus from "./src/HttpResponseStatus";

const status: HttpResponseStatus.Code = HttpResponseStatus.getCode("404");

console.log(status)