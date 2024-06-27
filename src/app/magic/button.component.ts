import { Component } from '@angular/core'

@Component({
  selector: '[m-button]',
  template: ` <ng-content></ng-content> `,
  styles: `
    /* Base */
    :host {
      @apply inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50;
    }

    /* Color variants */
    :host:not([variant]) {
      @apply bg-primary text-primary-foreground hover:bg-primary/90;
    }

    :host[variant='secondary'] {
      @apply bg-secondary text-secondary-foreground hover:bg-secondary/90;
    }

    :host[variant='success'] {
      @apply bg-success text-success-foreground hover:bg-success/90;
    }

    :host[variant='destructive'] {
      @apply bg-destructive text-destructive-foreground hover:bg-destructive/90;
    }

    :host[variant='outline'] {
      @apply border border-input bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground;
    }

    :host[variant='ghost'] {
      @apply hover:bg-accent hover:text-accent-foreground;
    }

    :host[variant='link'] {
      @apply text-primary-foreground hover:text-primary-foreground;
    }

    /* Size variants */
    /* Default */
    :host {
      @apply h-10 px-4 py-2;
    }

    :host[size='sm'] {
      @apply h-9 rounded-md px-3;
    }

    :host[size='lg'] {
      @apply h-11 rounded-md px-8;
    }

    :host[size='icon'] {
      @apply h-10 w-10;
    }
  `,
})
export class ButtonComponent {}
