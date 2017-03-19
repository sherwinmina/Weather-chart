
const API_KEY = '208678fd1ba9778a0868e3d862e5d808';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  }
}
