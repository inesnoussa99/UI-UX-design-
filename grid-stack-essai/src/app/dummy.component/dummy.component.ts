import { Component, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { BaseWidget } from 'gridstack/dist/angular';

@Component({
  selector: 'app-button',
  template: `<button class="btn">Click me</button>`
})
export class ButtonComponent extends BaseWidget implements OnDestroy {
  constructor() { super(); console.log('button created'); }
  ngOnDestroy() { console.log('button destroyed'); }
}
@Component({
  selector: 'app-text-area',
  template: `<textarea rows="4" cols="30" placeholder="Your text here..."></textarea>`
})
export class TextAreaComponent extends BaseWidget implements OnDestroy {
  constructor() { super(); console.log('text area created'); }
  ngOnDestroy() { console.log('text area destroyed'); }
}
@Component({
  selector: 'app-input',
  template: `<input type="text" placeholder="Enter text"/>`
})
export class InputComponent extends BaseWidget implements OnDestroy {
  constructor() { super(); console.log('input created'); }
  ngOnDestroy() { console.log('input destroyed'); }
}
@Component({
  selector: 'app-select',
  template: `
    <select>
      <option value="">Choose an option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
  `
})
export class SelectComponent extends BaseWidget implements OnDestroy {
  constructor() { super(); console.log('select created'); }
  ngOnDestroy() { console.log('select destroyed'); }
}
@Component({
  selector: 'app-image',
  template: `<img src="https://via.placeholder.com/150" alt="placeholder image">`
})
export class ImageComponent extends BaseWidget implements OnDestroy {
  constructor() { super(); console.log('image created'); }
  ngOnDestroy() { console.log('image destroyed'); }
}
@Component({
  selector: 'app-table',
  template: `
    <table border="1">
      <thead><tr><th>Name</th><th>Age</th></tr></thead>
      <tbody>
        <tr><td>Alice</td><td>30</td></tr>
        <tr><td>Bob</td><td>25</td></tr>
      </tbody>
    </table>
  `
})
export class TableComponent extends BaseWidget implements OnDestroy {
  constructor() { super(); console.log('table created'); }
  ngOnDestroy() { console.log('table destroyed'); }
}









