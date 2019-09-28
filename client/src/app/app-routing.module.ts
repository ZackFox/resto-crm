import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthComponent } from "./auth/auth.component";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
  },
  {
    path: "dashboard",
    canActivate: [],
    component: DashboardComponent,
    children: [
      // { path: "", component: HomeComponent },
      // { path: "analitics", component: StatsComponent },
      // { path: "orders", component: OrdersComponent },
      // { path: "categories", component: CatsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
