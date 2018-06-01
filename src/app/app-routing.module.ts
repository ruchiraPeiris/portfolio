import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SectionComponent} from './section/section.component';
import {ResumeComponent} from './resume/resume.component';


const routes: Routes = [
  {path: '', component: SectionComponent},
  {path: 'cv', component: ResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
