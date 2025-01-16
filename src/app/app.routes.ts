import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';

export const routes: Routes = [
    {
        path: 'data-binding',
        component: DataBindingComponent
    },
    {
        path: 'ng-if',
        component: NgIfComponent
    }
];
