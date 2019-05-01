import React, { Component } from "react";
import {withStyles} from "@material-ui/core/styles";
import {Route, withRouter} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ElementPage from "./pages/ElementPage";
import { connect } from "react-redux";

const styles = theme => ({
    pageContainer: {
        padding: theme.spacing.unit * 4
    }
})

class PageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // store.subscribe(() => {

    // });

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.pageContainer}>
                <Route path="/" exact render={(props) => homeRoute(props)} />
                <Route path="/element/:elementName" exact render={(props) => elementRoute(props)} />
            </div>
        )
    }
    
}

const homeRoute = (props) => {
    return <HomePage/>
}

const elementRoute = ({match}, props) => {
    if(match && match.params && match.params.elementName) {
        const elementName = match.params.elementName;
        return <ElementPage elementName={elementName}/>
    }else{
        return <ElementPage/>
    }
}

export default withRouter(withStyles(styles, { withTheme: true })(PageContainer));