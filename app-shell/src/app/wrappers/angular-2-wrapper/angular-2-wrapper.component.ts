import {
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-angular-2-wrapper',
  templateUrl: './angular-2-wrapper.component.html',
  styleUrls: ['./angular-2-wrapper.component.scss'],
  // standalone: true
})
export class Angular2WrapperComponent {
  @ViewChild('root') root!: ViewContainerRef
  @Input() component: any;

  constructor(private readonly viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
    console.log(2)
    // Tạo một instance của component được truyền vào và đặt nó vào trong view container
    const compRef = this.viewContainerRef.createComponent(this.component, {});
  }
}
