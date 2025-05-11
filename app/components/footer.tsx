"use client";

import Link from "node_modules/next/link";

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 text-white font-bold bg-gray-900 p-2 flex justify-center">
            <p>
                Movie DataBase from{" "}
                <Link
                    className="text-blue-300"
                    href={"https://www.themoviedb.org/"}
                >
                    TMDB
                </Link>
            </p>
        </footer>
    );
}
