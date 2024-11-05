import camelCase from "camelcase";

export function upperCamelCase(name: string) {
  const cased = camelCase.apply(camelCase, [name]);
  return cased.charAt(0).toLocaleUpperCase() + cased.slice(1);
}
