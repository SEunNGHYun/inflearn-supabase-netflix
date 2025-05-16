import UI from "./UI";
import { getMovies } from "actions/movieActions";

export async function generateMetadata({ params }) {
    const movie = await getMovies({ id: params.id });
    const title = movie.title;
    const description = movie.overview;

    return {
        title: title,
        description: description,
        openGraph: {
            images: [movie.image_url],
        },
    };
}

export default async function MovieDetailPage({ params }) {
    const movie = await getMovies({ id: params.id });

    return (
        <main className="py-16 px-8 items-center flex bg-blue-50 w-full absolute top-0 bottom-0 left-0 right-0">
            <UI movie={movie} />
        </main>
    );
}
