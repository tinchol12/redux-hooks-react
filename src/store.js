import { createStore } from 'redux';
import reducer from './reducers';
import { obtenerStateStorage, guardarStateStorage } from './localstorage';

//Definir el state
//const initialState = [];

//Obtener citas del LocalStorage
const storageState = obtenerStateStorage();

export const store = createStore(

    reducer,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()

);

store.subscribe( () => {
    guardarStateStorage({
        citas: store.getState().citas
    });
})

export default store;