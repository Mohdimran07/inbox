import { useContext } from "react";
import { Link } from "react-router-dom";
import MailBoxContext from "../store/mailbox-context";

const MainNavigation = () => {
    const mailCtx = useContext(MailBoxContext);
    const isLoggedIn = mailCtx.isLoggedIn;
    return (  
        <header>
            <div>
                {!isLoggedIn && (
                     <Link to='/home'>
                     <div>mailbox</div>
                 </Link>
                )}
           
            </div>
           
            <nav>
                <ul>
                    {!isLoggedIn && (
                        <li>
                        <button>
                            <Link to='/login'>Login</Link>
                        </button>
                    </li>
                    )}
                   
                </ul>
            </nav>
        </header>
    );
}
 
export default MainNavigation;
