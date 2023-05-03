import Customers from "./home/components/Customers"
import classes from "./home.module.scss"
import SectionTwo from "./home/components/SectionTwo"

export default function Home() {
    return(
        <div className={classes["container"]}>

            {/* <div>
                <img className={classes["img-1"]} src="/img/bg.png" alt=""/>
           </div> */}

           <div  className={classes["sub-container"]} >
               <div className={classes["info"]}>
                <h2 className={classes["info-heading"]}>

                    SaaS Delivery Management Software
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis autem vel eum iure reprehenderit qui in ea voluptate
                </p>
                <button className={classes["btn"]} >Get started</button>
                <button className={classes["btn"]} >Watch now</button>
               </div>

               <div className={classes["img-container"]}  >
                <img  className={classes["img"]} src="/img/Mask.png"/>
               </div>

           </div>


           <Customers/>
           <SectionTwo/>

        </div>
    )
    
};
