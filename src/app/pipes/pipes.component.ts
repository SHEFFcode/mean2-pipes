import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-pipes',
  templateUrl: 'pipes.component.html',
  styles: [`
    .pipes {
      margin: 32px;
      padding: 32px;
    }
  `]
})
export class PipesComponent implements OnInit {

  private myValue: string = 'lowercase';
  private date = new Date(2016, 5, 24);

  constructor() { }

  ngOnInit() {
  }

}
