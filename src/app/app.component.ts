import { Component, OnInit, VERSION } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  flag: boolean = true;

  ngOnInit() {
    var observable$ = interval(5000);
    observable$.subscribe(() => this.flag = !this.flag);
  }
}
