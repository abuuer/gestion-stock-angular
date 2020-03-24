import { Component, OnInit } from '@angular/core';
import {AdministrationService} from "../../../../controller/service/administration.service";

@Component({
  selector: 'app-expression-besoin-detail',
  templateUrl: './expression-besoin-detail.component.html',
  styleUrls: ['./expression-besoin-detail.component.css']
})
export class ExpressionBesoinDetailComponent implements OnInit {

  constructor(private administrationService : AdministrationService) { }

  ngOnInit(): void {
  }

}
