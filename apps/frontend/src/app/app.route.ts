import { Routes } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";

const appRoutes: Routes = [

]

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
        children: appRoutes
    }
]