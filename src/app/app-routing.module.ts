import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { OwnerComponent } from './owner/owner.component';
import { LoginComponent } from './login/login.component';
import { PetTypeComponent } from './pet-type/pet-type.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'owner', canActivate:[AuthGuardGuard], component: OwnerComponent },
  { path: 'petTypes', canActivate:[AuthGuardGuard], component: PetTypeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
