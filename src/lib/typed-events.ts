import { EventEmitter } from 'events';

export default class TypedEventEmitter<T> extends EventEmitter {
  constructor(...args) {
    super();
  }

  _on(event: string, callback: (...args) => void): this {
    return super.on(event, callback);
  }

  on(event: string & keyof T, callback: (arg: T[typeof event]) => void): this {
    return super.on(event, callback);
  }

  emit(event: string & keyof T, payload?: T[typeof event]): boolean {
    return super.emit(event, payload);
  }
}