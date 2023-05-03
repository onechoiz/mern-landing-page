import classes from "../Header/header.module.scss"
import {ImMenu} from "react-icons/im"
import {CgProfile} from "react-icons/cg"

export default function Header() {

    return(
        <div className={classes["container"]}>
            <header>
                <div className={classes["logo-container"]}>
                    {/* <img src="" alt="logo" /> */}
                    Mern

                </div>
            

                <nav>
                    <ul>
                            <li> 
                                Home
                            </li>
                            <li> 
                                Products
                            </li>
                            <li> 
                                Solutions
                            </li>
                            <li> 
                                Pricing
                            </li>
                    </ul>
                        <div className={classes["btns"]}>
                            <button className={classes["btn"]}>Log in </button>
                            <button className={classes["btn"]}>Sign in</button>
                        </div>
                </nav>
                 <ImMenu className={classes["menu"]}/>
                 <CgProfile className={classes["profile-icon"]} />

            </header>

        </div>
    )
    
};
