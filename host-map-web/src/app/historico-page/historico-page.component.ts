import {Component, OnInit} from '@angular/core';
import {Localizacao} from "../model/localizacao.model";
import {HttpClientService} from "../http-client.service";

@Component({
    selector: 'fd-historico-page',
    templateUrl: './historico-page.component.html',
    styleUrls: ['./historico-page.component.css']
})
export class HistoricoPageComponent implements OnInit {

    historico: Localizacao[];

    constructor(private httpClient: HttpClientService) {
    }

    ngOnInit() {
        this.httpClient
            .get('http://localhost:3000/api/localizacao')
            .subscribe((docs) => {
                this.historico = docs
            });
    }

    excluir(localizacao): void{

        this.httpClient.delete('http://localhost:3000/api/localizacao?id='+localizacao._id)
            .subscribe(
                (ret)=>{
                    //console.log(ret);
                    if(ret.situacao == 'removido'){
                        let index = -1;

                        for( let i = 0; i < this.historico.length; i++ ) {
                            if( this.historico[i] === localizacao ) {
                                index = i;
                                break;
                            }
                        }
                        if( index === -1 ) {
                            alert( "Não encontrado na lista para remover" ); return;
                        }

                        this.historico.splice( index, 1 );
                    }else{
                        alert( "Erro ao tentar remover. Nada será removido" ); return;
                    }

                },
                (err)=>{
                    alert( "Ocorreu um erro ao tentar remover. Nada será removido" ); return;
                });
    }
}
