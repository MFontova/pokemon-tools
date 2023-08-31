export const initialState = JSON.parse(localStorage.getItem('currentTeam')) || []
export const teamReducer = (state, action) => {
  const { payload, type } = action
  switch (type) {
    case 'ADD_TO_TEAM':
      return state.length >= 6
        ? [...state]
        : [
            ...state,
            {
              ...payload
            }
          ]

    case 'REMOVE_FROM_TEAM':
      const { id } = payload
      return state.filter(item => item.id !== id)

    case 'CLEAR_TEAM':
      localStorage.removeItem('currentTeam')
      return initialState

    default:
      return
  }
}