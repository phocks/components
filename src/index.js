import { Elena } from "@elenajs/core";

/** ░█ [ELENA]: Composite Component example */
export default class Stack extends Elena(HTMLElement) {
  static tagName = "my-stack";
  static props = ["direction"];

  direction = "column";
}

Stack.define();