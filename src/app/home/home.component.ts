import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


import {
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { Keys } from '@progress/kendo-angular-common';
import { Product } from '../model/model';
import { EditService } from '../edit/edit.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  
})


export class HomeComponent  implements OnInit {
    public view : Observable<GridDataResult>;
    public gridState: State = {
        sort: [],
        skip: 0,
        take: 10
    };

  public gridData: any[] = [

    



    
    {
        ProductID: 1,
        ProductName: 'Jane Eyre',
        UnitPrice: 1800,
        Category: {
            CategoryID: 1,
            CategoryName: 'Books'
        }
    },
    {
      ProductID: 2,
      ProductName: 'Think like a monk',
      UnitPrice: 2000,
      Category: {
          CategoryID: 2,
          CategoryName: 'Books'
      }
  },
  {
    ProductID: 3,
    ProductName: "Life's amazing secrets",
    UnitPrice: 2800,
    Category: {
        CategoryID: 3,
        CategoryName: 'Books'
    }
},
{
  ProductID: 4,
  ProductName: 'Atitude is everything',
  UnitPrice: 1850,
  Category: {
      CategoryID: 4,
      CategoryName: 'Books'
  }
},
    {
        /*...*/
    }
];

public changes: any = {};

  constructor(private formBuilder: FormBuilder, public editService: EditService) { }

  public ngOnInit(): void {

    this.view = this.editService.pipe(map(data => process(data, this.gridState)));

        this.editService.read();
  }
  public onStateChange(state: State) {
    this.gridState = state;

    this.editService.read();
}

public cellClickHandler({ sender, rowIndex, columnIndex, dataItem, isEdited }) {
    if (!isEdited) {
        sender.editCell(rowIndex, columnIndex, this.createFormGroup(dataItem));
    }
}

public cellCloseHandler(args: any) {
    const { formGroup, dataItem } = args;

    if (!formGroup.valid) {
         // prevent closing the edited cell if there are invalid values.
        args.preventDefault();
    } else if (formGroup.dirty) {
        if (args.originalEvent && args.originalEvent.keyCode === Keys.Escape) {
            return;
        }

        this.editService.assignValues(dataItem, formGroup.value);
        this.editService.update(dataItem);
    }
}

public addHandler({ sender }) {
    sender.addRow(this.createFormGroup(new Product()));
}

public cancelHandler({ sender, rowIndex }) {
    sender.closeRow(rowIndex);
}

public saveHandler({ sender, formGroup, rowIndex }) {
    if (formGroup.valid) {
        this.editService.create(formGroup.value);
        sender.closeRow(rowIndex);
    }
}

public removeHandler({ sender, dataItem }) {
    this.editService.remove(dataItem);

    sender.cancelCell();
}

public saveChanges(grid: any): void {
    grid.closeCell();
    grid.cancelCell();

    this.editService.saveChanges();
}

public cancelChanges(grid: any): void {
    grid.cancelCell();

    this.editService.cancelChanges();
}

public createFormGroup(dataItem: any): FormGroup {
    return this.formBuilder.group({
        'ProductID': dataItem.ProductID,
        'ProductName': [dataItem.ProductName, Validators.required],
        'UnitPrice': dataItem.UnitPrice,
        
    });
}

}

