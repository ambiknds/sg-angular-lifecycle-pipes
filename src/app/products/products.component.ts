import { Component, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

   @Input() name = "";
   data = "Thor"
  
  constructor(){
    console.log("Constructor")
  }
  ngOnChanges(changes: SimpleChanges): void{
    console.log("Onchange is Called ", changes)
  }
  ngOnInit(): void{
    console.log("OnInit is Called")
  }
  ngAfterViewInit(): void{
    console.log("AfterViewInit is Called")
  }
  ngAfterContentChecked(): void{
    console.log("After component rerender is Called")
  }
  ngOnDestroy(): void{
    console.log("Component Destroyed")
  }
  
  changeData(){
    this.data = "Iron Man"
  }
}
// how to remove specific component.