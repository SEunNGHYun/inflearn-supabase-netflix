"use client";

import { Button, Spinner } from "@material-tailwind/react";
import { UploadFile } from "actions/storageActions";
import { queryClient } from "app/config/ReactQueryClientProvirer";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useDropzone } from "react-dropzone";

export default function FileDragDropArea() {
    const fileRef = React.useRef<null>();

    const onDrop = React.useCallback(async (acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            const formData = new FormData();

            acceptedFiles.forEach((file) => {
                formData.append(file.name, file);
            });

            const result = await uploadImageMutation.mutate(formData);

            console.log(result);
        }
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: true,
    });

    const uploadImageMutation = useMutation({
        mutationFn: UploadFile,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["images"],
            });
        },
    });

    return (
        <div
            {...getRootProps()}
            className="w-full
            py-20 cursor-pointer
            flex flex-col items-center justify-center border-2 border-dotted border border-orange-300 rounded-lg"
        >
            <input {...getInputProps()} />
            {uploadImageMutation.isPending ? (
                <Spinner />
            ) : (
                <>
                    {isDragActive ? (
                        <p>파일을 여기 놔주세요</p>
                    ) : (
                        <p>
                            파일을 끌어다가 여기에 놓거나 클릭해서 선택해주세요
                        </p>
                    )}
                </>
            )}
        </div>
    );
}
