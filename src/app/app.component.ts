import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();
  isDisplay = false;

  getUser() {
    return this.model.user;
  }

  getItems() {
    if (this.isDisplay) {
      return this.model.items;
    }
    // Sadece false olanları listelemek için filtreledik.
    return this.model.items.filter(item => !item.action);
  }

  addItem(value) {
    // tslint:disable-next-line: triple-equals
    if (value != '') {
      this.model.items.push(
        new TodoItem(value, false)
      );
    }
  }
}
