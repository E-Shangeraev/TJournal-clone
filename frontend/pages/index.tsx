import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Post from '../components/Post'
import LeftMenu from '../components/LeftMenu'

export default function Home() {
  return (
    <div>
      <Head>
        <title>RJournal</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className="wrapper">
        <div className="leftSide">
          <LeftMenu />
        </div>
        <div className="content">
          <Post />
          <Post />
          <Post />
        </div>
        <aside className="rightSide"></aside>
      </div>
    </div>
  )
}
