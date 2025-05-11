"use client";

import Image from "next/image";
import Link from "node_modules/next/link";

export default function Logo() {
    return (
        <div className="flex  gap-2 items-center">
            <Link href={"/"}>
                <Image
                    src="/images/tmdbflix_logo.png"
                    alt="tmdbflix-logo"
                    width={100}
                    height={40}
                    className="w-10! h-auto!"
                />
            </Link>
        </div>
    );
}
