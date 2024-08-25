import {useEffect, useRef, useState} from 'react';
import {ButtonGroup, Card, CardActions, CardContent, IconButton, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTumblrSquare, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import Grid from "@mui/material/Grid";
import QuoteText from "./QuoteText";

function QuoteMachine({selectedQuote, assignNewQuoteIndex}) {
    const [color, setColor] = useState("#16a085");

    function getColor() {
        setColor(colors[Math.floor(Math.random() * colors.length)]);
    }

    const colors = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
    ];

    useEffect(() => {
        document.getElementById("quote_card").style.color = color
        document.getElementById("tweet-quote").style.color = color
        document.getElementById("reddit-quote").style.color = color
        document.getElementById("new-quote").style.backgroundColor = color
        document.body.style.backgroundColor = color
    }, [color]);

    const nodeRef = useRef(null);

    return (
        <Card sx={{
            width: '450px',
            padding: '40px 50px',
            display: 'table',
            clear: 'both',
            backgroundColor: '#fff'
        }} variant="outlined" id="quote_card">
            <CardContent sx={{}}>
                <QuoteText noderef={nodeRef} value={selectedQuote.quote}/>
                <Typography
                    sx={{
                        width: '450px',
                        textAlign: 'right',
                        height: 'auto',
                        clear: 'both',
                        pt: '20px',
                        fontSize: '1em'
                    }}>
                    - {selectedQuote.author}
                </Typography>
                <CardActions>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <ButtonGroup sx={{
                                width: '450px',
                                margin: 'auto',
                                display: 'block'
                            }}>
                                <IconButton
                                    sx={{
                                        float: 'left',
                                        mt: '30px',
                                        p: '0px',
                                        pt: '8px',
                                        mr: '5px',
                                        ":hover": {
                                            opacity: 0.9
                                        }
                                    }}
                                    target="_blank"
                                    href={encodeURI(`https://twitter.com/intent/tweet/?text=${selectedQuote.quote}&hashtags=freecodecamp`)}
                                    id="tweet-quote"
                                >
                                    <FontAwesomeIcon icon={faTwitterSquare} size="xl"/>
                                </IconButton>
                                <IconButton
                                    sx={{
                                        float: 'left',
                                        mt: '30px',
                                        p: '0px',
                                        pt: '8px',
                                        mr: '5px',
                                    }}
                                    target="_blank"
                                    href={encodeURI(`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${selectedQuote.author}&content=${selectedQuote.quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`)}
                                    id="reddit-quote">
                                    <FontAwesomeIcon icon={faTumblrSquare} size="xl"/>
                                </IconButton>
                                <Button
                                    sx={{
                                        borderRadius: '3px',
                                        height: '44px',
                                        pt: '8px',
                                        mt: '30px',
                                        float: 'right',
                                    }}
                                    onClick={() => {
                                        assignNewQuoteIndex();
                                        getColor()
                                    }}
                                    id="new-quote"
                                    variant="contained">Next Quote</Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default QuoteMachine;