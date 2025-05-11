"use server";

import { createServerSupabaseClient } from "app/utils/supabase/server";
import { randomUUID } from "crypto";

function handleError(err) {
    console.log(err);

    throw new Error(err);
}

export async function UploadFile(formData: FormData) {
    const supabase = await createServerSupabaseClient();

    const files = Array.from(formData.entries()).map(([name, file]) => {
        return file as File;
    });

    const results = await Promise.all(
        files.map((file) => {
            supabase.storage
                .from("minibox")
                .upload(file.name, file, { upsert: true });
        })
    );

    return results;
}

export async function SearchFile(search: string) {
    const supabase = await createServerSupabaseClient();

    const { data, error } = await supabase.storage
        .from("minibox")
        .list(null, { search });

    if (error) handleError(error);

    return data;
}

export async function deleteFile(filename: string) {
    const supabase = await createServerSupabaseClient();

    const { data, error } = await supabase.storage
        .from("minibox")
        .remove([filename]);

    if (error) handleError(error);

    return data;
}
