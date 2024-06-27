import { Component } from '@angular/core'
import Sidebar from './sidebar.component'
import { RouterOutlet } from '@angular/router'

@Component({
  standalone: true,
  imports: [Sidebar, RouterOutlet],
  selector: 'app-root',
  template: `
    <div class="flex flex-col h-full w-full">
      <div class="flex flex-row h-full w-full">
        <router-outlet></router-outlet>
        <app-sidebar />
      </div>
    </div>
  `,
})
export class AppComponent {}
