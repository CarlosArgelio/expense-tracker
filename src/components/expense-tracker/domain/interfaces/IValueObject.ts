export interface IValueObject<I, V> {
  value: V;

  equals(valueObject: I): boolean;
}
