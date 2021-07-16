import { render, screen } from '@testing-library/react';
import App from './App';
import {createStore} from "redux";
import {tickersReducer} from "./redux/reducer";
import {Provider} from "react-redux";


const renderWithRedux = (
    component,
    {initialState, store = createStore(tickersReducer, initialState)}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  };
}

test('renders learn react link', () => {
  it('checks initial state is equal to 0',  () => {
    const {getByRole} = renderWithRedux()
  });
});
