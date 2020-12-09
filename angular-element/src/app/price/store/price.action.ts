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
}
