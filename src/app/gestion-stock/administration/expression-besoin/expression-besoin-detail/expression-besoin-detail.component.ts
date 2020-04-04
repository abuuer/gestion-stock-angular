import { Component, OnInit } from '@angular/core';
import {AdministrationService} from "../../../../controller/service/administration.service";
import {EntiteAdministrative} from "../../../../controller/model/administration/entite-administrative.model";
import {ExpressionBesoin} from "../../../../controller/model/administration/expression-besoin.model";
import {Personnel} from "../../../../controller/model/administration/personnel.model";
import {ExpressionBesoinDetail} from "../../../../controller/model/administration/expression-besoin-detail.model";
import {Produit} from "../../../../controller/model/magasin/produit.model";

@Component({
  selector: 'app-expression-besoin-detail',
  templateUrl: './expression-besoin-detail.component.html',
  styleUrls: ['./expression-besoin-detail.component.css']
})
export class ExpressionBesoinDetailComponent implements OnInit {

  public selectedValue : String ;
  public selectedSearch : String ;

  constructor(private administrationService : AdministrationService) { }
  ngOnInit(): void {
    this.administrationService.findAllChef();
    this.administrationService.findAllEntite();
    this.administrationService.findAllProduits();
    this.administrationService.findAllExpressions();
  }

  public changeValue(value : String){
    this.selectedValue = value ;
    this.expressionBesoin = null ;
  }
  public changeValueSearch(value : String){
    this.selectedSearch = value ;
  }
  public get entiteAdministrative(): EntiteAdministrative {
    return this.administrationService.entiteAdministrative;
  }
  public get personnel(): Personnel {
    return this.administrationService.personnel;
  }
  public get expressionBesoinDetail(): ExpressionBesoinDetail {
    return this.administrationService.expressionBesoinDetail;
  }

  public get expressionBesoin(): ExpressionBesoin {
    return this.administrationService.expressionBesoin;
  }
  public set expressionBesoin(value: ExpressionBesoin) {
    this.administrationService.expressionBesoin = value;
  }
  get produit(): Produit {
    return this.administrationService.produit ;
  }

  get produits(): Array<Produit> {
    return this.administrationService.produits;
  }

  get chefs(): Array<Personnel> {
    return this.administrationService.chefs;
  }

  get entiteAdmins(): Array<EntiteAdministrative> {
    return this.administrationService.entiteAdmins;
  }

  get expressionBesoins(): Array<ExpressionBesoin> {
    return this.administrationService.expressionBesoins;
  }
  save (){
    return this.administrationService.save();
  }
  addProd() {
    return this.administrationService.addProd();
  }
 /* showResults(expressionBesoin : ExpressionBesoin){
      this.administrationService.findAllExpressions();
  }*/

  public deleteByReference(expressionBesion : ExpressionBesoin){
    return this.administrationService.deleteByReference(expressionBesion);
  }
  public showfindByRef(expressionBesoin : ExpressionBesoin){
    return this.administrationService.findByReference(expressionBesoin);
  }
  public findBydateExpressionBesoin(expressionBesoin : ExpressionBesoin) {
    return this.administrationService.findBydateExpressionBesoin(expressionBesoin);
  }
  public findByChef(expressionBesoin : ExpressionBesoin) {
    return this.administrationService.findByChef(expressionBesoin);
  }
  get foundedByREference(): ExpressionBesoin {
    return this.administrationService.foundedByREference;
  }

  }
