export namespace Price {
  export class GetPriceList {
    static readonly type = '[List Page] Get List';
  }

  export class GetListFail {
    static readonly type = '[List Page] Get List Fail';
    constructor(public error: any) { }
  }

  export class GetPricingDetail {
    static readonly type = '[List Page] Get Pricing Detail';
    constructor(public id: any) { }
  }

  export class UpdateListWithConfig {
    static readonly type = '[List Page] Update List With Config From Client';
    constructor(public list: any) { }
  }
}
