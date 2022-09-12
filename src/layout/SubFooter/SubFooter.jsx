import classes from "../SubFooter/subfooter.module.scss"
export default function SubFooter() {
    return(
        <div className={classes["container"]}>
            <div className={classes["sub-container"]}>
             <div>
                &copy; 2022
            </div>

            <div className={classes["links"]}>
                <div className={classes["link"]}>FAQ</div>
                <div className={classes["link"]}>Terrms & Conditions</div>
                <div className={classes["link"]}>Privacy Policy</div>

            </div>


            </div>
           
        </div>
    )
    
};
