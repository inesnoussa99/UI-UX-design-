import { ApplicationConfig, provideEnvironmentInitializer } from '@angular/core';

// TEST local testing
// import { GridstackComponent } from './gridstack.component';
import { GridstackComponent } from 'gridstack/dist/angular';
import { ButtonComponent , TextAreaComponent ,InputComponent,SelectComponent,ImageComponent,TableComponent } from './dummy.component/dummy.component'
export const appConfig: ApplicationConfig = {
  providers: [
    provideEnvironmentInitializer(() => {
      // register all our dynamic components created in the grid
      GridstackComponent.addComponentToSelectorType([ButtonComponent , TextAreaComponent ,InputComponent,SelectComponent,ImageComponent,TableComponent]);
    })
  ]
};