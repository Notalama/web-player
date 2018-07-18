import { MixContainerComponent } from './mix-container/mix-container.component';
import { UploadComponent } from './upload/upload.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/upload', pathMatch: 'full' },
  { path: 'upload', component: UploadComponent },
  { path: 'dj-controller', canActivate: [AuthGuard], canLoad: [AuthGuard], component: MixContainerComponent }
];

@NgModule({
  imports: [
    [RouterModule.forRoot(appRoutes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
