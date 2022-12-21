# cute-http-response-status-codes

| <img alt="404-error-ghost" src="https://raw.githubusercontent.com/makesomesparks/cute-http-response-codes/main/images/404-error.png?token=GHSAT0AAAAAAB4LP2HF2ZQPTCY7FTHJWRXEY5C2WLA" width="200"> |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                                 Image source: [flaticon.com](https://www.flaticon.com/free-icon/404-error_7486789) |


자주 사용하는 HTTP 응답코드 관리

> Typescript - Frequently used http response status codes manager

이 모듈은 에러코드를 HttpResponseStatus 클래스로 변환합니다.

> This module can be parse status number code to HttpResponseStatus class


## Get start

```sh
npm i cute-http-response-status-codes
```

**`Code`**

```ts
import HttpResponseStatus from "./src/HttpResponseStatus";

const status: HttpResponseStatus.Code = HttpResponseStatus.getCode("404");
console.log(status)
```

**`Result`**

```
Code {
  code: 0,
  error: false,
  describe: '',
  extension: [],
  deprecated: false,
  experimental: false,
  responseType: 'Unknown'
}
```

## class HttpResponseStatus

| Property     | Type                          | Default                         | Description                                                       | Example               |
| ------------ | ----------------------------- | ------------------------------- | ----------------------------------------------------------------- | --------------------- |
| code         | number                        | 0                               | Http response code                                                | 200                   |
| deprecated   | boolean                       | false                           | Is deprecated response code?                                      | true (e.g. 305)       |
| describe     | string                        |                                 | Describe response code                                            | OK                    |
| error        | boolean                       | true                            | Is response in error code types?                                  | true (e.g. 4xx, 5xx)  |
| experimental | boolean                       | false                           | Is experimental technology. Should be check browser compatibility | true (e.g. 103)       |
| extension    | string[]                      | []                              | Additional expansion module required                              | ["WebDAV", "CardDAV"] |
| responseType | enum(HttpResponseStatus.Type) | HttpResponseStatus.Type.Unknown | HttpResponseStatus.Type.ServerError (e.g. 5xx)                    |                       |

## enum HttpResponseStatus.Type

Based on [rfc9110](https://datatracker.ietf.org/doc/html/rfc9110)

| Code | Property      | Description             |
| ---- | ------------- | ----------------------- |
| -    | Unknown       | Unknown code            |
| 1xx  | Informational | Informational responses |
| 2xx  | Successful    | Successful responses    |
| 3xx  | Redirection   | Redirection messages    |
| 4xx  | ClientError   | Client error responses  |
| 5xx  | ServerError   | Server error responses  |
