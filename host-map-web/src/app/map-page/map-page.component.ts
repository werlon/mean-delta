import { Component } from '@angular/core';
import {Localizacao} from "../model/localizacao.model";

@Component({
  selector: 'fd-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent {

    localizacao: any = new Localizacao();

    constructor() {
    }

    exibirLocalizacao(localizacao: Localizacao): void {
        this.localizacao = localizacao;
    }

}
