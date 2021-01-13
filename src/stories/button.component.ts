import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'storybook-button',
  template: ` <button class="txt-01"
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
    [disabled]="disabled"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
  {{ label }}
  </button>`,
  styleUrls: ['./button.css'],
})
export default class ButtonComponent {

  @Input() 
  disabled: boolean = false;

  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  type: string = 'storybook-button--primary';

  /**
   * What background color to use
   */
  @Input()
  backgroundColor ? : string;

  /**
   * How large should the button be?
   */
  @Input()
  size: string = 'large';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter < Event > ();


  public get classes(): string[] {
    /* const type = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary'; */
    let story;
    switch (this.type) {
      case 'primary':
        story = 'storybook-button--primary'
        break;
      case 'secondary':
        story = 'storybook-button--secondary'
        break;
      case 'tertiary':
        story = 'storybook-button--tertiary'
        break;
      case 'ghost':
        story = 'storybook-button--ghost'
        break;
      case 'danger':
        story = 'storybook-button--danger'
        break;
      case 'tertiary-danger':
        story = 'storybook-button--tertiary-danger'
        break;
      case 'ghost-danger':
        story = 'storybook-button--ghost-danger'
        break;

      default:
        story = 'storybook-button--primary'
        break;
    }
    return ['storybook-button', `storybook-button--${this.size}`, story];
  }
}
