import { Component, Input } from '@angular/core';
import { expandCollapse } from './zippy.component.animations';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [ expandCollapse ]
})
export class ZippyComponent {
  @Input() title: string;
  isOpen: boolean;

  constructor() { 
    this.title = "";
    this.isOpen = false;
  }

  onClick() {
    this.isOpen = !this.isOpen;
  }
}
