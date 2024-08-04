import React from 'react';
import {ButtonGroup, Typography} from "@mui/material";
import {Card} from "@mui/material";
import {CardActions} from "@mui/material";
import {CardContent} from "@mui/material";
import Button from "@mui/material/Button";
import {IconButton} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import { faRedditSquare } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Grid from "@mui/material/Grid";

const QuoteMachine = ({selectedQuote, assignNewQuoteIndex}) => (
    <Card sx={{
        width: '450px',
        padding: '40px 50px',
        display: 'table',
        clear: 'both'
    }} variant="outlined">
        <CardContent sx={{

        }}>
            <Typography
                sx={{
                    fontWeight: 500,
                    fontSize: '1.75em',
                    textAlign: 'center',
                    width: '450px',
                    height: 'auto',
                    clear: 'both'
            }}
                id="text">
                <FontAwesomeIcon sx={{
                    fontSize:'1em',
                    mr: '0.4em'
                }}
                    icon={faQuoteLeft}/>
                <span>{selectedQuote.quote}</span>
            </Typography>
            <Typography
                sx={{
                    width: '450px',
                    textAlign: 'right',
                    height: 'auto',
                    clear: 'both',
                    pt: '20px',
                    fontSize: '1em'
            }} >
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
                                color="primary"
                                target="_blank"
                                href={encodeURI(`https://twitter.com/intent/tweet/?text=${selectedQuote.quote}&hashtags=freecodecamp`)}
                                id="tweet-quote"
                            >
                                <FontAwesomeIcon icon={faTwitterSquare} size="xl" />
                            </IconButton>
                            <IconButton sx={{
                                float: 'left',
                                mt: '30px',
                                p: '0px',
                                pt: '8px',
                                mr: '5px',
                            }}
                                        color="primary"
                                target="_blank">
                                <FontAwesomeIcon icon={faRedditSquare} size="xl" />
                            </IconButton>
                            <Button sx={{
                                borderRadius: '3px',
                                height: '44px',
                                pt: '8px',
                                mt: '30px',
                                float: 'right',
                            }}
                                onClick={assignNewQuoteIndex} id="new-quote" variant="contained">Next Quote</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </CardActions>
        </CardContent>
    </Card>
)

export default QuoteMachine;