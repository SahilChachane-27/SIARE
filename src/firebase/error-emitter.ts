'use client';

type ErrorMap = {
  'permission-error': [error: any];
};

class ErrorEmitter {
  private listeners: { [K in keyof ErrorMap]?: Array<(...args: ErrorMap[K]) => void> } = {};

  on<K extends keyof ErrorMap>(event: K, listener: (...args: ErrorMap[K]) => void) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event]!.push(listener);
  }

  off<K extends keyof ErrorMap>(event: K, listener: (...args: ErrorMap[K]) => void) {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event]!.filter((l) => l !== listener);
  }

  emit<K extends keyof ErrorMap>(event: K, ...args: ErrorMap[K]) {
    if (!this.listeners[event]) return;
    this.listeners[event]!.forEach((l) => l(...args));
  }
}

export const errorEmitter = new ErrorEmitter();
