// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './seguridad/login/login.component';
import { RegisterComponent } from './seguridad/register/register.component';
import { FormfreetimerComponent } from './seguridad/form-freetimer/form-freetimer.component';
import { FormTerminosComponent } from './seguridad/form-terminos/form-terminos.component';
import { FormBothComponent } from './seguridad/form-both/form-both.component';
import { AccountVerificationComponent } from './seguridad/account-verification/account-verification.component';
import { AccountConfimationComponent } from './seguridad/account-confimation/account-confimation.component';
import { SuccessfulVerificationComponent } from './seguridad/successful-verification/successful-verification.component';
import { FailedVerificationComponent } from './seguridad/failed-verification/failed-verification.component';
import { newTaskComponent } from './task/newTask1/newTask.component';
import { newTaskComponent2 } from './task/newTask2/newTask2.component';
import { newTaskComponent3 } from './task/newTask3/newTask3.component';
import { SupportComponent } from './support/supportRequest/support.component';
import { requestComponent } from './support/requestCreate/request.component';
import { SupportListComponent  } from './support/support-list/support-list.component';
import { MenuFreetimerComponent } from './menu/freetimer-menu/menu-freetimer.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'form-freetimer', component: FormfreetimerComponent },
  { path: 'form-terminos', component: FormTerminosComponent },
  { path: 'form-both', component: FormBothComponent },
  { path: 'account-verification', component: AccountVerificationComponent},
  { path: 'account-confirmation', component: AccountConfimationComponent},
  { path: 'successful-verification', component: SuccessfulVerificationComponent},
  { path: 'failed-verification', component: FailedVerificationComponent},
  { path: 'newTask', component: newTaskComponent },
  { path: 'newTask2', component: newTaskComponent2 },
  { path: 'newTask3', component: newTaskComponent3 },
  { path: 'form-freetimer', component: FormfreetimerComponent},
  { path: 'form-terminos', component:FormTerminosComponent},
  { path: 'form-both', component:FormBothComponent},
  { path: 'supportrequest', component: SupportComponent},
  { path: 'requestcreate', component: requestComponent},
  { path: 'menu-freetimer', component: MenuFreetimerComponent},
  { path: 'supportList', component: SupportListComponent},
];
