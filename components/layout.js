import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Header from './header'

const name = 'Bob'
export const siteTitle = 'Weather'

export default function Layout({ children }) {
  return (
    <div id="main">
      <div class="backgroundSunny">
        <div id="content">
          <Header></Header>
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}