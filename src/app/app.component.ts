import { Component } from '@angular/core';
import {PipesComponent} from "./pipes/pipes.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [PipesComponent]
})
export class AppComponent {
  title = 'app works!';
}
