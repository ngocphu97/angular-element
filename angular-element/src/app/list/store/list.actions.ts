export namespace List {
  export class GetList {
    static readonly type = '[List Page] Get List';
  }

  export class GetListFail {
    static readonly type = '[List Page] Get List Fail';
    constructor(public error: any) { }
  }
}
