import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonComponent } from './button.component'
import { SpinnerComponent } from './spinner.component'
import { AlertComponent } from './alert.component'
import {
  CardComponent,
  CardHeaderComponent,
  CardTitleComponent,
  CardDescriptionComponent,
  CardFooterComponent,
} from './card.component'
import {
  CollapsibleComponent,
  CollapsibleContentComponent,
  CollapsibleTriggerDirective,
} from './collapsible.component'

@NgModule({
  declarations: [
    AlertComponent,
    ButtonComponent,
    SpinnerComponent,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardFooterComponent,
    CollapsibleComponent,
    CollapsibleTriggerDirective,
    CollapsibleContentComponent,
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    ButtonComponent,
    SpinnerComponent,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardFooterComponent,
    CollapsibleComponent,
    CollapsibleTriggerDirective,
    CollapsibleContentComponent,
  ],
})
export class MagicModule {}
