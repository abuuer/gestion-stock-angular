import {Component, OnInit} from '@angular/core';
import {ProduitService} from "../../../controller/service/produit.service";
import {Produit} from "../../../controller/model/produit.model";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }


}
