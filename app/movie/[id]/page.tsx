import UI from "./UI";

export default function MovieDetailPage({ params }) {
    return (
        <main className="py-16 px-8 items-center flex bg-blue-50 w-full absolute top-0 bottom-0 left-0 right-0">
            <UI id={params.id} />
        </main>
    );
}
