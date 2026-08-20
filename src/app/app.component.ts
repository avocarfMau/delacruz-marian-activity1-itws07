import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonSplitPane, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonListHeader, IonMenuToggle, IonItem, IonIcon,IonLabel, } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { mailOutline, sendOutline, trashOutline } from 'ionicons/icons'
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [RouterLink, IonApp, IonRouterOutlet, IonSplitPane, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonListHeader, IonMenuToggle, IonItem, IonIcon, IonLabel, RouterLinkActive],
})
export class AppComponent {
  constructor() {
    addIcons ({ mailOutline, sendOutline, trashOutline })
  }
}
