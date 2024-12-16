import { CounterSchema } from '05_entities/Counter';
import { UserSchema } from '05_entities/User';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
}
