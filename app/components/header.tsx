"use client";

import { useRecoilState } from "node_modules/recoil";
import Logo from "./logo";
import { searchState } from "app/utils/recoil/atom";

export default function Header() {
    const [search, setSearch] = useRecoilState(searchState);

    return (
        <header className="fixed top-0 left-0 right-0 p-4 bg-gray-900 flex items-center justify-between z-10">
            <nav className="flex gap-5">
                <Logo />
                <ul className=" flex gap-5 text-white">
                    <li>Movies</li>
                    <li>Dramas</li>
                </ul>
            </nav>

            <div className="flex items-center gap-2 max-w-72 w-full border-white bg-transparent text-white border rounded-md p-2">
                <i className="fas fa-search" />
                <input
                    className="bg-transparent"
                    value={search}
                    placeholder="search movies"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </header>
    );
}
