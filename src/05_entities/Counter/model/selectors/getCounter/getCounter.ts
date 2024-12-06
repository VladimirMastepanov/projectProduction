import { StateSchema } from '01_app/providers/StoreProvider';


export const getCounter = (state: StateSchema) => state.counter;
