import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail-component/todo-detail-component.component';
import { ItemEditComponent } from './item-edit/item-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
  },
  {
    path: 'detail/:id',
    component: TodoDetailComponent,
  },
  {
    path: 'edit/:id',
    component: ItemEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
