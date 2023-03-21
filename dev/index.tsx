import { createDevApp } from '@flowr/dev-utils';
import { polyfrostPlugin } from '../src/plugin';

createDevApp().registerPlugin(polyfrostPlugin).render();