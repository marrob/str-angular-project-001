import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

export interface IBookCol {
  key: string;
  text: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'OlvasNode kell!';

  menuItems: IMenuItem[] = [
    {text: 'Főoldal', link: '/', icon: 'home'},
    {text: 'Szépirodalom', link: '/cat01'},
    {text: 'Tudomány', link: '/cat02'},
    {text: 'Egyéb', link: '/cat03'},
    {text: 'Admin', link: '/admin'},
  ];

  bookMenuCols: IBookCol[] = [
    {key: 'id', text: "#", type: 'readonly'},
    {key: 'name', text:'Szerző', type: 'text'},
    {key: 'title', text:'Cím', type: 'text'},
    {key: 'publisher', text:'Kiadó', type: 'text'},
    {key: 'releaseYear', text:'Év', type: 'text'},
    {key: 'price', text:'Ár', type: 'text'},
    {key: 'description', text:'Leírás', type: 'text'},
    {key: 'stock', text:'Raktáron', type: 'text'},
    {key: 'featured', text:'Kiemelt', type: 'checkbox'},
    {key: 'active', text:'Aktív', type: 'checkbox'},
  ];

  constructor() { }
}
