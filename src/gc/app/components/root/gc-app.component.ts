import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'gc-app',
  styleUrls: [
    './gc-app.component.css'
  ],
  templateUrl: './gc-app.component.html'
})
export class GCAppComponent implements OnInit {
  public name = 'Angular 2 Webpack Starter';

  public ngOnInit() {
    console.log('Initial App State');
  }
}
