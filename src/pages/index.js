import { Link } from 'gatsby'
import * as React from 'react'
import {
  navbar,
  navbar__list,
  navbar__item,
  navbar__link,
  container,
  logo,
  hero,
  hero__subtitle,
  hero__title
} from '../styles/index.module.scss'
import '../styles/resets.module.scss'

const IndexPage = () => {
  return (
    <main className={container}>
      <nav className={navbar}>
        <span className={logo}>
          <Link to="/" className={navbar__link}>{`{ JK:JR }`}</Link>
        </span>
        <ul className={navbar__list}>
          <li className={navbar__item}>
            <Link to="about" className={navbar__link}>
              About
            </Link>
          </li>
          <li className={navbar__item}>
            <Link to="projects" className={navbar__link}>
              Projects
            </Link>
          </li>
          <li className={navbar__item}>
            <Link to="blog" className={navbar__link}>
              Blog
            </Link>
          </li>
          <li className={navbar__item}>
            <Link to="contact" className={navbar__link}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <section className={hero}>
        <h1 className={hero__title}>Jeff Knowles Jr</h1>
        <h2 className={hero__subtitle}>Front End Developer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit hic
          consectetur, cumque vel quos reiciendis ipsum dolores molestiae
          doloribus dolor?
        </p>
      </section>
      <section>
        <p>Things to learn about Gatsbys</p>
        <ul>
          <li>Can multiple classes be added to the same element?</li>
          <li>Is there anyway to ensure styling causes a force refresh.</li>
          <li>How should CSS really be organized?</li>
          <li>How can I built responsive CSS from the start.</li>
        </ul>
      </section>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
