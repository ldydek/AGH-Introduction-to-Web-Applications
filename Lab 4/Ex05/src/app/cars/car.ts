export interface Model {
    name: string;
    colors: Array<string>;
  }
  
export interface Car {
    brand: string;
    models: Array<Model>;
}
