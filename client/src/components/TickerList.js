import React from 'react';
import Ticker from "./Ticker";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {ErrorText} from "./styledComponents/OrdinaryStyled";

const TickerList = () => {
    const location = useLocation()
    const {tickers, favoritesTickers} = useSelector(state => state);

    const filter = tickers.filter(item => {
        for (let i = 0; i < favoritesTickers.length; i++) {
            if (item.ticker === favoritesTickers[i]) {
                return item.ticker
            }
        }
    })

    const printTickers = () => {
        return tickers.length ? tickers.map(ticker => <Ticker key={ticker.ticker} item={ticker}/>) : null
    }

    const printFavorites = () => {
        if (filter.length) {
            return filter.map(favorite => <Ticker key={favorite.ticker} item={favorite}/>)
        } else {
            return <ErrorText>Not Favorites</ErrorText>
        }
    }

   if (location.pathname === '/tickers') {
       return printTickers()
   } else {
       return printFavorites()
   }
};

export default TickerList;