import FirstImg from "../../../src/vendor/illustration-1.png";
import SecondImg from "../../../src/vendor/illustration-2.png";
import ThirdImg from "../../../src/vendor/illustration-3.png";
import {Box} from "@mui/material";
import {MDBCarousel, MDBCarouselItem} from "mdb-react-ui-kit";

const BannerContent=()=> {
    return (
        <Box>
            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={1}
                    src={FirstImg}
                    alt='...'
                >
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src={SecondImg}
                    alt='...'
                >
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src={ThirdImg}
                    alt='...'
                >
                </MDBCarouselItem>
            </MDBCarousel>
        </Box>)
}

export default BannerContent;