import {Outlet} from "react-router-dom";
import {Guidess} from "@/components/tracingBeam.tsx";

export const Guides= () => {
    return (
        <>
            <Guidess/>
            <main><Outlet/></main>
        </>


    )
}