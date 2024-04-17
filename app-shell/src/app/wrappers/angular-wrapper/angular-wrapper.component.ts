import {
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-angular-wrapper',
  templateUrl: './angular-wrapper.component.html',
  styleUrls: ['./angular-wrapper.component.scss'],
})
export class AngularWrapperComponent {
  @ViewChild('root') root!: ViewContainerRef
  @Input() component: any;

  constructor(private readonly viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
    // Tạo một instance của component được truyền vào và đặt nó vào trong view container
    const compRef = this.viewContainerRef.createComponent(this.component, {});
  }
}
