import { Component, OnInit } from '@angular/core';
import {FamilleProduitService} from "../../../controller/service/famille-produit.service";
import {Familleproduit} from "../../../controller/model/produit/familleproduit.model";
import {Produit} from "../../../controller/model/magasin/produit.model";

@Component({
  selector: 'app-famille-produit',
  templateUrl: './famille-produit.component.html',
  styleUrls: ['./famille-produit.component.css']
})
export class FamilleProduitComponent implements OnInit {

  constructor(private familleProduitService: FamilleProduitService) { }

  ngOnInit(): void {
    this.familleProduitService.findAll();
  }
  get familleProduit(): Familleproduit {
    return this.familleProduitService.familleProduit;
  }

  get familleProduits(): Array<Familleproduit> {
    return this.familleProduitService.familleProduits;
  }

  get produit(): Produit {
    return this.familleProduitService.produit;
  }

  public addProduit() {
    this.familleProduitService.addProduit();
  }

  public save() {
    this.familleProduitService.save();
  }

  public deleteBylibelle(familleProduit: Familleproduit) {
    this.familleProduitService.deleteBylibelle(familleProduit);
  }
}
