import {
Component,
Input,
Output,
EventEmitter
} from '@angular/core';

@Component({
selector: 'storybook-filter-db',
template: `<div class="filter-db">
    <div class="input__container">
      <i class="input__icon icon-th"></i>
      <input class="input__field  input__field--w-icon txt-01" name="chart-filter" type="text" placeholder="Filtro de búsqueda">
    </div>

  <div class="filter-db__utilities flex">
    <button class=""><i class="icon-th"></i></button>
    <button class=""><i class="icon-th"></i></button>
    <button class=""><i class="icon-th"></i></button>
    <button class=""><i class="icon-th"></i></button>
  </div>
</div>`,
styleUrls: ['./filter-db.css'],
})
export default class FilterDbComponent {}
