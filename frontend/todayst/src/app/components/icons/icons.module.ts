import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { CheckSquare } from 'angular-feather/icons';

@NgModule({
  imports: [FeatherModule.pick({ CheckSquare })],
  exports: [FeatherModule]
})
export class IconsModule {}
