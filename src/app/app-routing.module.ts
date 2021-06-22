import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';



const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { 
    path: 'recipes', 
    loadChildren:() => import('./recipes/recipes.module').then(m => m.RecipesModule),
    // loadChildren: './recipes/recipes.module#RecipesModule'
   },
  {
    path: 'shopping-list',
    // loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'
    loadChildren:() => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule),
  },
  {
    path: 'auth',
    loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule),
    // loadChildren: './auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
