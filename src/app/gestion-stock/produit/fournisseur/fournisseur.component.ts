import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../../../controller/service/produit.service";
import {Fournisseur} from "../../../controller/model/produit/fournisseur.model";

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  constructor(private produitService: ProduitService) { }

  public deleteByReference(fournisseur: Fournisseur) {
    this.produitService.deleteByReference(fournisseur);
  }

  ngOnInit(): void {
    this.produitService.findAll();
  }
  get fournisseur(): Fournisseur {
    return this.produitService.fournisseur;
  }
  public save() {
    return this.produitService.save();
  }

  public validateFournisseur(): boolean{
    return this.produitService.validateFournisseur();
  }

  get fournisseurs(): Array<Fournisseur> {
    return this.produitService.fournisseurs;
  }



}
