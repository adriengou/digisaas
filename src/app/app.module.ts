import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { HighlightDirective } from './highlight.directive';
import { MainContentComponent } from './components/main-content/main-content.component';
import { RemoveDirective } from './remove.directive';
import { SideBarLeftComponent } from './components/side-bar-left/side-bar-left.component';
import { SideBarRightComponent } from './components/side-bar-right/side-bar-right.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExoComponent } from './components/exo/exo.component';
import { NumbersAveragePipe } from './pipes/numbers-average.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { BirthdateToAgePipe } from './pipes/birthdate-to-age.pipe';
import { TemplateDrivenFormDemoComponent } from './components/template-driven-form-demo/template-driven-form-demo.component';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormDemoComponent } from './components/reactive-form-demo/reactive-form-demo.component';
import { ReactiveFormGroupDemoComponent } from './components/reactive-form-group-demo/reactive-form-group-demo.component';


@NgModule({
  declarations: [AppComponent, CardComponent, HighlightDirective, MainContentComponent, RemoveDirective, SideBarLeftComponent, SideBarRightComponent, NavbarComponent, ExoComponent, NumbersAveragePipe, BirthdateToAgePipe, TemplateDrivenFormDemoComponent, ReactiveFormDemoComponent, ReactiveFormGroupDemoComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,MatInputModule, CommonModule, FormsModule, MatSelectModule, MatButtonModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
