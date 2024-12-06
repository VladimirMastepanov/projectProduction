import { StateSchema } from '01_app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('should return countr value', () => {
    const state: Partial<StateSchema> = {
      counter: { value: 10 },
    };

    expect(getCounter(state  as StateSchema)).toEqual({ value: 10 });
  });
});

