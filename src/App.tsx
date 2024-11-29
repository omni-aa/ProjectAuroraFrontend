
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {Notfound} from "@/Layout/404NotFound.tsx";
import RootLayout from "@/Layout/RootLayout.tsx";
import {HomePage} from "@/Layout/Home/page.tsx";
import {ThemeProvider} from "@/Layout/ThemeProvider/theme-provider.tsx";
import {Guides} from "@/Layout/Guides/page.tsx";
import {LevelingGuides} from "@/Layout/Guides/NewPlayerGuides/Leveling/page.tsx";





const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/"element={<RootLayout/>}>
            <Route path='/' element={<HomePage />} />
            <Route path="guides" element={<Guides/>}/>
            <Route path="/guides/new-player-guides/leveling" element={<LevelingGuides/>}/>
            <Route path='*' element={<Notfound/>}/>
        </Route>

    )
)
function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router}/>
        </ThemeProvider>
    )
}

export default App