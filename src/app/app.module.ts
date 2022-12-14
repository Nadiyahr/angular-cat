import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ApiService } from './shared/api.service';
import { breedReducer } from './shared/store/breeds/breeds.reducer';
import { widthReucer } from './shared/store/width/width.reucer';
import { BreedEffect } from './shared/store/breeds/breeds.effect';
import { reducer } from './shared/store/app.reducer';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SelectComponent } from './select/select.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { LimitSelectComponent } from './limit-select/limit-select.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AcordionCardComponent } from './acordion-card/acordion-card.component';
import { CardBreedIdComponent } from './card-breed-id/card-breed-id.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { filtredReucer } from './shared/store/filtred/filtred.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectComponent,
    CardComponent,
    CardListComponent,
    LimitSelectComponent,
    SideNavComponent,
    AcordionCardComponent,
    CardBreedIdComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatSelectModule,
    MatCardModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([]),
    StoreModule.forFeature('breedslist', breedReducer),
    StoreModule.forFeature('width', widthReucer),
    StoreModule.forFeature('filtredlist', filtredReucer),
    StoreModule.forFeature('getstate', reducer),
    EffectsModule.forFeature([BreedEffect]),
    FontAwesomeModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
