import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../../../controller/service/produit.service";
import {Fournisseur} from "../../../controller/model/produit/fournisseur.model";
import {FournisseurService} from "../../../controller/service/fournisseur.service";

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  constructor(private fournisseurService: FournisseurService) { }

  public deleteByReference(fournisseur: Fournisseur) {
    this.fournisseurService.deleteByReference(fournisseur);
  }

  ngOnInit(): void {
    this.fournisseurService.findAll();
  }
  get fournisseur(): Fournisseur {
    return this.fournisseurService.fournisseur;
  }
  public save() {
    return this.fournisseurService.save();
  }

  public validateFournisseur(): boolean {
    return this.fournisseurService.validateFournisseur();
  }

  get fournisseurs(): Array<Fournisseur> {
    return this.fournisseurService.fournisseurs;
  }



}
