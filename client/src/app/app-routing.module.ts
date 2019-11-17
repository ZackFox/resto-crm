import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthComponent } from "./auth/auth.component";
import { NoAuthGuard } from "./core/guards/no-auth.guard";
import { AuthGuard } from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent, 
    canActivate: [AuthGuard],
  },
  {
    path: "dashboard",
    canActivate: [NoAuthGuard],
    component: DashboardComponent,
    children: [],
  },
];


// { path: "", component: HomeComponent },
// { path: "analitics", component: StatsComponent },
// { path: "orders", component: OrdersComponent },
// { path: "categories", component: CatsComponent },

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
