"use server";

import { createServerSupabaseClient } from "app/utils/supabase/server";
import { randomUUID } from "crypto";

function handleError(err) {
    console.log(err);

    throw new Error(err);
}

export async function getAllMovies() {
    const supabase = await createServerSupabaseClient();

    const { data, error } = await supabase.from("movie").select("*");

    if (error) handleError(error);

    return data;
}

export async function getSearchMovies({ search = "", page = 1, size = 12 }) {
    const supabase = await createServerSupabaseClient();

    const { data, error, count } = await supabase
        .from("movie")
        .select("*")
        .like("title", `%${search}%`)
        .range((page - 1) * size, page * size - 1);

    const hasNextPage = count > page * size;

    if (error) {
        handleError(error);

        return {
            data: [],
            count: 0,
            page: null,
            pageSize: null,
            error,
        };
    }

    return {
        data,
        page,
        size,
        hasNextPage,
    };
}

export async function getMovies({ id }) {
    const supabase = await createServerSupabaseClient();

    const { data, error } = await supabase
        .from("movie")
        .select("*")
        .eq("id", id)
        .maybeSingle();

    if (error) handleError(error);

    return data;
}
