import { Link } from "react-router-dom";

const MainNavigation = () => {
    return (  
        <header>
            <Link to='/home'>
                <div>mailbox</div>
            </Link>
            <nav>
                <ul>
                    <li>
                        <button>
                            <Link to='/login'>Login</Link>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
 
export default MainNavigation;
