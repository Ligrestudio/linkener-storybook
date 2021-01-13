/* estados */

import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'storybook-text-input',
  template: `
    <p class="sb-text-input">
    <label class="txt-label form-label" for="fname">{{ label }}</label>
    <input class="input-text txt-01" [disabled]="disabled" type="text" id="fname" name="fname" placeholder= '{{ placeholder }}' >
    <small class="txt-helper form-helper"> {{ helper }} </small>
    </p>`,
  styleUrls: ['./text-input.css'],
})
export default class TextInput {

  @Input()
  disabled: boolean = false;

  @Input()
  label = 'Text input label';

  @Input()
  placeholder = 'Text input placeholder';

  @Input()
  helper = 'Text input helper';

  @Input()
  light = false;

  @Input()
  size: string = 'large';

  /**
   * Button contents
   *
   * @required
   */


  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter < Event > ();


}
