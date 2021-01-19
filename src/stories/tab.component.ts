import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-tab',
  template: ` <button
    type="tab"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./tab.css'],
})
export default class TabComponent {
  /**
   * Tab activa
   */
  @Input()
  active = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Tab';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.active ? 'storybook-tab--active' : 'storybook-tab--normal';

    return ['storybook-tab', mode];
  }
}
