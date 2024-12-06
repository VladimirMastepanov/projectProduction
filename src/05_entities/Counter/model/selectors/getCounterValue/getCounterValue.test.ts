import { StateSchema } from '01_app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
  test('', () => {
    const state: Partial<StateSchema> = {
      counter: { value: 10 },
    };


    expect(getCounterValue(state as StateSchema)).toBe(10);
  });
});