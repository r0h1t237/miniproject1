import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlinesListComponent } from './airlines-list/airlines-list.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';

const routes: Routes = [
  {path:'airlines',component:AirlinesListComponent},
  {path:'bookDetails/:bookId',component:BookTicketComponent},
  {path:'**',redirectTo:'airlines'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
