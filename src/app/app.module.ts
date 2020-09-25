import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AuthentificationComponent } from './Components/authentification/authentification.component';
import { ChartsModule } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import {DragDropDirective} from './drag-drop.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MultiSelectAllModule} from '@syncfusion/ej2-angular-dropdowns';
import {HttpClientModule} from '@angular/common/http';

import {NotifierModule, NotifierOptions} from 'angular-notifier';
import { EnseignantComponent } from './Components/enseignant/enseignant.component';
import { EtudiantComponent } from './Components/etudiant/etudiant.component';

const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12
    },
    vertical: {
      position: 'bottom',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 10000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};
@NgModule({
  declarations: [
    AppComponent,

    AuthentificationComponent,
    DragDropDirective,
    EnseignantComponent,
    EtudiantComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ChartsModule,
    MultiSelectAllModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NotifierModule.withConfig(customNotifierOptions),



  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
