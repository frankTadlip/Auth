import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import injectTapEventPlugin from 'react-tap-event-plugin';

/* THEME */
import * as Colors from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

/* SERVICE */
import { Root } from "./shared/services/root";

/* MAIN */
import { Home } from "./main/home/home";
import { Profile } from "./main/profile/profile";

injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: Colors.blueGrey800,
    },
    appBar: {
        height: 50,
    },
});

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Router history={browserHistory}>
                    <Route path={"/"} component={Root}>
                        <IndexRoute component={Home} />
                        <Route path={"home"} component={Home}></Route>
                        <Route path={"profile"} component={Profile}></Route>
                    </Route>
                </Router>
            </MuiThemeProvider>
        );
    }
}

render(<App />, window.document.getElementById("app"));