export const PREFIX = 'MATCHED_CITIES_MANAGER/';

export const MATCHED_CITIES_DATA_LOADING = `${PREFIX}MATCHED_CITIES_DATA_LOADING`;
export const MATCHED_CITIES_DATA_LOADED = `${PREFIX}MATCHED_CITIES_DATA_LOADED`;
export const MATCHED_CITIES_DATA_FAIL = `${PREFIX}MATCHED_CITIES_DATA_FAIL`;
export const MATCHED_CITIES_DATA_ERASE = `${PREFIX}MATCHED_CITIES_DATA_ERASE`;

export const matchedCitiesDataLoading = { type: MATCHED_CITIES_DATA_LOADING };
export const matchedCitiesDataLoaded = citiesData => ({
  type: MATCHED_CITIES_DATA_LOADED,
  payload: citiesData
});
export const matchedCitiesDataFail = error => ({ type: MATCHED_CITIES_DATA_FAIL, payload: error });
export const matchedCitiesDataErase = { type: MATCHED_CITIES_DATA_ERASE };

export function getMatchedCitiesData(query) {
  return async function (dispatch, getState, dataServices) {
    try {
      dispatch(matchedCitiesDataLoading);
      const matchedCitiesData = await dataServices.getCitiesData(query);
      dispatch(matchedCitiesDataLoaded(matchedCitiesData));
    } catch (error) {
      console.log(error);
      dispatch(matchedCitiesDataFail(error));
    }
  };
}
