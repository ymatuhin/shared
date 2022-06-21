export function mapObject(object: object, mapper: Function) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => mapper(key, value)),
  );
}
