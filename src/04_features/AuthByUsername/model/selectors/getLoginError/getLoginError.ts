import { StateSchema } from '01_app/providers/StoreProvider';

export const getLoginError = (state: StateSchema) => state?.loginForm?.error;
