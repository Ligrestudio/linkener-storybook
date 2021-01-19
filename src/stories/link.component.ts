import {
    Component,
    Input,
    Output,
    EventEmitter
  } from '@angular/core';
  
  @Component({
    selector: 'storybook-link',
    template: ` <a class="link"
      type="link"
      (click)="onClick.emit($event)"
      [ngClass]="classes"
    >
    {{ label }} 
  </a>`,
    styleUrls: ['./link.css'],
  })
  export default class LinkComponent {
    /** 
    * Normal: Tipo por defecto. Pueden ir unidos a un icono.
    * Inline: Se utilizan dentro de un párrafo o frase. No deben ir unidos a un icono.
    */
    @Input()
    type: string = 'storybook-link--normal';


    /** 
    * El tamaño debe coincidir con el del texto al que acompañan. Small para labels y helpers, Medium y Large para textos tipo txt-01 y txt-02.
    */
    @Input()
    size: string = 'large';
  
    /**
     * Texto del link
     *
     * @required
     */
    @Input()
    label = 'Link';
    

    /**
     * Optional click handler.
     */
    @Output()
    onClick = new EventEmitter < Event > ();
  
  
    public get classes(): string[] {
      
      return ['storybook-link', `storybook-link--${this.size}`, `storybook-link--${this.type}`];
    }
  }
  