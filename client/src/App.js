import './App.sass';
import Navigation from "./components/Navigation";
import {useDispatch} from "react-redux";
import {Switch, Route, Redirect} from "react-router-dom";
import {Container} from "./components/styledComponents/OrdinaryStyled";
import {useEffect} from "react";
import {start} from "./utils/api";
import {getFavoriteTicker, getTickers} from "./redux/action";
import TickerList from "./components/TickerList";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        start((ticker) => dispatch(getTickers(ticker)))
        dispatch(getFavoriteTicker())
    }, [])

    return (
        <div className={'wrapper'}>
            <Navigation/>
            <Container>
                <Switch>
                    <Route exact path={['/tickers']} component={TickerList}/>
                    <Route exact path={'/favorites'} component={TickerList}/>
                    <Redirect exact from='***' to='/tickers'/>
                </Switch>
            </Container>
        </div>
    );
};

export default App;
