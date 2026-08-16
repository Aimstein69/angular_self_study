import { Component,input,output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  imports: [],
  templateUrl: './enfant.html',
  styleUrl: './enfant.css',
})
export class Enfant {
  message = input.required<string>();
  nom = input.required<string>();
  
  messageClick= output<string>();

  direBonjour():void {
    this.messageClick.emit('Bonjour depuis l\'enfant')
  }
}
