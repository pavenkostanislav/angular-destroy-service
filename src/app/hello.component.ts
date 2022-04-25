import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { takeUntil, interval, Subject } from 'rxjs';
import { DestroyService } from './destroy.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
  providers: [DestroyService],
})
export class HelloComponent implements OnInit, OnDestroy {
  @Input() name: string;
  // notifier = new Subject()
  
  constructor(private destroy$: DestroyService) {}

  ngOnInit() {
    var observable$ = interval(1000);
    observable$
    .pipe(takeUntil(this.destroy$))
    .subscribe((x) => console.log(x));
  }

  ngOnDestroy() {
    // this.notifier.next();
    // this.notifier.complete();
  }
}
