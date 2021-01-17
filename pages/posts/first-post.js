import React from 'react'
import Link from "next/link"
import test from '../../assets/imgs/test.png'

export default function x() {
    console.log(test)
    return (
        <div>
            this is the first post!
            <hr/>
            <img src={test} alt=""/>
            <Link href={'/'}>
                <a>home page</a>
            </Link>
        </div>
    )
}