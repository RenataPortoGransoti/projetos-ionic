import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  variavel_lista = [];
  variavel_lista_preco = [];
  texto: string = "";
  preco: number;

  adiciona() {
    if (!(this.texto == "")) {
      this.variavel_lista.push(this.texto);
      this.texto = "";
    }


      if (!(this.preco == 0)) {
        this.variavel_lista_preco.push(this.preco);
        this.preco = 0;
      }
      else{
        this.variavel_lista_preco.push(0.00);
        this.preco = 0;
      }

      /*
    if (this.texto == "") {
    } else{
      this.variavel_lista.push(this.texto);
      this.texto = "";
    }*/

  }

  remove(indice) {
    this.variavel_lista.splice(indice, 1)
    this.variavel_lista_preco.splice(indice, 1)  }

  //*ngFor = "let elemento_da_lista of minhaLista" no item
  //[(ngModel)]="texto" no input

}
