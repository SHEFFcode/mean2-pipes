import { Component, OnInit } from '@angular/core';
import {DoublePipe} from "../double.pipe";

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
  pipes: [DoublePipe]
})
export class PipesComponent implements OnInit {

  private myValue: string = 'lowercase';
  private date = new Date(2016, 5, 24);

  constructor() { }

  ngOnInit() {
  }

}
