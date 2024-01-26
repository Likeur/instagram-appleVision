import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'home',
        title:'instagram-appleVision',
        loadComponent: () => import('./components/home/home.component')
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    }
];
