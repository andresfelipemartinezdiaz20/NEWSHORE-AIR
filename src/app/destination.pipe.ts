import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'destination'
})
export class DestinationPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    const resultdestination = [];

    for( const destination of value){
      if(destination.arrivalStation.toLowerCase().indexOf(args)  > -1) {
        resultdestination.push(destination);
      }
      
      if(destination.arrivalStation.indexOf(args)  > -1) {
        resultdestination.push(destination);
      }
     
    };

    return resultdestination;
  }

}


