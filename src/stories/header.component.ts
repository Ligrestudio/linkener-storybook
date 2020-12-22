import {
Component,
Input,
Output,
EventEmitter
} from '@angular/core';

@Component({
selector: 'storybook-header',
template: `<header>
  <div class="flex">
    <button class="button--ico"><i class="icon-menu"></i></button>
    <a class="header__logo" href="/"><img class="header__logo--img" src="./assets/logo.png"></a>
    <button class="button--ico"><i class="icon-th"></i></button>
    <h1 class="header__title heading-02 bold">Título de página</h1>
  </div>
  <div class="header__utilities flex">
    <div class="header__utilities--page flex">
      <button class="button--ico"><i class="icon-th"></i></button>
      <button class="button--ico"><i class="icon-th"></i></button>
      <button class="button--ico"><i class="icon-th"></i></button>
    </div>

    <div class="header__utilities--general flex">
      <button class="button--ico"><i class="icon-th"></i></button>
      <button class="button--ico"><i class="icon-th"></i></button>
      <button class="button--ico"><i class="icon-th"></i></button>
    </div>
  </div>


</header>`,
styleUrls: ['./header.css'],
})
export default class HeaderComponent {}
