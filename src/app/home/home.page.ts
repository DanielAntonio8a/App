import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  categories = ['Sports', 'Economy', 'Technology', 'Lifestyle', 'Health', 'World'];

  stats = [
     { title: 'iOS', value: 223 },
     { title: 'Android', value: 108 },
     { title: 'Sports', value: 56 },
     { title: 'Economy', value: 110 },
     { title: 'Technology', value: 95 },
     { title: 'Lifestyle', value: 395 },
     { title: 'Health', value: 22 },
     { title: 'World', value: 48 }
  ];
  constructor() {}

}
