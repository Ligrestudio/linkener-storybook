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
   * Primary: utilizar para acción principal, una sola vez por acción o pantalla.
   * Secondary: utilizar solo como acompañamiento del tipo Primary, y solo para acciones secundarias. 
   * Tertiary: como acompañamiento de Primary si hay más de una acción no destructiva, y solo para acciones menos importantes. Utilizar Tertiary o Ghost cuando hay más de un CTA en una sola pantalla.
   * Danger: para acciones destructivas. 
   * Ghost: para las acciones menos destacadas. Los botones-icono tienen el tipo Ghost.
   */
  @Input()
  type: string = 'storybook-button--primary';

  /**
   * Dejar el color seleccionado por el tipo
   */
  @Input()
  backgroundColor ? : string;

  /**
   * Large por defecto. Small y Medium para botones en línea con otros componentes de diferente tamaño, o si no hay suficiente esacio vertical. Full bleed para botones que necesitan todo el espacio vertical (individual o compartido), por ejemplo en modales o paneles laterales.
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
