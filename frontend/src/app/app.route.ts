import { Routes } from "@angular/router";
import { DashboardComponent } from "src/app/dashboard/dashboard.component";
import { HomepageComponent } from "./homepage/homepage.component";

const appRoutes: Routes = [

]

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
        children: appRoutes
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    
]