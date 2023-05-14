import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomesComponent } from './componentes/home/homes.component';
import { LoginComponent } from './componentes/login/login.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto.component';
import { NuevaSkillComponent } from './componentes/skills/nueva-skill.component';
import { EditarSkillComponent } from './componentes/skills/editar-skill.component';

const routes: Routes = [
  {path:'', component: HomesComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevaexp', component: NuevaExperienciaComponent},
  {path: 'editexp/:id', component: EditarExperienciaComponent},
  {path: 'editedu/:id', component: EditarEducacionComponent},
  {path: 'nuevaedu', component: NuevaEducacionComponent},
  {path: 'editproyectos/:id', component: EditarProyectoComponent},
  {path: 'nuevoproyectos', component: NuevoProyectoComponent},
  {path: 'editskill/:id', component: EditarSkillComponent},
  {path: 'nuevaskill', component: NuevaSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
