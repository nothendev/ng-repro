import { Component, inject } from '@angular/core'
import { MagicModule } from './magic/magic.module'
import MarkdownIt from 'markdown-it'
import { LucideAngularModule } from 'lucide-angular'

@Component({
  standalone: true,
  imports: [MagicModule, LucideAngularModule],
  selector: 'app-sidebar',
  template: `
    <div
      m-collapsible
      class="w-[350px] flex flex-col space-y-2"
      #collapsible
      open="true"
    >
      <div m-card>
        <div
          m-card-header
          class="flex flex-row items-center w-full justify-between"
        >
          <div m-card-title>Go go go</div>
          <button m-collapsible-trigger m-button variant="ghost">
            <lucide-icon
              [name]="
                collapsible.open() ? 'chevrons-down-up' : 'chevrons-up-down'
              "
            />
          </button>
        </div>
        <div m-collapsible-content m-card-content class="px-6">
          <b>I love (not) Tanstack query angular experimental</b>

            <div
              class="mt-2"
              [innerHtml]="this.mdit.render('# Hellow orld')"
            ></div>
        </div>
      </div>
    </div>
  `,
})
export default class Sidebar {
  mdit = new MarkdownIt()
}
