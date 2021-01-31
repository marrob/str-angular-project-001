import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  list = [
    {
        id: 1,
        name: "Gyerek",
        description: "könyv"
    },
    {
        id: 2,
        name: "Informatika",
        description: "könyv"
    },
    {
        id: 3,
        name: "Kereskedelem és marketing",
        description: "könyv"
    },
    {
        id: 4,
        name: "Pedagógia és pszichológia",
        description: "könyv"
    },
    {
        id: 5,
        name: "Orvostudomány",
        description: "könyv"
    },
    {
        id: 6,
        name: "Művészet",
        description: "könyv"
    },
    {
        id: 7,
        name: "scifi",
        description: "könyv"
    },
    {
        id: 8,
        name: "Szépirodalom - regény",
        description: "könyv"
    },
    {
        id: 9,
        name: "Szépirodalom-vers",
        description: "könyv"
    },
    {
        id: 10,
        name: "Természettudomány-villamosmérnök",
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