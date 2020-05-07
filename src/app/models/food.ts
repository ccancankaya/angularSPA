import { Photo } from './photo';

export class Food {
    id:number;
    name:string;
    price:number;
    categoryId:number;
    description:string;
    createdOn:Date;
    kitchenId:number;
    photos:Photo[];
}
