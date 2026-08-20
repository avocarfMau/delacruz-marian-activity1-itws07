import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/angular';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.page.html',
  styleUrls: ['./trash.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton]
})
export class TrashPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
