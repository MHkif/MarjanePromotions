export interface Promotion {
    id: any; 
    promotion: any;
    createdAt: Date;
    center: any;
    manager: any; 
    status: string;
    performedAt: Date;
}

export interface Product {
    id: number; 
    category: any;
    name: string;
}

export class PromotionRequest {
    private _product: Product;
    private _admin = { cin: 'LK103216' };
    private _startAt: Date;
    private _percentage: number;
    private _endAt: Date;
    private _centers =  [
        {
            "id": 1,
            "name": "Center A",
            "admin": {
                "cin" : "LK103216"
            },
            "city": {
              "id": 1
            }
  
  
          }
    ]; // Adjust the type based on the actual structure
  
    constructor(
        productO: Product,
        percentageO: number = 97,
         startAtO: Date = new Date(),
         endAtO: Date = new Date(),
      ) {
            this._product = productO;
            this._startAt = startAtO;
            this._endAt = endAtO;
            this._percentage = percentageO;
    }
  
    // Getters and setters
    public get product(): Product {
      return this._product;
    }
  
    public set product(value: Product) {
      this._product = value;
    }
  
    public get admin(): { cin: string } {
      return this._admin;
    }
  
    public set admin(value: { cin: string }) {
      this._admin = value;
    }
  
    public get startAt(): Date {
      return this._startAt;
    }
  
    public set startAt(value: Date) {
      this._startAt = value;
    }
  
    public get percentage(): number {
      return this._percentage;
    }
  
    public set percentage(value: number) {
      this._percentage = value;
    }
  
    public get endAt(): Date {
      return this._endAt;
    }
  
    public set endAt(value: Date) {
      this._endAt = value;
    }
  
    public get centers(): any[] {
      return this._centers;
    }
  
    public set centers(value: any[]) {
      this._centers = value;
    }
  }

export interface PagePromotion{
    content : Array<Promotion>;
    pageable : any;
    last: boolean,
    totalElements: number,
    totalPages: number,
    size: number,
    number: number,
    sort: any,
    first: boolean,
    numberOfElements: boolean,
    empty: boolean

}



export interface PageProduct{
    content : Array<Product>;
    pageable : any;
    last: boolean,
    totalElements: number,
    totalPages: number,
    size: number,
    number: number,
    sort: any,
    first: boolean,
    numberOfElements: boolean,
    empty: boolean

}
