import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Notfound } from "@/Layout/404NotFound.tsx";
import { HomePage } from "@/Layout/Home/page.tsx";
import { ThemeProvider } from "@/Layout/ThemeProvider/theme-provider.tsx";
import { ArcheRageDatabase } from "@/Layout/Guides/ArcheRageDatabase/page.tsx";
import RootLayout from "@/Layout/RootLayout.tsx";
import NewPlayerGuides from "@/Layout/Guides/NewPlayerGuides/page.tsx";
import QuestEventGuide from "@/Layout/Guides/QuestsEvents/page.tsx";
import MainGuidesPage from "@/Layout/Guides/MainGuidesPage/page.tsx";
import ClassGuides from "@/Layout/ClassGuides/page.tsx";
import HiramGearGuide from "@/Layout/Guides/HiramGearGuide/page.tsx";
import CostumeUndergarmentsGuide from "@/Layout/Guides/CostumeUndergarments/page.tsx";
import ArcheRageClientErrors from "@/Layout/Guides/ArcheRageClientErrors/page.tsx";
import ErenorCraftingGuide from "@/Layout/Guides/ErenorCraftingGuide/page.tsx";
import AchievementCollectionGuide from "@/Layout/Guides/AchievementCollectionGuide/page.tsx";
import { AboutUs } from "@/Layout/ProjectInformation/about-us/page.tsx";
import { FAQ } from "@/Layout/ProjectInformation/faq/page.tsx";
import { TermsOfService } from "@/Layout/ProjectInformation/terms-of-service/page.tsx";
import { PrivacyPolicy } from "@/Layout/ProjectInformation/privacy-policy/page.tsx";
import EventTimers from "@/Layout/EventTimers/page.tsx";
import MeleeClassGuides from "@/Layout/ClassGuides/Melee/page.tsx";
import MageClassGuides from "@/Layout/ClassGuides/Mage/page.tsx";
import HealerClassGuides from "@/Layout/ClassGuides/Healer/page.tsx";
import GunnerClassGuides from "@/Layout/ClassGuides/Gunner/page.tsx";
import ArcheryClassGuides from "@/Layout/ClassGuides/Archery/page.tsx";
import TankClassGuides from "@/Layout/ClassGuides/Tank/page.tsx";
import TimerPage from "@/data/adf/TestEventimers.tsx";
import {ExpandableCardDemo} from "@/data/TestPage.tsx";
import {TestComponent} from "@/data/TestEvents.tsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path="guides" element={<MainGuidesPage />} />
            <Route path="/guides/quests-events" element={<QuestEventGuide />} />
            <Route path="/guides/new-player-guide" element={<NewPlayerGuides />} />
            <Route path="/guides/erenor-crafting-guide" element={<ErenorCraftingGuide />} />
            <Route path="/class-guides" element={<ClassGuides />} />
            <Route path='/class-guides/melee' element={<MeleeClassGuides />} />
            <Route path='/class-guides/mage' element={<MageClassGuides />} />
            <Route path='/class-guides/healer' element={<HealerClassGuides />} />
            <Route path='/class-guides/gunner' element={<GunnerClassGuides />} />
            <Route path='/class-guides/archery' element={<ArcheryClassGuides />} />
            <Route path='/class-guides/tank' element={<TankClassGuides />} />
            <Route path="/timers" element={<TimerPage />} />
            <Route path="/comp" element={<ExpandableCardDemo/>}/>
            <Route path="/fuck" element={<TestComponent/>}/>

            {/* Parameterized route to show event card */}

            <Route path="/event-timers" element={<EventTimers />} />
            <Route path="/archerage-database" element={<ArcheRageDatabase />} />
            <Route path="/guides/hiram-gear-guide" element={<HiramGearGuide />} />
            <Route path="/guides/costume-undergarments" element={<CostumeUndergarmentsGuide />} />
            <Route path="/guides/client-error-faq" element={<ArcheRageClientErrors />} />
            <Route path="/guides/achievements-collection-guide" element={<AchievementCollectionGuide />} />
            <Route path='/info/about-us' element={<AboutUs />} />
            <Route path='/info/faq' element={<FAQ />} />
            <Route path='/info/terms-of-service' element={<TermsOfService />} />
            <Route path='/info/privacy-policy' element={<PrivacyPolicy />} />

            <Route path='*' element={<Notfound />} />
        </Route>
    )
);

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
