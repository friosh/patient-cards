import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {appReducer} from './store/app.reducer';
import {AppEffects} from './store/app.effects';
import {HttpClientModule} from '@angular/common/http';
import { PatientNamePipe } from './patient-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PatientNamePipe
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({app: appReducer}),
    EffectsModule.forRoot([AppEffects]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
