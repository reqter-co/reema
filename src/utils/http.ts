import fetch from "isomorphic-unfetch";
interface HttpResponse<T> extends Response {
  parsedBody?: T;
}
interface HttpRequest extends RequestInit {
  clientid?: string;
}
async function http<T>(request: RequestInfo): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request);
  try {
    const body = await response.json();
    if (body.data) {
      response.parsedBody = body.data;
    } else {
      response.parsedBody = body;
    }
  } catch (ex) {}

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}
export async function get<T>(
  path: string,
  args: HttpRequest
): Promise<HttpResponse<T>> {
  return await http<T>(new Request(path, { method: "get", ...args }));
}

export async function post<T>(
  path: string,
  body: any,
  args: HttpRequest
): Promise<HttpResponse<T>> {
  return await http<T>(
    new Request(path, { method: "post", body: JSON.stringify(body), ...args })
  );
}

export async function put<T>(
  path: string,
  body: any,
  args: RequestInit = { method: "put", body: JSON.stringify(body) }
): Promise<HttpResponse<T>> {
  return await http<T>(new Request(path, args));
}
