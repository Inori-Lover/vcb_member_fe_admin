export namespace Response {
  export interface Base<T extends Record<string, any> | undefined = any> {
    code: number;
    data?: T;
    msg?: string;
  }
  export interface Ok<T extends Record<string, any> | undefined = undefined>
    extends Base<T> {
    data: T;
    msg: never;
  }
  export interface Error extends Base {
    data: never;
    msg: string;
  }
}
