const additionReducer = (state = {
  username: []
}, action) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        username: [
          ...state.username,
          action.text
        ]
      };
      break;

      case 'ADD':
      state = {
        ...state,
          id: action.id,
          text: action.text,
          username:[
            ...state.username
          ]
      };
      break;

      case 'CLEAR_ALL':
      state = {id: 0,text: '',username: []};
      break;
  }

  return state
};

export default additionReducer;
