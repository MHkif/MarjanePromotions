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
  id: null | number;
  product: {
    id: number;
    name : string,
    category: {
      id: number;
      name: string;
      department: {
        id: number;
        center: {
          id: number;
          name: string;
          admin: {
            cin: string;
          };
          city: {
            id: number;
          };
        };
        manager: {
          cin: string;
          admin: {
            cin: string;
          };
        };
      };
    };
  };
  startAt: null | string; // Change the type to the appropriate data type
  percentage: number;
  endAt: null | string; // Change the type to the appropriate data type
  createdAt: null | string; // Change the type to the appropriate data type
  centers: {
    id: number;
    name: string;
    admin: {
      cin: string;
    };
    city: {
      id: number;
    };
  }[];

  constructor(data: PromotionRequest) {
    this.id = data.id;
    this.product = data.product;
    this.startAt = data.startAt;
    this.percentage = data.percentage;
    this.endAt = data.endAt;
    this.createdAt = data.createdAt;
    this.centers = data.centers;
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


export class MyData {
  id: null | number;
  product: {
    id: number;
    category: {
      id: number;
      name: string;
      department: {
        id: number;
        center: {
          id: number;
          name: string;
          admin: {
            cin: string;
          };
          city: {
            id: number;
          };
        };
        manager: {
          cin: string;
          admin: {
            cin: string;
          };
        };
      };
    };
  };
  startAt: null | string; // Change the type to the appropriate data type
  percentage: number;
  endAt: null | string; // Change the type to the appropriate data type
  createdAt: null | string; // Change the type to the appropriate data type
  centers: {
    id: number;
    name: string;
    admin: {
      cin: string;
    };
    city: {
      id: number;
    };
  }[];

  constructor(data: MyData) {
    this.id = data.id;
    this.product = data.product;
    this.startAt = data.startAt;
    this.percentage = data.percentage;
    this.endAt = data.endAt;
    this.createdAt = data.createdAt;
    this.centers = data.centers;
  }
}
