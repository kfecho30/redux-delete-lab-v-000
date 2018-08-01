export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {
        id: Math.random()*1000000000000,
        bandName: action.payload.text
      }
      return {bands: state.bands.concat(band)}
    case 'DELETE_BAND':
      return {bands: state.bands.filter(band => band.id !== action.payload)}
    default:
      return state;
  }
};
