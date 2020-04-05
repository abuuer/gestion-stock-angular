import { Component, OnInit } from '@angular/core';
import {Livraison} from "../../../controller/model/produit/livraison.model";
import {LivraisonService} from "../../../controller/service/livraison.service";

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit {

  constructor(private  livraisonService: LivraisonService) { }

  ngOnInit(): void {
  }
  get livraison(): Livraison {
    return this.livraisonService.livraison;
  }

}
