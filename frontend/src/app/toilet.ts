import { Adress } from "./adress";
import { Coordinate } from "./coordiante";
import { Review } from "./review";

export interface Toilet{
    id : string,
    name : string,
    coordinates : Coordinate,
    adress : Adress,
    description : string,
    reviews : Review[]
}