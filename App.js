import React, { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import creatSagaMiddleware from 'redux-saga';
import rootReducer from './Src/Redux/Reducers';
import rootSaga from './Src/Redux/Sagas';
import { composeWithDevTools } from 'redux-devtools-extension';
import Root from './Src/setup';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'HeliosHolding', 'profile'],
}
const sagaMiddleware = creatSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, {}, composeWithDevTools(applyMiddleware(sagaMiddleware)));
const persistedStore = persistStore(store);
const middlewareList = [sagaMiddleware];

const App = () => {
  return (
    <>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <Provider store={store}  >
        <PersistGate loading={null} persistor={persistedStore}>
          <Root />
        </PersistGate>
      </Provider>
    </>
  );
};
sagaMiddleware.run(rootSaga);
export default App;
