declare namespace Intl {
  class RelativeTimeFormat {
    constructor(locale: string, options?: any);

    format(value: number, type: string);
  }

  class ListFormat {
    constructor(locale: string, options?: any);
    // TODO Add other properties/methods

    format(values: any);
  }
}
