import { animate, query, stagger, style, transition, trigger } from "@angular/animations";
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { menuData } from './helper/menuData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ 
            opacity: 0,
            transform: 'translateY(-20px)'
           }),
          stagger(40, [
            animate('0.4s ease', style({ 
              opacity: 1,
              transform: 'translateY(0)'
            }))
          ])
        ])
      ])
    ])
  ]
})
export class AppComponent implements OnInit{
  drawer!: boolean;
  menuItems=menuData;

  constructor() {
  }
  
  ngOnInit() {
    this.drawer = false;
  }

  openDrawer(){
    this.drawer = true;
  }
    
}
