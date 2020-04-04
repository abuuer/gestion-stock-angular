import { Component, OnInit } from '@angular/core';
import {AdministrationService} from "../../../controller/service/administration.service";
import {Personnel} from "../../../controller/model/administration/personnel.model";

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {

  constructor(private administrationService : AdministrationService) { }
  private _selectedValue : String ;


  ngOnInit(): void {
  }

  public changeValue(value : String): String {
    this._selectedValue = value ;
    return this._selectedValue;
  }

  get selectedValue(): String {
    return this._selectedValue;
  }

  public get personnel(): Personnel {
    return this.administrationService.personnel;
  }
  get chefs(): Array<Personnel> {
    return this.administrationService.chefs;
  }
  public get personnels(): Array<Personnel>{
    return this.administrationService.personnels;
  }
}
