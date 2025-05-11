"use client";

import { deleteFile } from "actions/storageActions";
import { queryClient } from "app/config/ReactQueryClientProvirer";
import { getImageUrl } from "app/utils/supabase/storage";
import Image from "next/image";
import { IconButton, Spinner } from "node_modules/@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";

export default function DropboxImage({ image }) {
    const deleteFileMutation = useMutation({
        mutationFn: deleteFile,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["images"],
            });
        },
    });
    return (
        <div className="relative w-full flex flex-col p-4 border border-gray-100">
            <div className="absolute top-4 right-4">
                <IconButton
                    color="red"
                    onClick={() => {
                        deleteFileMutation.mutate(image.name);
                    }}
                >
                    {deleteFileMutation.isPending ? (
                        <Spinner />
                    ) : (
                        <i className="fas fa-trash" />
                    )}
                </IconButton>
            </div>
            <Image
                width={"300"}
                height={"100"}
                className="w-fit! h-auto! aspect-square rounded-xl "
                alt="cat"
                src={getImageUrl(image.name)}
            />

            <div>{image.name}</div>
        </div>
    );
}
