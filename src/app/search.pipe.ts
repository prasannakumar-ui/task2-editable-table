import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(fdata, searchText) {
    if (!searchText) {
      return fdata;
    }
 
      return fdata.filter(
     x =>{ let con=(x.fname.toLowerCase().search(searchText.toLowerCase() ) > -1||x.lname.toLowerCase().search(searchText.toLowerCase() ) > -1);
     return con}
        )
    
  }

}
