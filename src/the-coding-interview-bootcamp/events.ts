/** @format */

// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  events: { [key: string]: (() => unknown)[] };

  constructor() {
    this.events = {};
  }

  // Register an event handler
  on(eventName: string, callback: () => unknown): void {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName: string): void {
    if (this.events[eventName]) {
      // eslint-disable-next-line no-restricted-syntax
      for (const callback of this.events[eventName]) {
        callback();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName: string): void {
    delete this.events[eventName];
  }
}

export default Events;
