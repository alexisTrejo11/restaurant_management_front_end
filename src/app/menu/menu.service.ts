import { Injectable } from "@angular/core";
import { Category } from "./menu.model";


@Injectable({"providedIn": "root" })
export class MenuService {


    getCategories(): Category[] {
        return [ 
            {"id": 1 , "name": "test 1"},
            {"id": 2 , "name": "test 2"},
            {"id": 3 , "name": "test 3"},
            {"id": 4 , "name": "test 4"},
            {"id": 5 , "name": "test 5"},
        ]
    }
}