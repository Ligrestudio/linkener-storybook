import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-tab-group',
  template: ` <div class="tab-group">
    <storybook-tab></storybook-tab>
    <storybook-tab class="active"></storybook-tab>
    <storybook-tab></storybook-tab>
    <storybook-tab></storybook-tab>
    <storybook-tab></storybook-tab>
    <storybook-tab></storybook-tab>
    <storybook-tab></storybook-tab>
    <storybook-tab></storybook-tab>
    <storybook-tab></storybook-tab>
    <storybook-tab></storybook-tab>
    <storybook-tab></storybook-tab>
    <i class="tab__add icon-th"></i>
  </div>`,
  styleUrls: ['./tab-group.css'],
})
export default class TabGroupComponent {}
