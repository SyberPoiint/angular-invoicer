import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/documents', pathMatch: 'full' },
  { path: 'documents', loadChildren: './documents/documents.module#DocumentsModule' },
  { path: 'customers', loadChildren: './customer-list/customer-list.module#CustomerListModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}