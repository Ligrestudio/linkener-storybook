/* control para checked */

import {
    Component,
    Input,
    Output,
    EventEmitter
  } from '@angular/core';
  
  @Component({
    selector: 'storybook-radiobutton',
    template: `<label
      type="radiobutton"
      [ngClass]="classes"
      class="radiobutton__container txt-label">
      <span class="radiobutton__label">{{ label }}</span>
      <input type="radio">
      <span class="checkmark"></span>
    </label>`,
    styleUrls: ['./radio-button.css'],
  })
  export default class RadiobuttonComponent {
  
    /**
     * 
     */
    @Input()
    type: string = 'storybook-radiobutton--normal';
  
    /*
  
  
    /*
     * @required
     */
    @Input()
    label = 'Radio-button label';
  
    /**
     * Optional click handler
     */
    @Output()
    onClick = new EventEmitter < Event > ();
  
  
    public get classes(): string[] {
  
      let story;
      switch (this.type) {
        case 'normal':
          story = 'storybook-radiobutton--normal'
          break;
        case 'disabled':
          story = 'storybook-radiobutton--disabled'
          break;
  
        default:
          story = 'storybook-radiobutton--normal'
          break;
      }
      return ['storybook-radiobutton', story];
    }
  }
  