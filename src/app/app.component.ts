import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Primer Programa de Angular';
  numero1: number;
  numero2: number;
  resultado: number;
  /**var:  
   * let: son las que se quedan dentro de los metodos y si salen se destruyen
   * const: son las que utilizan un valor constante y no cambian
   * this: Se utiliza esta palabra de la forma global, si se quita surge un error
   **/

  public operar(op: string): void{
    switch(op){
      case 's': 
        this.resultado = this.numero1 + this.numero2;
        break;
      case 'r':
        this.resultado = this.numero1 - this.numero2;
        break;
      case 'm':
        this.resultado = this.numero1 * this.numero2;
        break;
      case 'd':
        this.resultado = this.numero1 / this.numero2;
        break;
      default:
        this.resultado = 0;
    }
  }

public teclear(e: any): void{
  console.log(e);
  console.log("La tecla que se oprimio fue: "+e.key);
  console.log("La palabra completa es: "+e.target.value);
}
}
