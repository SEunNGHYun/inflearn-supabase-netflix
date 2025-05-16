"use client";

export default function UI({ movie }) {
    return (
        <div className="flex flex-col md:flex-row items-center">
            <img src={movie.image_url} className="w-1/3" />

            <div className="md:w-2/3 w-full items-start flex flex-col  p-6 gap-4">
                <h1 className="text-2xl font-bold">{movie.title}</h1>
                <p className="text-lg font-medium">{movie.overview}</p>
                <div className="font-bold text-lg">
                    <i className="fas fa-star mr-1" />
                    Vote average :{movie.vote_average}
                </div>
                <div className="font-bold text-lg">
                    popularity : {movie.popularity}
                </div>
                <div className="font-bold text-lg">
                    release Date : {movie.release_date}
                </div>
            </div>
        </div>
    );
}
