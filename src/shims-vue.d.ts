//import Vue from 'vue';
import Vue, { DirectiveOptions } from 'vue';
import '@/directives';

declare module '*.vue' {
  import Vue from 'vue';
  import '@/directives';
}

declare type GlobalFetch = {
  fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
};
