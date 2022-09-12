import { memo } from "react";
import classes from "../Footer/footer.module.scss"
export default function   Footer() {

    const phoneNum = "+13128738273827"
    const emailAdd ="Email@email.com"
    
    return(
        <div className={classes["container"]}>
            <footer>
                <div className={classes["footer-column-md"]} >
                    <h3>Mern</h3>
                    <div className={classes["info"]}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Ipsum quasi officia ad cupiditate itaque?t</div>
                    <div className={classes["socials"]}>
                        <a href="#" target="_blank" rel="noopener noreferrer"><img src="/img/socials1.png" alt="social" /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><img src="/img/insta.png" alt="instagram" /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><img src="/img/twitter.png" alt="twitter" /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><img src="/img/youtube.png" alt="youtube" /></a>
                    </div>
                </div>
                <div className={classes["footer-column-sm"]}>
                    <h3>Company</h3>
                    <div>About</div>
                    <div>Career</div>
                    <div>Pricing</div>
                    <div>Service</div>
                </div>
                <div className={classes["footer-column-sm"]}>
                    <h3>Product</h3>
                    <div>Invoice</div>
                    <div>Career</div>
                    <div>Pricing</div>
                    <div>Service</div>

                </div>
                <div className={classes["footer-column-sm"]}>
                    <h3>Resource</h3>
                    <div>API doc</div>
                    <div>Tutorial video</div>
                    <div>How to create</div>
                
                </div>
                <div className={classes["footer-column-sm"]}>
                    <h3>Contact</h3>
                    <div>{emailAdd}</div>
                    <div>Career</div>
                    <div>{phoneNum}</div>
                
                </div>
              
            </footer>
        </div>
    )
};

