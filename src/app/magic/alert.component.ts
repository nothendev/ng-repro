import { Component } from '@angular/core'

@Component({
  selector: '[m-alert]',
  template: ` <ng-content></ng-content> `,
  styles: `
    /* Base */
    :host {
      @apply relative w-full rounded-lg border p-4 [&:has(svg)]:pl-11 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground;
    }
    /* Color variants */
    /* Default */
    :host {
      @apply bg-background text-foreground;
    }
    :host[type='destructive'] {
      @apply border-destructive/50 text-destructive text-destructive dark:border-destructive [&>svg]:text-destructive;
    }
  `,
})
export class AlertComponent {}
