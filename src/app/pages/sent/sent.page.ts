import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/angular';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.page.html',
  styleUrls: ['./sent.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton]
})
export class SentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
