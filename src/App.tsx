
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {Notfound} from "@/Layout/404NotFound.tsx";
import RootLayout from "@/Layout/RootLayout.tsx";
import {HomePage} from "@/Layout/Home/page.tsx";
import {ThemeProvider} from "@/Layout/ThemeProvider/theme-provider.tsx";
import {Guides} from "@/Layout/Guides/page.tsx";
import {QuestEventGuide} from "@/Layout/Guides/NewPlayerGuides/QuestsEvents/page.tsx";
import {NewPlayerGuides} from "@/Layout/Guides/NewPlayerGuides/NewPlayerIntroduction/page.tsx";
import {ErenorCraftinGuide} from "@/Layout/Guides/ErenorGearGuide/page.tsx";
import {EventTimers} from "@/Layout/EventTimers/page.tsx";
import {ClassGuides} from "@/Layout/Guides/ClassGuides/page.tsx";
import {ArcheRageDatabase} from "@/Layout/Guides/ArcheRageDatabase/page.tsx";
import {HiramGearGuide} from "@/Layout/Guides/HiramGearGuide/page.tsx";
import {CostumeUndergarmentsGuide} from "@/Layout/Guides/CostumeUndergarments/page.tsx";
import {ArcheRageClientErrors} from "@/Layout/Guides/ArcheRageClientErrors/page.tsx";





const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/"element={<RootLayout/>}>
            <Route path='/' element={<HomePage />} />
            <Route path="guides" element={<Guides/>}/>
            <Route path="/guides/new-player-guides/quests-events" element={<QuestEventGuide/>}/>
            <Route path="/guides/new-player-guides/basic-player-knowledge" element={<NewPlayerGuides/>}/>
            <Route path="/guides/erenor-crafting-guide" element={<ErenorCraftinGuide/>}/>
            <Route path="/class-guides" element={<ClassGuides/>}/>
            <Route path="/event-timers" element={<EventTimers/>}/>
            <Route path="/archerage-database" element={<ArcheRageDatabase/>}/>
            <Route path="/guides/hiram-gear-guide" element={<HiramGearGuide/>}/>
            <Route path="/guides/costume-undergarments" element={<CostumeUndergarmentsGuide/>}/>
            <Route path="/guides/client-error-faq" element={<ArcheRageClientErrors/>}/>

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