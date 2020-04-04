import { Component, OnInit } from '@angular/core';
import { AdministrationService } from 'src/app/controller/service/administration.service';

@Component({
  selector: 'app-expression-besoin',
  templateUrl: './expression-besoin.component.html',
  styleUrls: ['./expression-besoin.component.css']
})
export class ExpressionBesoinComponent implements OnInit {

  constructor(private administrationService : AdministrationService) { }




  ngOnInit(): void {
  }

}
