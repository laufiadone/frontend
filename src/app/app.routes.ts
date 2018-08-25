import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AbmComponent } from './components/abm/abm.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomeComponent
        },
        {
          path: 'abm',
          component: AbmComponent
        }
      ],
      { useHash: true }
    )
  ],
  exports: [RouterModule],
  providers: []
})
export class APP_ROUTING {}
