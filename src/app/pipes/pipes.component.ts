import { Component, OnInit } from '@angular/core';
import {DoublePipe} from "../double.pipe";
import {FilterPipe} from "../filter.pipe";

@Component({
  moduleId: module.id,
  selector: 'app-pipes',
  templateUrl: 'pipes.component.html',
  styles: [`
    .pipes {
      margin: 32px;
      padding: 32px;
    }
  `],
  pipes: [DoublePipe, FilterPipe]
})
export class PipesComponent implements OnInit {

  private myValue: string = 'lowercase';
  private date = new Date(2016, 5, 24);
  private values = ['Milk', 'Bread', 'Beans'];

  constructor() { }

  ngOnInit() {
  }

}
