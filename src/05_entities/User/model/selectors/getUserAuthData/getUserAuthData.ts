import { StateSchema } from '01_app/providers/StoreProvider';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
