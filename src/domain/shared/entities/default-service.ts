export abstract class DefaultService<Request = unknown, Response = void> {
  abstract execute(request?: Request): Response | Promise<Response>;
}
