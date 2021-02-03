import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ROUTE_HOME} from "./routes/routes";
import { GlobalStyles } from '@libs/design/styles/globalStyle';
import { layers, sizes, theme, styles } from '@libs/design';
import {ThemeProvider} from "styled-components";
import Home from "./public/home/Home";
import {HelmetProvider} from "react-helmet-async";

const LazyHome = () => <Home/>;

const App = () => {
    console.log(theme);

    return (
        <ThemeProvider theme={{...theme['dark'], styles, sizes, layers}}>
            <HelmetProvider>
                <Router >
                    <GlobalStyles/>
                    <Switch>
                        <Route path={`${ROUTE_HOME}`} component={() => <LazyHome/>}/>
                        <Redirect to={ROUTE_HOME}/>
                    </Switch>
                </Router>
            </HelmetProvider>
        </ThemeProvider>
    );
};

export default App;
