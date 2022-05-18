import { Adress } from "./adress";
import { Coordinate } from "./coordiante";
import { Review } from "./review";

export interface ToiletReq{
    name : string,
    coordinates : Coordinate,
    adress : Adress,
    description : string,
    paid? : string
}