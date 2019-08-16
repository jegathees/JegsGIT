import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatMenuTrigger, MatIconRegistry } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-jegs-data-grid',
  templateUrl: './jegs-data-grid.component.html',
  styleUrls: ['./jegs-data-grid.component.scss']
})
export class JegsDataGridComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  templateFor: string;
  positionFilter = new FormControl();
  nameFilter = new FormControl();
  weightFilter = new FormControl();
  symbolFilter = new FormControl();
  

  filteredValues = {
    position: '', name: '', weight: '',
    symbol: ''
  };
  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.positionFilter.valueChanges.subscribe((positionFilterValue) => {
      this.filteredValues['position'] = positionFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.nameFilter.valueChanges.subscribe((nameFilterValue) => {
      this.filteredValues['name'] = nameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.weightFilter.valueChanges.subscribe((weightFilterValue) => {
      this.filteredValues['weight'] = weightFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.symbolFilter.valueChanges.subscribe((nameFilterValue) => {
      this.filteredValues['symbol'] = nameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.dataSource.filterPredicate = this.customFilterPredicate();

  }

  applyFilter(filter) {    
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }

  onFilterClick(templateFor: string) {
    this.templateFor = templateFor;
  }

  customFilterPredicate() {
    const myFilterPredicate = (data: PeriodicElement, filter: string): boolean => {

      let searchString = JSON.parse(filter);
      return data.position.toString().trim().indexOf(searchString.position) !== -1 &&
        data.name.toString().trim().toLowerCase().indexOf(searchString.name.toLowerCase()) !== -1 &&
        data.weight.toString().trim().toLowerCase().indexOf(searchString.weight.toLowerCase())!== -1 &&
        data.symbol.toString().trim().toLowerCase().indexOf(searchString.symbol.toLowerCase())!== -1;
    }
    return myFilterPredicate;
  }
  
}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];





/*export class ExampleDataSource extends DataSource<any> {
  paginator: MatPaginator;

  connect(): Observable<Element[]> {
    return of(ELEMENT_DATA);
  }

  disconnect() {}
}*/
