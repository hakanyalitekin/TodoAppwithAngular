import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 model = new Model();

 getUser(){
   return this.model.user;
 };

 getItems(){
   //Sadece false olanları listelemek için filtreledik.
   return this.model.items.filter(item=>!item.action);
 }
}
