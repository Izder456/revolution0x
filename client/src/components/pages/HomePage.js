import React, { Component } from "react";
import {withStyles} from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import OurCard from '../OurCard';

const styles = theme => ({
    cardPadding: {
        padding: theme.spacing.unit * 2,
    }
})

const dummyData = [0,1,2,3,4,5];

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <div className="text-align-center our-flex-wrap">
                    {dummyData.map((data, index) => {
                        return <OurCard key={index} media="https://ipfs.infura.io/ipfs/QmQ7geyNFtJnovcjb146b7YpsqTse6soWPvvqxibXsQVcp" link={"/element/elementTest" + index} heading="Element Heading" description="Element Description"></OurCard>
                    })}
                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(styles, { withTheme: true })(HomePage);