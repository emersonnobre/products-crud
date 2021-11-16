import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { transition, animate, trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger('changeContent', [
      state('open', style({
        opacity: 1
      })),
      state('closed', style({
        opacity: 0.8
      })), 
      transition('open <=> closed', [
        animate('0.8s')
      ])
    ])
  ]
})
export class NavComponent implements OnInit {

  content: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    if (this.content) this.content = false
    else this.content = true
  }

}
