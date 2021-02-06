import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

export interface IBookCol {
  key: string;
  text: string;
  editable?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'A Könyves webshop ';

  menuItems: IMenuItem[] = [
    {text: 'Főoldal', link: '/', icon: 'home'},
    {text: 'Szépirodalom', link: '/cat01'},
    {text: 'Tudomány', link: '/cat02'},
    {text: 'Egyéb', link: '/cat03'},
    {text: 'Admin', link: '/admin'},
  ];

  bookMenuCols: IBookCol[] = [
    {key: 'id', text: "#", editable: false},
    {key: 'name', text:'Szerző', editable: true},
    {key: 'title', text:'Cím', editable: true},
    {key: 'publisher', text:'Kiadó', editable: true},
    {key: 'releaseYear', text:'Év', editable: true},
    {key: 'price', text:'Ár', editable: true},
    {key: 'description', text:'Leírás', editable: true},
    {key: 'stock', text:'Raktáron', editable: true},
    {key: 'featured', text:'Kiemelt', editable: true},
    {key: 'active', text:'Aktív', editable: true},
  ];

  constructor() { }
}
