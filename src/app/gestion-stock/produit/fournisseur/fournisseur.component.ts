import { Component, OnInit } from '@angular/core';
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

  get fournisseurSearch(): Fournisseur {
    return this.fournisseurService.fournisseurSearch;
  }

  public findByReference(ref: string): Fournisseur {
    return this.fournisseurService.findByReference(ref);
  }

  get fournisseursLike(): Fournisseur[] {
    return this.fournisseurService.fournisseursLike;
  }

  get fournisseurLike(): Fournisseur {
    return this.fournisseurService.fournisseurLike;
  }
  public findByReferenceLike(ref: string): Array<Fournisseur> {
    return this.fournisseurService.findByReferenceLike(ref);
  }
}
