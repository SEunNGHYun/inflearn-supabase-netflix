"use client";

import React from "react";
import Image from "./image";
import { useQuery } from "@tanstack/react-query";
import { SearchFile } from "actions/storageActions";
import { Spinner } from "@material-tailwind/react";

export default function ImageList({ searchValue }: { searchValue: string }) {
    const searchImagesQuery = useQuery({
        queryKey: ["iamges", searchValue],
        queryFn: () => {
            return SearchFile(searchValue);
        },
    });

    return (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {searchImagesQuery.isLoading && <Spinner />}

            {searchImagesQuery.data &&
                searchImagesQuery.data.length > 0 &&
                searchImagesQuery.data.map((image) => {
                    return <Image key={image.id} image={image} />;
                })}
        </section>
    );
}
