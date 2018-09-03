import { Component } from 'apprun';

let store;

export function initStore<State>(initialState: State) {
  if (!store) {
    store = initialState;
  }
}

export default function getComponent(view, update): Component | undefined {
  if (store) {
    return new Component(store, view, update);
  } else {
    console.error('You must initialize the store before using it');
  }
};
