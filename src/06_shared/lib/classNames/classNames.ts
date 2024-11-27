type Mods = Record<string, boolean | string>; //объект, где ключи - стр, значения - стр | boolean

export const classNames = (
  cls: string,
  mods: Mods = {},
  additional: string[] = [],
) => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
  ].join(" ");
};
