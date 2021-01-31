import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
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
  ];

  constructor() { }
}
