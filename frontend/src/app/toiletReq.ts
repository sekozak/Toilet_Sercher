import { Address } from "./address";
import { Coordinate } from "./coordiante";

export interface ToiletReq{
    name : string,
    coordinates : Coordinate,
    address : Address,
    description : string,
    paid? : boolean
}