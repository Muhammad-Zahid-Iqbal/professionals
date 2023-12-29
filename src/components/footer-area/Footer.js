import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import demofooter from '../../images/demofooter.png';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Div from '../../shared/Div';
import { InputAdornment, MenuItem, Select, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import yourlogo from "../../images/yourlogo.png";
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const style = {
    background: "#1b0d01",
    // height: "100%",
    // paddingTop: "100px",
    // paddingBottom: "100px",
    fontSize: "18px",
    fontFamily: "Red Hat Text,Arial,Helvetica,sans-serif",
    color: "#fff",
    overflowX: "hidden"
}
export default function Footer() {
    const [selectedLocation, setSelectedLocation] = React.useState('Select an Academy');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSelectedLocation(event.target.value);
    };
    return (
        <>
          <Box sx={style}>
            <Grid container spacing={2}>
                <Grid item sm={3}>
                    <Div>
                        <img style={{ paddingLeft: "25px", cursor:"pointer", width:"100%" }} src={yourlogo} alt='footer image' onClick={() =>navigate('/')}/>
                        <Div sx={{ display: "flex", mt: 5, pl: 2.9 }}>
                            <EmailIcon style={{ color: '#ff7531' }} />
                            <p style={{ paddingLeft: 10, color: '#ff7531' }}>Make an enquiry</p>
                        </Div>
                        <Div sx={{ display: "flex", mt: 5, pl: 2.9 }}>
                            <PhoneIcon />
                            <p style={{ paddingLeft: 10 }}>Choose Academy Phone</p>
                        </Div>
                        <Div sx={{ display: "flex", mt: 5, pl: 2.9 }}>
                            <DateRangeIcon />
                            <p style={{ paddingLeft: 10 }}>Mon-Fri 9am - 5pm</p>
                        </Div>

                    </Div>
                </Grid>
                <Grid item sm={3}>

                </Grid>
                <Grid item sm={3} xs={12} sx={{ lineHeight: "62px", display: "flex", justifyContent: "center" }}>
                    <Div>
                        <Div>
                            <p>About Us</p>
                        </Div>
                        <Div>
                            <p>Join Us</p>
                        </Div>
                        <Div>
                            <p>School Partnerships</p>
                        </Div>
                        <Div>
                            <p>Franchise With Us</p>
                        </Div>
                        <Div>
                            <p>FAQs</p>
                        </Div>
                        <Div>
                            <p>Our Policies</p>
                        </Div>
                    </Div>
                </Grid>

                <Grid item sm={3} xs={12} sx={{ lineHeight: "62px", display: "flex", justifyContent: "center" }}>
                    <Div>
                        <Div>
                            <p>Locations</p>
                        </Div>
                        <Div>
                            <p>Shop</p>
                        </Div>
                        <Div>
                            <p>News</p>
                        </Div>
                        <Div>
                            <p>1-on-1 Training</p>
                        </Div>
                    </Div>
                </Grid>

            </Grid>
            <hr style={{ width: "80%", margin: "auto",  }} />
            <Grid container spacing={2} sx={{ paddingTop: "25px", }}>
                <Grid item sm={6} xs={12}>
                    <Box sx={{ paddingLeft: "20%", display: "flex" }}>
                        <Div sx={{ pr: 10 }}>
                            <FacebookIcon style={{ color: '#ff7531' }} />
                        </Div>
                        <Div sx={{ pr: 10 }}>
                            <InstagramIcon style={{ color: '#ff7531' }} />
                        </Div>
                        <Div>
                            <TwitterIcon style={{ color: '#ff7531' }} />
                        </Div>
                    </Box>
                </Grid>
                <Grid item sm={6} xs={12} sx={{ display: "flex", textAlign: "center", gap: 4, flexDirection: { xs: 'column', sm: 'row' }, }}>
                    <Typography>Privacy Policy</Typography>
                    <Typography>|</Typography>
                    <Typography>FAQ</Typography>
                    <Typography>|</Typography>
                    <Typography>Terms & Conditions</Typography>
                    <Typography>|</Typography>
                    <Typography>Sitemap</Typography>
                </Grid>
            </Grid>
        </Box>  
        </>
        
    );
}