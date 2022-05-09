import { Fragment } from "react";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
    return <Fragment>
        <MainNavigation />
        <nain>{props.children}</nain>
    </Fragment>
}

export default Layout;