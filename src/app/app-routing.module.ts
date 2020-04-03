import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExpressionBesoinComponent} from "./gestion-stock/administration/expression-besoin/expression-besoin.component";
import {PersonnelComponent} from "./gestion-stock/administration/personnel/personnel.component";
import {EntiteAdministrativeComponent} from "./gestion-stock/administration/entite-administrative/entite-administrative.component";
import {ProduitComponent} from "./gestion-stock/magasin/produit/produit.component";
import {FournisseurComponent} from "./gestion-stock/produit/fournisseur/fournisseur.component";
import {LivraisonComponent} from "./gestion-stock/produit/livraison/livraison.component";
import {StockComponent} from "./gestion-stock/magasin/stock/stock.component";
import {MagasinComponent} from "./gestion-stock/magasin/magasin/magasin.component";
import {FamilleProduitComponent} from "./gestion-stock/produit/famille-produit/famille-produit.component";

const routes: Routes = [
  { path: 'ExpressionDeBesoin', component: ExpressionBesoinComponent },
  { path: 'Personnel', component: PersonnelComponent },
  { path: 'EntiteAdministrative', component: EntiteAdministrativeComponent },
  { path: 'Produit', component: ProduitComponent },
  {path: 'FamilleProduit', component: FamilleProduitComponent},
  { path: 'Fournisseur', component: FournisseurComponent },
  { path: 'Livraison', component: LivraisonComponent },
  { path: 'Stock', component: StockComponent },
  { path: 'Magasin', component: MagasinComponent },

];
//A typical Angular Route has two properties:
// path: a string that matches the URL in the browser address bar.
// component: the component that the router should create when navigating to this route.
// This tells the router to match that URL to path: 'heroes' and display the HeroesComponent when the URL is something
// like localhost:4200/ExpressionBesion.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
