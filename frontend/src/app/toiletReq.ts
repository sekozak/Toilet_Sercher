import { Adress } from "./adress";
import { Coordinate } from "./coordiante";

export interface ToiletReq{
    name : string,
    coordinates : Coordinate,
    adress : Adress,
    description : string,
    paid? : boolean
}