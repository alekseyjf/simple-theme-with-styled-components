import {CHOISE_THEME} from "./actions";

const initialState = {
  theme: [
    {
      name: 'Black',
      bg: '#000',
      color: '#fff',
      active: true
    },
    {
      name: 'White',
      bg: '#fff',
      color: '#000',
      active: false
    },
    {
      name: 'Red',
      bg: '#f00',
      color: '#fff',
      active: false
    }
  ]
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case CHOISE_THEME:

      return {
        ...state,
        theme: action.theme
      };
    default:
      return state

  }
};

export default reducer;