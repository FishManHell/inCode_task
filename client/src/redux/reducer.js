import {FAVORITE_TICKER, GET_FAVORITE_TICKER, GET_TICKERS, REMOVE_FAVORITE_TICKER} from "./action";

const initialState = {
    tickers: [],
    favoritesTickers: []
}

export const tickersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TICKERS:
            return {...state, tickers: action.payload};

        case FAVORITE_TICKER:
            const tickerFavorite = [...state.favoritesTickers];
            tickerFavorite.push(action.payload)
            const newFavorite = [... new Set(tickerFavorite)];
            localStorage.setItem('favorites', JSON.stringify(newFavorite));
            return {...state, favoritesTickers: newFavorite};

        case REMOVE_FAVORITE_TICKER:
            const favorite = [...state.favoritesTickers]
            localStorage.getItem('favorites');
            const index =  favorite.indexOf(action.payload);
            if (index > -1) {
                favorite.splice(index, 1)
            }
            localStorage.setItem('favorites', JSON.stringify(favorite));
            return {...state, favoritesTickers: favorite};

        case GET_FAVORITE_TICKER:
            let getFavorite = []
            if (localStorage['favorites']) {
                getFavorite = JSON.parse(localStorage.getItem('favorites'))
            }
            return {...state, favoritesTickers: getFavorite}
        default:
            return {...state}
    }
}