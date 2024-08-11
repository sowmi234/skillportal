import { Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { SkillchoiceComponent } from './skillchoice/skillchoice.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { CategoryComponent } from './category/category.component';
import { TableComponent } from './table/table.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { TaskformComponent } from './taskform/taskform.component';

export const routes: Routes = [
    { path: 'info', component: InfoComponent},
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path :'login',component :LoginComponent},
    {path:'',component: InfoComponent,
        children:[
            {path:'skillchoice',
                component:SkillchoiceComponent
            }
        ]
    },

    { 
        path: '', 
        component: InfoComponent,
        children: [
          { path: 'layout', component: LayoutComponent },
          { path: 'category', component: CategoryComponent } 
        ]
      },
      

    {path:'',component: InfoComponent,
        children:[
            {path:'student',
                component:StudentComponent
            },
            {path:'table',component :TableComponent},
            {path : 'taskform',component : TaskformComponent}
        ]
    },
    { path: 'course-dialog', component: DialogboxComponent, outlet: 'dialog' }, // Add DialogboxComponent route

];
