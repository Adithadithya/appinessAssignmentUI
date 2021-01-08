import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilters'
})
export class CustomFiltersPipe implements PipeTransform {

  transform(orders: Array<any>,status:string ): Array<any> {
    return orders.filter(order=>order.status==status);
  }

}
