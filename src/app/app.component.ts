import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CommonModule } from '@angular/common';
import { StarPipe } from './star.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsComponent, CommonModule, StarPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pname="Samsung Phone"

  showProducts = true;

  name="Ambition"
  price=20000

  animal="Lion"
  
  changePname(){
    this.pname = "Apple Phone"
  }

  toggleProducts(){
   // if(this.showProducts==true){
   //   this.showProducts = false;
   // }
   //  else{
   //    this.showProducts = true;
   //  }
    this.showProducts = !this.showProducts;
  }
}
