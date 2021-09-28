import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';

  public num1:number;
  public num2:number;
  public num3:number;

  somar(){
    this.num3 = this.num1 + this.num2;
  }
  sub(){
    this.num3 = this.num1 - this.num2;
  }
  mult(){
    this.num3 = this.num1 * this.num2;
  }
  divide(){
    this.num3 = this.num1 / this.num2;
  }
  reset(){
    this.num3 = 0;
  }
}



