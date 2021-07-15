export const GET_TICKERS = 'GET_TICKERS'
export const FAVORITE_TICKER = 'FAVORITE_TICKER'
export const REMOVE_FAVORITE_TICKER = 'REMOVE_FAVORITE_TICKER'
export const GET_FAVORITE_TICKER = 'GET_FAVORITE_TICKER'

export const getTickers = tickers => {
    return {
        type: GET_TICKERS,
        payload: tickers
    }
}

export const favoriteTicker = favorite => {
    return {
        type: FAVORITE_TICKER,
        payload: favorite
    }
}

export const removeFavoriteTicker = remove => {
    return {
        type: REMOVE_FAVORITE_TICKER,
        payload: remove
    }
}

export const getFavoriteTicker = payload => {
    return {
        type: GET_FAVORITE_TICKER,
        payload
    }
}