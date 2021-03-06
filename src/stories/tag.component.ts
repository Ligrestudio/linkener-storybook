import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'storybook-tag',
  template: ` <span class="txt-label"
      [ngClass]="classes"
    >
    {{ label }}
  </span>`,
  styleUrls: ['./tag.css'],
})
export default class TagComponent {


  /**
   * Usar tag grey por defecto. Los tags de colores están preparados para utilizar inline en tablas. 
   */
  @Input()
  type: string = 'storybook-tag--primary';

  /**
   * Tag contents
   *
   * @required
   */
  @Input()
  label = 'Tag text';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter < Event > ();

  public get classes(): string[] {
    let story;
    switch (this.type) {
      case 'blue':
        story = 'tag--blue'
        break;
      case 'green':
        story = 'tag--green'
        break;
      case 'grey':
        story = 'tag--grey'
        break;
      case 'orange':
        story = 'tag--orange'
        break;
      case 'purple':
        story = 'tag--purple'
        break;
      case 'red':
        story = 'tag--red'
        break;
      case 'yellow':
        story = 'tag--yellow'
        break;

      default:
        story = 'tag--grey'
        break;
    }
    return ['storybook-tag', story];
  }
}
