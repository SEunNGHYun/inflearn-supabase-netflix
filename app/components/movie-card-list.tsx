"use client";

import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import MovieCard from "./movie-card";
import { getAllMovies, getSearchMovies } from "actions/movieActions";
import { Spinner } from "@material-tailwind/react";
import { useRecoilState, useRecoilValue } from "node_modules/recoil";
import { searchState } from "app/utils/recoil/atom";
import { useInView } from "node_modules/react-intersection-observer/dist";
import React from "react";

export default function MovieCardList() {
    const search = useRecoilValue(searchState);

    const { data, isFetchingNextPage, isFetching, fetchNextPage, hasNextPage } =
        useInfiniteQuery({
            initialPageParam: 1,
            queryKey: ["movie", search],
            queryFn: ({ pageParam }) =>
                getSearchMovies({ search, page: pageParam, size: 12 }),
            getNextPageParam: (lastPage) => {
                return lastPage ? lastPage.page + 1 : null;
            },
        });

    const { ref, inView } = useInView({
        threshold: 0,
    });

    React.useEffect(() => {
        console.log("inView", inView);
        console.log("hasNextPage", hasNextPage);
        console.log("isFetching", isFetching);
        console.log("isFetchingNextPage", isFetchingNextPage);
        if (inView && hasNextPage && !isFetching && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage]);

    return (
        <div className="grid gap-2 grid-cols-4 w-full h-full grid-rows-3 md:grid-rows-4 ">
            {(isFetching || isFetchingNextPage) && <Spinner />}
            <>
                {data?.pages
                    .map((page) => page.data)
                    ?.flat()
                    ?.map((mv) => (
                        <MovieCard key={mv.id} movie={mv} />
                    ))}
                <div ref={ref} />
            </>
        </div>
    );
}
