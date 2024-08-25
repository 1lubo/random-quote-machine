import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
import {Typography} from "@mui/material";


export default function QuoteText({ value }) {

    return (
        <Typography
                sx={{
                    fontWeight: 500,
                    fontSize: '1.75em',
                    textAlign: 'center',
                    width: '450px',
                    height: 'auto',
                    clear: 'both',
                }}
                id="text">
            <FontAwesomeIcon sx={{
                    fontSize: '1em',
                    mr: '0.4em'
                }}
                             icon={faQuoteLeft}/>

            <span>{value}</span>
        </Typography>
    )
}