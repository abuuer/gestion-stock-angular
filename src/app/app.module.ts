import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { EntiteAdministrativeComponent } from './gestion-stock/administration/entite-administrative/entite-administrative.component';
import { ExpressionBesoinComponent} from './gestion-stock/administration/expression-besoin/expression-besoin.component';
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
import { ProduitCreateComponent } from './gestion-stock/magasin/produit/produit-create/produit-create.component';
import { ProduitListeComponent } from './gestion-stock/magasin/produit/produit-liste/produit-liste.component';
import { ProduitNavComponent } from './gestion-stock/magasin/produit/produit-nav/produit-nav.component';
import { LivraisonCreateComponent } from './gestion-stock/produit/livraison/livraison-create/livraison-create.component';
import { LivraisonListeComponent } from './gestion-stock/produit/livraison/livraison-liste/livraison-liste.component';
import { LivraisonNaveComponent } from './gestion-stock/produit/livraison/livraison-nav/livraison-nave.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LivraisonDetailListeComponent } from './gestion-stock/produit/livraison/livraison-liste/livraison-detail-liste/livraison-detail-liste.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { ProduitDialogComponent } from './gestion-stock/magasin/produit/produit-dialog/produit-dialog.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {EntiteAdministrative2Component} from "./gestion-stock/administration/entite-administrative2/entite-administrative2.component";
import {EntiteAdministrative3Component} from "./gestion-stock/administration/entite-administrative3/entite-administrative3.component";
import {EntiteAdministrative5Component} from "./gestion-stock/administration/entite-administrative5/entite-administrative5.component";
import {EntiteAdministrative4Component} from "./gestion-stock/administration/entite-administrative4/entite-administrative4.component";
import {Magasin2Component} from "./gestion-stock/magasin/magasin2/magasin2.component";
import {Magasin5Component} from "./gestion-stock/magasin/magasin5/magasin5.component";
import {Magasin4Component} from "./gestion-stock/magasin/magasin4/magasin4.component";
import {Magasin3Component} from "./gestion-stock/magasin/magasin3/magasin3.component";


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
    ProduitCreateComponent,
    ProduitListeComponent,
    ProduitNavComponent,
    LivraisonCreateComponent,
    LivraisonListeComponent,
    LivraisonNaveComponent,
    LivraisonDetailListeComponent,
    ProduitDialogComponent,
    EntiteAdministrative2Component,
    EntiteAdministrative3Component,
    EntiteAdministrative4Component,
    EntiteAdministrative5Component,
    Magasin2Component,
    Magasin3Component,
    Magasin4Component,
    Magasin5Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    Ng2SearchPipeModule


  ],

  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, direction:' LivraisonDetailListeComponent'}}],
  bootstrap: [AppComponent],
  entryComponents: [LivraisonDetailListeComponent],
})
export class AppModule { }
