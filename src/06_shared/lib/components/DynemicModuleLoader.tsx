import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from "01_app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";
import React, { FC, PropsWithChildren, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynemicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynemicModuleLoader: FC<PropsWithChildren<DynemicModuleLoaderProps>> = (
  props: PropsWithChildren<DynemicModuleLoaderProps>
) => {
  const { children, reducers, removeAfterUnmount } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    (Object.entries(reducers) as ReducersListEntry[]).forEach(
      ([name, reducer]) => {
        store.reducerManager.add(name, reducer);
        dispatch({ type: `@INIT ${name} Reducer` });
      }
    );

    return () => {
      if (removeAfterUnmount) {
        (Object.entries(reducers) as ReducersListEntry[]).forEach(([name]) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} Reducer` });
        });
      }
    };
  }, []);
  return <>{children}</>;
};
