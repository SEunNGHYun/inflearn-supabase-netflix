"use client";

import { useQuery } from "node_modules/@tanstack/react-query/build/legacy";
import MovieCardList from "./components/movie-card-list";
import { get } from "http";
import { getAllMovies } from "actions/movieActions";
import { Spinner } from "node_modules/@material-tailwind/react";

export default function UI() {
    return (
        <main className="mt-20">
            <MovieCardList />
        </main>
    );
}
