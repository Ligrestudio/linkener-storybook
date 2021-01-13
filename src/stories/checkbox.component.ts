/* control para checked */

import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'storybook-checkbox',
  template: `<label
    type="checkbox"
    [ngClass]="classes"
    class="checkbox__container txt-label">
    <span class="checkbox__label">{{ label }}</span>
    <input type="checkbox" checked="checked">
    <span class="checkmark"></span>
  </label>`,
  styleUrls: ['./checkbox.css'],
})
export default class CheckboxComponent {

  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  type: string = 'storybook-checkbox--normal';

  /*


  /*
   * @required
   */
  @Input()
  label = 'Checkbox label';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter < Event > ();


  public get classes(): string[] {

    let story;
    switch (this.type) {
      case 'normal':
        story = 'storybook-checkbox--normal'
        break;
      case 'indeterminate':
        story = 'storybook-checkbox--indeterminate'
        break;
      case 'disabled':
        story = 'storybook-checkbox--disabled'
        break;
      case 'noLabel':
        story = 'storybook-checkbox--noLabel'
        break;
    

      default:
        story = 'storybook-checkbox--normal'
        break;
    }
    return ['storybook-checkbox', story];
  }
}
