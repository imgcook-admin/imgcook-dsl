import webData from './data/web';
import weexData from './data/weex';
import { Processor } from './lib/processor';

export const web = new Processor(webData);
export const weex = new Processor(weexData);
export const Process = Processor;

export const unifyClassName = require('./lib/unifyClassName');
export const clearInheritedAttr = require('./lib/clearInheritedAttr');
