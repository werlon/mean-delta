import {Component, OnInit} from '@angular/core';
import {Localizacao} from "../model/localizacao.model";

@Component({
    selector: 'fd-historico-page',
    templateUrl: './historico-page.component.html',
    styleUrls: ['./historico-page.component.css']
})
export class HistoricoPageComponent implements OnInit {

    historico: Array<Localizacao> = [
        new Localizacao(-16.701, -49.2668, 'Google', 'www.google.com', '2017-05-20 16:54:00', 'United States'),
        new Localizacao(-16.701, -49.2668, 'Google', 'www.google.com', '2017-05-20 16:54:00', 'United States'),
        new Localizacao(-16.701, -49.2668, 'Google', 'www.google.com', '2017-05-20 16:54:00', 'United States'),
        new Localizacao(-16.701, -49.2668, 'Google', 'www.google.com', '2017-05-20 16:54:00', 'United States'),
        new Localizacao(-16.701, -49.2668, 'Google', 'www.google.com', '2017-05-20 16:54:00', 'United States'),
        new Localizacao(-16.701, -49.2668, 'Google', 'www.google.com', '2017-05-20 16:54:00', 'United States')
    ];

    constructor() {
    }

    ngOnInit() {
    }
}
