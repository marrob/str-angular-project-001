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
    {text: 'Gyerek könyvek', link: '/cat01'},
    {text: 'Informatika', link: '/cat02'},
    {text: 'Pedagógia és pszichológia', link: '/cat03'},
  ];

  constructor() { }
}
