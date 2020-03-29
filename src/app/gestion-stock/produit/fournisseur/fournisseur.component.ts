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

  ngOnInit(): void {
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
}
