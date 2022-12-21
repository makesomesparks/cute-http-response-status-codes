import ResponseCodes from "./ResponseCodeList.json";

namespace HttpResponseStatus
{
  type KV = { [ key: string ]: any };

  export function getCode(code: number | string): Code
  {
    if (typeof code === "string" && (isNaN(Number(code))))
    {
      code = 0;
    }
    else
    {
      code = Number(code);
    }

    const filtered: KV[] = ResponseCodes.filter((v: KV) => v.code == code);

    if (filtered.length != 0)
    {
      return new Code(filtered[ 0 ]?.code ?? 0, filtered[ 0 ]?.describe ?? "", filtered[ 0 ]?.experimental ?? false, filtered[ 0 ]?.extension ?? [])
    }
    else
    {
      return new Code();
    }
  }

  export enum Type
  {
    Informational = "Informational",
    Successful = "Successful",
    Redirection = "Redirection",
    ClientError = "ClientError",
    ServerError = "ServerError",
    Unknown = "Unknown"
  };

  export class Code
  {
    code: number = 0;
    error: boolean = true;
    describe: string = "";
    extension: string[] = [];
    deprecated: boolean = false;
    experimental: boolean = false;
    responseType: Type = Type.Unknown;

    constructor (code: number = 0, describe: string = "", experimental: boolean = false, extension: string[] = [])
    {
      this.code = code;
      this.describe = describe;
      this.experimental = experimental;
      this.extension = extension;

      this.setError(this.code);
    }

    setError(code: number)
    {
      if (code < 400 || code >= 600)
      {
        this.error = false;
      }
    }

    setResponseType(code: number)
    {
      if (code < 200)
      {
        this.responseType = Type.Informational;
      }
      else if (code < 300)
      {
        this.responseType = Type.Successful;
      }
      else if (code < 400)
      {
        this.responseType = Type.Redirection;
      }
      else if (code < 500)
      {
        this.responseType = Type.ClientError;
      }
      else if (code < 600)
      {
        this.responseType = Type.ServerError;
      }
    }
  };
};

export default HttpResponseStatus;
