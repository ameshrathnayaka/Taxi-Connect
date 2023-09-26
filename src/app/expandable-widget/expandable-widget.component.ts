import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-expandable-widget',
  templateUrl: './expandable-widget.component.html',
  styleUrls: ['./expandable-widget.component.scss'],
  animations: [
    trigger('openClose', [
      state('true', style({ 
        height: '*',
        opacity:1
     })),
      state('false', style({ 
        height: '0px',
        opacity:0
     })),
      transition('false <=> true', animate('200ms ease'))
    ]),
    trigger('showHideButton', [
      transition(':enter', [
        style({ 
          opacity: 0,
          transform: 'translateY(-20px)'
        }),
        animate('400ms ease-out', style({ 
          opacity: 1,
          transform: 'translateY(0px)' 
        })),
      ])
    ])
  ]
})
export class ExpandableMenuComponent {
  expand:boolean = false;
  items = [
    {
      name: 'Distance',
      value: '0.00 Km'
    },
    {
      name: 'Trip Duration',
      value: '00:07:08'
    },
    {
      name: 'Extras',
      value: 'AED 0.00'
    },
    {
      name: 'Tolls',
      value: 'AED 0.00'
    },
    {
      name: 'Est. arrival time',
      value: 'AED 0.00'
    },
    {
      name: 'Fare estimate',
      value: 'AED 0.00'
    },
    {
      name: 'Taxi number',
      value: 'T667'
    },
  ];

  toggleCard(){
    this.expand = !this.expand;
  }
}
