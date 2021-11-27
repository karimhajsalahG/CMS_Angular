import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { CreateprojectComponent } from './createproject/createproject.component';
import { AllprojectComponent } from './allproject/allproject.component';

const approuter =[
  {path:"home",component:HomeComponent},
  {path:"create",component:CreateprojectComponent},
  {path:"all",component:AllprojectComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(approuter)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
