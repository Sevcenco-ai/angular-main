import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/screens/home/home.component";
import {AudioComponent} from "./components/screens/audio/audio.component";
import {GadgetsComponent} from "./components/screens/gadgets/gadgets.component";
import {GamingComponent} from "./components/screens/gaming/gaming.component";
import {LaptopsComponent} from "./components/screens/laptops/laptops.component";
import {PhonesComponent} from "./components/screens/phones/phones.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'audio',
    component: AudioComponent
  },
  {
    path: 'gadgets',
    component: GadgetsComponent
  },
  {
    path: 'gaming',
    component: GamingComponent
  },
  {
    path: 'computers_and_laptops',
    component: LaptopsComponent
  },
  {
    path: 'phones_and_tablets',
    component: PhonesComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
