import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoAPComponent } from './componentes/logo-ap/logo-ap.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FotterComponent } from './componentes/fotter/fotter.component';
import { HttpClientModule } from '@angular/common/http';
import { HomesComponent } from './componentes/home/homes.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia.component';
import { interceptorProvider } from './service/interceptor-service';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto.component';
import { NuevaSkillComponent } from './componentes/skills/nueva-skill.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion.component';
import { EditarSkillComponent } from './componentes/skills/editar-skill.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    RedesComponent,
    BannerComponent,
    AcercadeComponent,
    EducacionComponent,
    ExperienciaComponent,
    SkillsComponent,
    ProyectosComponent,
    FotterComponent,
    HomesComponent,
    NuevaExperienciaComponent,
    LoginComponent,
    EditarExperienciaComponent,
    NuevoProyectoComponent,
    EditarProyectoComponent,
    NuevaSkillComponent,
    NuevaEducacionComponent,
    EditarEducacionComponent,
    EditarSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
