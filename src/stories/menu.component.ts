import {
Component,
Input,
Output,
EventEmitter
} from '@angular/core';

@Component({
selector: 'storybook-menu',
template: `<nav class="menu">
  <a class="menu__item"><i class="menu__icon icon-th"></i><span class="menu__txt txt-01">Dashboard</span><i class="menu__icon--expand icon-down-open"></i></a>
  <a class="menu__item"><i class="menu__icon icon-th"></i><span class="menu__txt txt-01">Dispositivos</span></a>
  <a class="menu__item"><i class="menu__icon icon-th"></i><span class="menu__txt txt-01">Calculador</span></a>
  <a class="menu__item menu__item--selected"><i class="menu__icon icon-th"></i><span class="menu__txt txt-01">Personalización</span></a>
  <a class="menu__item"><i class="menu__icon icon-th"></i><span class="menu__txt txt-01">Factura de ejemplo</span></a>
  <a class="menu__item"><i class="menu__icon icon-th"></i><span class="menu__txt txt-01">Factura pública</span></a>
  <a class="menu__item"><i class="menu__icon icon-th"></i><span class="menu__txt txt-01">Búsquedas</span></a>
  <a class="menu__item"><i class="menu__icon icon-th"></i><span class="menu__txt txt-01">Usuarios</span></a>
  <a class="menu__item"><i class="menu__icon icon-th"></i><span class="menu__txt txt-01">Grafos</span></a>
  <a class="menu__item"><i class="menu__icon icon-th"></i><span class="menu__txt txt-01">Tarifas</span></a>
  <a class="menu__item menu__close-sesion"><i class="menu__icon icon-th"></i><span class="menu__txt txt-01">Cerrar sesión</span></a>
</nav>`,
styleUrls: ['./menu.css'],
})
export default class MenuComponent {}
