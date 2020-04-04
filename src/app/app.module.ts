import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { EntiteAdministrativeComponent } from './gestion-stock/administration/entite-administrative/entite-administrative.component';
import { ExpressionBesoinComponent } from './gestion-stock/administration/expression-besoin/expression-besoin.component';
import { ExpressionBesoinDetailComponent } from './gestion-stock/administration/expression-besoin/expression-besoin-detail/expression-besoin-detail.component';
import { PersonnelComponent } from './gestion-stock/administration/personnel/personnel.component';
import { MagasinComponent } from './gestion-stock/magasin/magasin/magasin.component';
import { ProduitComponent } from './gestion-stock/magasin/produit/produit.component';
import { LivraisonComponent } from './gestion-stock/produit/livraison/livraison.component';
import { LivraisonDetailComponent } from './gestion-stock/produit/livraison/livraison-detail/livraison-detail.component';
import { StockComponent } from './gestion-stock/magasin/stock/stock.component';
import { FournisseurComponent } from './gestion-stock/produit/fournisseur/fournisseur.component';
import { FamilleProduitComponent } from './gestion-stock/produit/famille-produit/famille-produit.component';
import { SideBarComponent } from './gestion-stock/side-bar/side-bar.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { Magasin2Component } from './gestion-stock/magasin/magasin2/magasin2.component';
import { Magasin3Component } from './gestion-stock/magasin/magasin3/magasin3.component';
import { Magasin4Component } from './gestion-stock/magasin/magasin4/magasin4.component';
import { Magasin5Component } from './gestion-stock/magasin/magasin5/magasin5.component';


@NgModule({
  declarations: [
    AppComponent,
    EntiteAdministrativeComponent,
    ExpressionBesoinComponent,
    ExpressionBesoinDetailComponent,
    PersonnelComponent,
    MagasinComponent,
    ProduitComponent,
    LivraisonComponent,
    LivraisonDetailComponent,
    StockComponent,
    FournisseurComponent,
    FamilleProduitComponent,
    SideBarComponent,
    Magasin2Component,
    Magasin3Component,
    Magasin4Component,
    Magasin5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
