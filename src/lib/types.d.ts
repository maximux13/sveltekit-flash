export type Message = string;

export type Tags = string[];

export type Options = {
  name?: string;
  levels?: Readonly<string[]>;
};

export type Level = 'success' | 'info' | 'warning' | 'error' | 'debug';

export type Messages = { type: Level; message: Message; tags?: string[] }[];

export declare function createHandler(options?: Options): import('@sveltejs/kit').Handle;

export declare function addMessage(type: Level, message: Message, tags?: Tags): void;

declare namespace addMessage {
  function success(message: Message, tags?: Tags): void;
  function info(message: Message, tags?: Tags): void;
  function warning(message: Message, tags?: Tags): void;
  function error(message: Message, tags?: Tags): void;
  function debug(message: Message, tags?: Tags): void;
}

declare global {
  namespace App {
    interface Locals {
      messages: Messages;
      flash: typeof addMessage;
    }
  }
}
