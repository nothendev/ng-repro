import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  Input,
  Optional,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  inject,
  signal,
} from '@angular/core'

let idCounter = 0

@Component({
  selector: '[m-collapsible]',
  template: ` <ng-content /> `,
  host: {
    '[attr.data-open]': 'open()',
    '[attr.disabled]': 'm_disabled',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CollapsibleComponent {
  private c = inject(ChangeDetectorRef)
  id = signal(`m-collapsible-${++idCounter}`)

  open = signal(false)

  @Input({ transform: booleanAttribute, alias: 'open' })
  set open_(open: boolean) {
    this.open.set(open)
  }

  @Input({ transform: booleanAttribute, alias: 'm-disabled' })
  m_disabled = false

  toggle() {
    this.open.update((open) => !open)
    this.c.markForCheck()
  }
}

@Directive({
  selector: '[m-collapsible-trigger]',
  host: {
    '[attr.data-open]': 'open()',
    '[attr.disabled]': 'm_disabled()',
    '[attr.aria-expanded]': 'open()',
    '[attr.aria-controls]': 'id()',
    '(click)': 'toggle()',
  },
})
export class CollapsibleTriggerDirective {
  private c: CollapsibleComponent

  constructor(@Optional() c?: CollapsibleComponent) {
    if (c) this.c = c
    else
      throw new Error('m-collapsible-trigger must be used inside m-collapsible')
  }

  open() {
    return this.c.open()
  }

  m_disabled() {
    return this.c.m_disabled
  }

  id() {
    return this.c.id()
  }

  toggle() {
    this.c.toggle()
  }
}

@Component({
  selector: '[m-collapsible-content]',
  host: {
    '[hidden]': '!open()',
    '[attr.data-open]': 'open()',
    '[style]': 'computedStyles()',
    '[id]': 'id()',
  },
  template: ` <ng-content /> `,
})
export class CollapsibleContentComponent implements AfterContentInit {
  private c = inject(CollapsibleComponent)
  private el = inject(ElementRef)
  private height = signal(0)
  private width = signal(0)

  open() {
    return this.c.open()
  }

  computedStyles = computed(() => {
    const height = this.height()
    const width = this.width()
    return {
      '--radix-collapsible-content-height': height ? `${height}px` : undefined,
      '--radix-collapsible-content-width': width ? `${width}px` : undefined,
    }
  })

  id() {
    return this.c.id()
  }

  ngAfterContentInit() {
    if (typeof this.el.nativeElement.getBoundingClientRect !== 'function')
      return
    const rect = this.el.nativeElement.getBoundingClientRect()
    if (!rect) return
    this.width.set(rect.width)
    this.height.set(rect.height)
  }
}
