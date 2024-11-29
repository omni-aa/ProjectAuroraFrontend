import {NavLink, Outlet} from "react-router-dom";

export const HomePage = () => {
    return (
        <>
            <header className="text-4xl font-bold text-center justify-center">Home Page</header>
            <div>
                <ul>
                    <li>
                        <NavLink to='/guides'>Guides</NavLink>
                    </li>
                    <li>
                        <NavLink to='/event-timers'>Event Timers</NavLink>
                    </li>
                    <li>
                        <NavLink to='/event-guides'>Event Guides</NavLink>
                    </li>
                    <li>
                        <NavLink to='/class-guides'> Class Guides</NavLink>
                    </li>
                </ul>
            </div>
            <main>
                <Outlet/>
            </main>
        </>


    )
}