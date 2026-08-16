import { Component } from '@angular/core';
import { Enfant } from '../enfant/enfant';

@Component({
  selector: 'app-parent',
  imports: [Enfant],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  message = 'boujour depuis le parent'
  nom = "lucas"
  messageRecu='';
  recevoirMessage(message:string):void{
    this.messageRecu=message
  }
}
