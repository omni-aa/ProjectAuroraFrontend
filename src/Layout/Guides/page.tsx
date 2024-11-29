import {Outlet} from "react-router-dom";

export const Guides= () => {
    return (
        <>
            <header className="items-center justify-center text-4xl font-bold flex ">ArcheRage Guides</header>
            <div className="flex items-center gap-2">
                This guide provides essential information for players who are just starting out, though it typically does not address common questions from new or returning players.
                For frequently asked questions, please refer to the dedicated FAQ guide. This FAQ includes links to additional helpful resources, such as Sparkle’s posts on the official ArcheRage forum.
                If you're looking for in-depth details about Hiram gear, please follow the link here, as this topic is not covered extensively in this document.
                At the beginning stages of the game, your primary focus will be leveling up. You can achieve this by following the green quest markers, which represent race-specific quests. Around the midpoint of your progression, these race quests will merge into a single path when you enter the PvP zones. Refer to the next page for more information about recommended activities at different levels.
                Above all, enjoy your experience on ArcheRage!
            </div>
            <main><Outlet/></main>
        </>


    )
}