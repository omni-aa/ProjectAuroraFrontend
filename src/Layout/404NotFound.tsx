import {NavLink} from "react-router-dom";

export const Notfound = () => {
    return (
        <div>
            <header className="px-6 py-4 text-4xl flex justify-center items-center" >
                404 Page Not Found
            </header>
            <p className="flex justify-center items-center text-2xl text-primary">
                <NavLink to="/">
                    Please Return to Home Page
                </NavLink>

            </p>
        </div>
    )
}