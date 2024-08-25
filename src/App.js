import React from 'react';
import {random} from "lodash/number";
import '@fontsource/roboto'
import QuoteMachine from "./components/QuoteMachine";
import Grid from "@mui/material/Grid";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            selectedQuoteIndex: null
        }
        this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
        this.generateNewQuoteIndex = this.generateNewQuoteIndex.bind(this);
    }

    componentDidMount() {
        fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
            .then(response => response.json())
            .then(quotes => this.setState({ quotes: quotes }, this.assignNewQuoteIndex));
    }

    get selectedQuote() {
        if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
            return undefined;
        }
        return this.state.quotes[this.state.selectedQuoteIndex];
    }

    /**
     * @returns Random integer between zero and the length of the quote array.
     * If quote array is empty, returns undefined.
     */
    generateNewQuoteIndex() {
        if (!this.state.quotes.length) {
            return undefined;
        }
        return random(0, this.state.quotes.length - 1);
    }

    assignNewQuoteIndex() {
        this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex() });
    }

    render() {
        return (
            <Grid sx={{
                display: 'flex',
                width: '100%',
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: this.state.bgColor
            }}
                  id="quote-box" container >
                <Grid xs={3} lg={3} item>
                    {
                        this.selectedQuote ?
                            <QuoteMachine selectedQuote={this.selectedQuote}
                                          assignNewQuoteIndex={this.assignNewQuoteIndex}/>: null
                    }
                </Grid>
            </Grid>
        );
    }
}




export default App;
