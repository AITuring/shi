declare module 'jinrishici' {
    export function load(callback: (result: {
      data: {
        content: string;
        origin: {
          author: string;
          title: string;
          dynasty: string;
        }
      }
    }) => void): void;
  }