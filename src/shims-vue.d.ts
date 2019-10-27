//import Vue from 'vue';
import Vue, { DirectiveOptions } from 'vue';
import '@/directives';

declare module '*.vue' {
  import Vue from 'vue';
  import '@/directives';
}