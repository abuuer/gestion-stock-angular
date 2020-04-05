import {Component, OnInit} from '@angular/core';
import {Produit} from "../../../../controller/model/magasin/produit.model";
import {LivraisonService} from "../../../../controller/service/livraison.service";
import {ProduitService} from "../../../../controller/service/produit.service";

import {LivraisonDetail} from "../../../../controller/model/produit/livraison-detail.model";
import {LivraisonDetailService} from "../../../../controller/service/livraison-detail.service";


@Component({
  selector: 'app-livraison-detail',
  templateUrl: './livraison-detail.component.html',
  styleUrls: ['./livraison-detail.component.css'],
})
export class LivraisonDetailComponent implements OnInit {
  private produit: Produit;


  constructor(private livraisonDetailService: LivraisonDetailService, private  livarisonService: LivraisonService, private produitService: ProduitService) {
  }


  ngOnInit(): void {
    this.produitService.findAll();

  }

  get foundedProduit() {
    return this.produitService.foundedProduit;
  }


  get produits(): Array<Produit> {
    return this.produitService.produits;

  }

  get livraisonDetail(): LivraisonDetail {
    return this.livraisonDetailService.livraisonDetail;
  }

  get livraison() {
    return this.livraisonDetailService.livraison;

  }

  addLivraisonDetail() {
    return this.livraisonDetailService.addLivraisonDetail();
  }

  get livraisonDetails(): Array<LivraisonDetail> {
    return this.livraisonDetailService.livraison.livraisonDetails;
  }


  getProduit(event){
 const f=this.produitService.findByReference(event.target.value);
 console.log(f);
 console.log("Ha reference : "+event.target.value);
    this.livraisonDetail.produit =f;


  }


}
