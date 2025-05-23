"use client";

import Link from "next/link";

export default function MovieCard({ movie }) {
    return (
        <div className="relative  col-span-1">
            <img src={movie.image_url} className="w-full" />
            {/* Follow the mythic journey of Paul Atreides as he unites with Chani
            and the Fremen while on a path of revenge against the conspirators
            who destroyed his family. Facing a choice between the love of his
            life and the fate of the known universe, Paul endeavors to prevent a
            terrible future only he can foresee. */}
            <div
                className="absolute flex items-center justify-center top-0 bottom-0 right-0 left-0 z-10
            bg-black opacity-0 hover:opacity-80 transition-opacity duration-300"
            >
                <Link href={"/movie/" + movie.id}>
                    <p className="text-white font-bold text-xl">
                        {movie.title}
                    </p>
                </Link>
            </div>
        </div>
    );
}
