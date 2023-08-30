export const teamReducer = (state, action) => {
  const {type, payload} = action
  switch (type) {
    case 'ADD_TO_TEAM':
      const newState = [...state, payload]
      return newState
  
    default:
      break;
  }
}