import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntiteAdministrativeComponent } from './gestion-stock/administration/entite-administrative/entite-administrative.component';
import { ExpressionBesoinComponent } from './gestion-stock/administration/expression-besoin/expression-besoin.component';
import { ExpressionBesoinDetailComponent } from './gestion-stock/administration/expression-besoin-detail/expression-besoin-detail.component';
import { PersonnelComponent } from './gestion-stock/administration/personnel/personnel.component';
import { MagasinComponent } from './gestion-stock/magasin/magasin/magasin.component';
import { ProduitComponent } from './gestion-stock/magasin/produit/produit.component';
import { LivraisonComponent } from './gestion-stock/produit/livraison/livraison.component';
import { LivraisonDetailComponent } from './gestion-stock/produit/livraison-detail/livraison-detail.component';
import { StockComponent } from './gestion-stock/magasin/stock/stock.component';
import { FournisseurComponent } from './gestion-stock/produit/fournisseur/fournisseur.component';
import { FamilleProduitComponent } from './gestion-stock/produit/famille-produit/famille-produit.component';

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
    FamilleProduitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
