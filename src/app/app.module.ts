import { AuthGuardService } from './auth-guard.service';
import { AudioService } from './audio.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UploadComponent } from './upload/upload.component';
import { MixControllerComponent } from './mix-container/mix-controller/mix-controller.component';
import { MixContainerComponent } from './mix-container/mix-container.component';
import { SliderModule } from 'primeng/slider';
import { AuthGuard } from './auth-guard';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    MixControllerComponent,
    MixContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    SliderModule
  ],
  providers: [AudioService, AuthGuard, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
