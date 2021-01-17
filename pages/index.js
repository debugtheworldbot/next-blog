import React from "react"
import styles from '../styles/Home.module.css'
import Link from "next/link";
import test from '../assets/imgs/test.png'


export default function Home() {
    return (
        <div className={styles.container}>
            <h1>main page</h1>
            <img src={test} alt=""/>

            <Link href={'/posts/first-post'}>
                <a>first</a>
            </Link>
            <style jsx>{`
              h1{
                color: red;
              }
            `}</style>

        </div>
    )
}
