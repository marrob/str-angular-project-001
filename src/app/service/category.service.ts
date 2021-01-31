import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor() { }

    list = [
        {
            id: 0,
            name: "Szépirodalom",
            description: "könyv"
        },
        {
            id: 1,
            name: "Tudomány",
            description: "könyv"
        },
        {
            id: 2,
            name: "Egyéb",
            description: "könyv"
        }
    ]
}
/*
gyerek	1
informatika	2
kereskedelem és marketing	3
pedagógia és pszichológia	4
orvostudomány	5
művészet	6
scifi	7
szépirodalom - regény	8
szépirodalom-vers	9
természettudomány-villamosmérnök	10
*/