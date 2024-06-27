import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { mergeApplicationConfig } from '@angular/core';
import { provideQueryClient } from '@ngneat/query';
import { QueryClient } from '@tanstack/query-core'

const bootstrap = (queryClient: QueryClient) => () => bootstrapApplication(AppComponent, mergeApplicationConfig(config, {
  // @ts-ignore
  providers: [provideQueryClient(queryClient)]
}));

export default bootstrap;
