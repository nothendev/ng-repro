import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { mergeApplicationConfig } from '@angular/core';
import { QueryClient, hydrate, provideQueryClient } from '@ngneat/query';
const queryClient = new QueryClient()

//@ts-ignore
hydrate(queryClient, JSON.parse(window.__QUERY_STATE__ as string))

bootstrapApplication(AppComponent, mergeApplicationConfig(appConfig, {
  providers: [
    //@ts-ignore
    provideQueryClient(queryClient)
  ],
}))
  .catch((err) => console.error(err));
