import { Injectable } from '@angular/core';
import { EntiteAdministrative } from '../model/entite-administrative.model';

import { Personnel } from '../model/personnel.model';
import { ExpressionBesionDetail } from '../model/expression-besion-detail.model';
import {ExpressionBesion} from "../model/expression-besion.model";

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  private _entiteAdministrative : EntiteAdministrative;
  private _expressionBesion : ExpressionBesion;
  private _expressionBesionDetail : ExpressionBesionDetail;
  private _personnel : Personnel;


  public get entiteAdministrative(): EntiteAdministrative {
    return this._entiteAdministrative;
  }
  public set entiteAdministrative(value: EntiteAdministrative) {
    this._entiteAdministrative = value;
  }


  get expressionBesion(): ExpressionBesion {
    return this._expressionBesion;
  }

  set expressionBesion(value: ExpressionBesion) {
    this._expressionBesion = value;
  }

  public get expressionBesionDetail(): ExpressionBesionDetail {
    return this._expressionBesionDetail;
  }
  public set expressionBesionDetail(value: ExpressionBesionDetail) {
    this._expressionBesionDetail = value;
  }

  public get personnel(): Personnel {
    return this._personnel;
  }
  public set personnel(value: Personnel) {
    this._personnel = value;
  }
}
