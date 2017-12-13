import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatButtonModule,
         MatCheckboxModule,
         MatCardModule,
         MatFormFieldModule,
         MatInputModule,
         MatIconModule,
         MatDialogModule,
         MatToolbarModule,
         MatMenuModule,
         MatDatepickerModule,
         MatChipsModule,
         MatSelectModule,
         MatExpansionModule,
         MatAutocompleteModule,
         MatTooltipModule,
         MatSliderModule,
         MatGridListModule
         
        } from '@angular/material';
import {FlexLayoutModule}  from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    FlexLayoutModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule,
    MatDatepickerModule,
    MatChipsModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
