import { Address } from "./adress";
import { Coordinate } from "./coordiante";
import { Review } from "./review";

export interface ToiletReq{
    name : string,
    coordinates : Coordinate,
    address : Address,
    description : string,
    paid? : string
}