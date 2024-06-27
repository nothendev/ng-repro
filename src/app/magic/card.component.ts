import { Component } from '@angular/core'

@Component({
  selector: '[m-card]',
  template: ` <ng-content></ng-content> `,
  styles: `
    :host {
      @apply rounded-lg border bg-card text-card-foreground shadow-sm;
    }
  `,
})
export class CardComponent {}

@Component({
  selector: '[m-card-header]',
  template: ` <ng-content></ng-content> `,
  styles: `
    :host {
      @apply flex space-y-1.5 p-6;
    }

    :host:not(.flex-row) {
      @apply flex-col;
    }
  `,
})
export class CardHeaderComponent {}

@Component({
  selector: '[m-card-title]',
  template: ` <ng-content></ng-content> `,
  styles: `
    :host {
      @apply text-lg font-semibold leading-none tracking-tight;
    }
  `,
})
export class CardTitleComponent {}

@Component({
  selector: '[m-card-description]',
  template: ` <ng-content></ng-content> `,
  styles: `
    :host {
      @apply text-sm text-muted-foreground;
    }
  `,
})
export class CardDescriptionComponent {}

@Component({
  selector: '[m-card-footer]',
  template: ` <ng-content></ng-content> `,
  styles: `
    :host {
      @apply flex items-center p-6 pt-0;
    }
  `,
})
export class CardFooterComponent {}
