import { Component, OnInit } from '@angular/core';
import {EntiteAdministrative} from "../../../controller/model/administration/entite-administrative.model";
import {EntiteAdministrativeService} from "../../../controller/service/entite-administrative.service";
import {Magasin} from "../../../controller/model/magasin/magasin.model";
import {MagasinService} from "../../../controller/service/magasin.service";

@Component({
  selector: 'app-entite-administrative3',
  templateUrl: './entite-administrative3.component.html',
  styleUrls: ['./entite-administrative3.component.css']
})
export class EntiteAdministrative3Component implements OnInit {

  constructor(private entiteAdministrativeService: EntiteAdministrativeService, private magasinService: MagasinService) { }

  ngOnInit(): void {
  }

  get loadedEntite(): EntiteAdministrative {
    return this.entiteAdministrativeService.loadedEntite;
  }
  public findByReference(ref: string): EntiteAdministrative {
    if (ref != null) {
      return this.entiteAdministrativeService.findByReference(ref);
    } else {
      alert('please enter the reference');
    }
  }

  public deleteByReference(magasin: Magasin) {
    this.magasinService.deleteByReference(magasin);
  }

}
