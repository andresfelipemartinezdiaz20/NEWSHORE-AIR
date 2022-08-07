import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'origin'
})

export class OriginPipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {
    //console.log(value);
    //return value;
    const resultPost = [];

    for( const post of value){
      if(post.departureStation.toLowerCase().indexOf(arg)  > -1){
        resultPost.push(post);
      } else if(post.departureStation.indexOf(arg)  > -1){
        resultPost.push(post);
      }
     
    };

    return resultPost;

  }

}
