import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storage:Storage) {
    this.storage.create();
  }

  ngOnInit(){
    this.atualizaLista();
  }

  variavel_lista = [[]];
  texto: string = "";
  aux = 0;
  variavel_lista_preco = [];
  preco: number;

  async adiciona() {
    if (!(this.texto == "")) {
      //this.variavel_lista.push("0", this.texto);

      this.variavel_lista.forEach(item => {
        if(parseInt(item[0]) > this.aux) {
          this.aux = parseInt(item[0]);
        }
      })
      this.aux = this.aux + 1;
      await this.storage.set(this.aux.toString(), this.texto);
      this.atualizaLista();
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

  atualizaLista() {
    this.variavel_lista = [];
    this.storage.forEach((value, key, index) => {
      this.variavel_lista.push([key, value]);
    })
  }

  async remove(indice) {
    //this.variavel_lista.splice(indice, 1)
    await this.storage.remove(indice);
    this.atualizaLista();
  }

  //*ngFor = "let elemento_da_lista of minhaLista" no item
  //[(ngModel)]="texto" no input

}
