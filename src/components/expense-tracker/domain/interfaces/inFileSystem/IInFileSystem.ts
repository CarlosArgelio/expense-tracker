/**
 * E: Entity
 * W: Write entity
 */
export interface IInfileSystem<E, W> {
  readonly path: string;

  read(): E[];
  write(payload: W): E;
}
