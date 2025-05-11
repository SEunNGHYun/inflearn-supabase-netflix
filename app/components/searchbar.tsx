import { Button, Input } from "node_modules/@material-tailwind/react";

export default function SearchBar({
    value,
    setValue,
}: {
    value: string;
    setValue: (val: string) => void;
}) {
    return (
        <Input
            label="search images"
            placeholder="search images"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            icon={<i className="fa-solid fa-magnifying-glass"></i>}
        />
    );
}
