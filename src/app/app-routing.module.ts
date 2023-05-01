import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPeopleComponent } from './people/form-people/form-people.component';
import { FormVentaComponent } from './venta/form-venta/form-venta.component';
import { FormConcesionarioComponent } from './concesionario/form-concesionario/form-concesionario.component';
import { FormVehiculoComponent } from './vehiculo/form-vehiculo/form-vehiculo.component';


const appRoutes: Routes = [
  { path: 'usuarios', component: FormPeopleComponent },
  { path: 'concesionarios', component: FormConcesionarioComponent },
  { path: 'vehiculos', component: FormVehiculoComponent },
  { path: 'ventas', component: FormVentaComponent },

  //{ path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
