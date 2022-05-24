import { Address } from "./address";
import { Coordinate } from "./coordiante";
import { Review } from "./review";

export interface Toilet{
    id : string,
    name : string,
    coordinates : Coordinate,
    address : Address,
    description : string,
    reviews : Review[],
    paid? : boolean
}