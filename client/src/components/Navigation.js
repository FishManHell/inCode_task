import React from 'react';
import {useHistory, useLocation} from "react-router-dom";
import {UniversalBlockTicker} from "./styledComponents/universalStyled";
import Button from '@material-ui/core/Button';
import {List, ListItem, LogoTicker} from "./styledComponents/NavigationStyled";

const Navigation = () => {
    const history = useHistory();
    const location = useLocation()

    const handleLocation = () => {
        location.pathname === '/favorites'
            ?
            history.push('/tickers')
            :
            history.push('/favorites')
    }

    return (
        <UniversalBlockTicker
            width={'100%'}
            display={'flex'}
            justify_content={'space-around'}
            align_items={'centre'}
            padding={'20px 0 20px 0'}
            background={'#8DA399'}
            box_shadow={'0px 0px 20px 0px rgba(0,0,0,0.75)'}
        >
            <LogoTicker onClick={() => history.push('/tickers')}>
                {location.pathname === '/favorites' ? 'Favorites' : ' Tickers'}
            </LogoTicker>

            <List>
                <ListItem>
                    <Button variant="outlined" color="primary"
                            onClick={() => handleLocation()}>
                        {location.pathname === '/favorites' ? 'Home' : 'Favorite'}
                    </Button>
                </ListItem>
            </List>
        </UniversalBlockTicker>
    );
};

export default Navigation;