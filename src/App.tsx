
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {Notfound} from "@/Layout/404NotFound.tsx";
import {HomePage} from "@/Layout/Home/page.tsx";
import {ThemeProvider} from "@/Layout/ThemeProvider/theme-provider.tsx";
import {EventTimers} from "@/Layout/EventTimers/page.tsx";
import {ArcheRageDatabase} from "@/Layout/Guides/ArcheRageDatabase/page.tsx";
import RootLayout from "@/Layout/RootLayout.tsx";
import NewPlayerGuides from "@/Layout/Guides/NewPlayerGuides/page.tsx";
import QuestEventGuide from "@/Layout/Guides/QuestsEvents/page.tsx";
import MainGuidesPage from "@/Layout/Guides/MainGuidesPage/page.tsx";
import ClassGuides from "@/Layout/Guides/ClassGuides/page.tsx";
import HiramGearGuide from "@/Layout/Guides/HiramGearGuide/page.tsx";
import CostumeUndergarmentsGuide from "@/Layout/Guides/CostumeUndergarments/page.tsx";
import ArcheRageClientErrors from "@/Layout/Guides/ArcheRageClientErrors/page.tsx";
import ErenorCraftingGuide from "@/Layout/Guides/ErenorCraftingGuide/page.tsx";
import AchievementCollectionGuide from "@/Layout/Guides/AchievementCollectionGuide/page.tsx";
import {AboutUs} from "@/Layout/ProjectInformation/about-us/page.tsx";
import {FAQ} from "@/Layout/ProjectInformation/faq/page.tsx";
import {TermsOfService} from "@/Layout/ProjectInformation/terms-of-service/page.tsx";
import {PrivacyPolicy} from "@/Layout/ProjectInformation/privacy-policy/page.tsx";





const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/"element={<RootLayout/>}>
            <Route path='/' element={<HomePage />} />
            <Route path="guides" element={<MainGuidesPage/>}/>
            <Route path="/guides/quests-events" element={<QuestEventGuide/>}/>
            <Route path="/guides/new-player-guide" element={<NewPlayerGuides/>}/>
            <Route path="/guides/erenor-crafting-guide" element={<ErenorCraftingGuide/>}/>
            <Route path="/class-guides" element={<ClassGuides/>}/>
            <Route path="/event-timers" element={<EventTimers/>}/>
            <Route path="/archerage-database" element={<ArcheRageDatabase/>}/>
            <Route path="/guides/hiram-gear-guide" element={<HiramGearGuide/>}/>
            <Route path="/guides/costume-undergarments" element={<CostumeUndergarmentsGuide/>}/>
            <Route path="/guides/client-error-faq" element={<ArcheRageClientErrors/>}/>
            <Route path="/guides/achievements-collection-guide" element={<AchievementCollectionGuide/>}/>
            <Route path='/info/about-us' element={<AboutUs/>}/>
            <Route path='/info/faq' element={<FAQ/>}/>
            <Route path='/info/terms-of-service' element={<TermsOfService/>}/>
            <Route path='/info/privacy-policy' element={<PrivacyPolicy/>}/>

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