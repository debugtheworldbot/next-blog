import React from 'react'
import Link from "next/link";

export default function x() {
    return (
        <div>
            this is the first post!
            <hr />
            <Link href={'/'}>
                <a >home page</a>
            </Link>
        </div>
    )
}