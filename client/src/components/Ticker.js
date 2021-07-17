import React from 'react';
import {MainBlockPost, TextPost} from "./styledComponents/TickerStyle";
import {changeArrow, changeColor} from "../utils/universalFunction";
import {useDispatch, useSelector} from "react-redux";
import {favoriteTicker, removeFavoriteTicker} from "../redux/action";
import {useStyles} from "../MaterialUiStyle/MaterialUi";
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

const Ticker = ({item}) => {
    const classes = useStyles();
    const {favoritesTickers} = useSelector(state => state);
    const dispatch = useDispatch();
    const start = favoritesTickers.includes(item.ticker)

    const addFavoriteTicker = () => {
        dispatch(favoriteTicker(item.ticker))
    }

    const removeFavorTicker = () => {
        dispatch(removeFavoriteTicker(item.ticker))
    }

    return (
        <MainBlockPost>
            <TextPost background={'#8DA399'}>{item.ticker}</TextPost>
            <TextPost>{item.exchange}</TextPost>
            <TextPost background={changeColor(item.price, item.change)}>
                {changeArrow(item.price, item.change)}{item.price}
            </TextPost>
            <TextPost>{item.dividend}</TextPost>
            <TextPost>{item.yield}</TextPost>
            <TextPost background={'#6E7F80'}>{`${item.change_percent} %`}</TextPost>
            <IconButton className={classes.margin} onClick={() => start ? removeFavorTicker() : addFavoriteTicker()}>
                {start ? <StarIcon fontSize="large" /> : <StarBorderIcon fontSize="large" />}
            </IconButton>
        </MainBlockPost>
    );
};

export default Ticker;