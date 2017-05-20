import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {HttpClientService} from "../http-client.service";

@Component({
    selector: 'fd-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

    dominio: String;

    @Output()
    localizacao: EventEmitter<any> = new EventEmitter<any>();

    constructor(private httpClient: HttpClientService) {
    }

    ngOnInit() {
    }

    pesquisar(): void {
        this.httpClient
            .get('http://ip-api.com/json/' + this.dominio)
            .subscribe(
                (data) => this.localizacao.emit(data),
                (error) => console.error(error)
            );
    }

}
