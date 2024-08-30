import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star',
  standalone: true
})
export class StarPipe implements PipeTransform {

  transform(value: unknown, ...args: number[]): unknown {
    let stars = ""
    for(let i=1; i<=args[0]; i++){
      stars += "*"
    }
    console.log(value,args);
    return value + stars;
  }

}
