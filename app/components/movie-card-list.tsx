"use client";

import MovieCard from "./movie-card";

export default function MovieCardList() {
    return (
        <div className="grid gap-2 grid-cols-4 w-full h-full grid-rows-3 md:grid-rows-4 ">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
    );
}
