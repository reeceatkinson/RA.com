import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import { Helmet } from "react-helmet";
import CookieConsent from "react-cookie-consent";



function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary intro', styles.heroBanner)}>
      <div className="container">
        <br />
        <h1 className="hero__title">Hi I am Reece Atkinson...</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Reece Atkinson"
      description="Reece Atkinson's portfolio website.">
      <HomepageHeader />
      <div class='social'>
        <a target="_blank" href='https://github.com/reeceatkinson'>
          <i style={{color: "#2D50E9"}} class="fa-brands fa-github"></i>
        </a>
        <a target="_blank" href='https://codepen.io/reeceatkinson'>
          <i style={{color: "#2D50E9"}} class="fa-brands fa-codepen"></i>
        </a>
      </div>

      <main>

      <CookieConsent>This site uses cookies like Google Analytics and Google Tag Manager to operate.</CookieConsent>

        <Helmet>
          <meta name="google-site-verification" content="yzvU1ww5JD45dSY0qjuOEpWI8KCw9Zr00mj6oP7F3V4" />
          <script src="https://kit.fontawesome.com/8b3bc16410.js" crossorigin="anonymous"></script>
        </Helmet>
        <br /><br />
        <h3 class='deskreq'>To view the about summary please navigate to desktop.</h3>
        <div class='page'>
          <h1 class='head'>About Me:</h1>
          <div class='gridmobile'>
            <div>
              <h2 class='gridmobilehead'>Web Languages:</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Swift (Starter)</li>
              </ul>
            </div>
            <div>
              <h2 class='gridmobilehead'>Web Frameworks:</h2>
              <ul>
                <li>React</li>
                <li>Docusaurus</li>
                <li>SwiftUI (Starter)</li>
                <li>Google Material Design</li>
                <li>Microsoft Fluent UI</li>
              </ul>
            </div>
            <div>
              <h2 class='gridmobilehead'>Contributed to:</h2>
              <ul>
                <li>Codecademy Docs (2)</li>
                <li>GitHub Primer CSS Website (1)</li>
                <li>WebKit (1)</li>
              </ul>
            </div>
          </div>


          <div class='grid'>
            <div>
              <h2 class='shortabout'>Web Languages:</h2>
              <ul class="aboutul">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Swift (Starter)</li>
              </ul>
            </div>
            <div>
              <h2 class='shortabout'>Frameworks:</h2>
              <ul class="aboutul">
                <li>React</li>
                <li>Docusaurus</li>
                <li>SwiftUI (Starter)</li>
                <li>Material Design</li>
              </ul>
            </div>
            <div>
              <h2 class='shortabout'>Contributed to:</h2>
              <ul class="aboutul">
                <li>Codecademy Docs (2)</li>
                <li>GitHub Primer CSS Website (1)</li>
                <li>WebKit (1)</li>
              </ul>
            </div>
          </div>
          <br />
          <h1 class='head'>My Projects:</h1>
        </div>
        <div class="project">
          <h2>Electric Purple:</h2>
          <p>Electric Purple is a theme that makes your dev environment more colourful but maintains the dark mode that developers love to prevent eye strain. <a class="projecta" href='https://marketplace.visualstudio.com/items?itemName=reece.electric-purple'>Go to VS Code Marketplace</a></p>
          <a style={{color: "#ffafd0"}} href="https://www.producthunt.com/posts/electric-purple-vs-code-theme?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-electric-purple-vs-code-theme" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=324898&theme=light" alt="Electric Purple VS Code Theme - A theme that will brighten your env and not strain your eyes | Product Hunt" width="250" height="54" /></a>
        </div>
        <br />
        <div class="project">
          <h2>TLDR Policies:</h2>
          <p>TLDR is a web application that lets you copy and paste the terms or privacy policies of a website and summarise it in 10 bullet points. <a class="projecta"  href='https://tldrpolicies.web.app'>Go to TLDR Policies</a></p>
        </div>
        <br />
        <div class="project">
          <h2>ADXM Music Store <small style={{color: "darkblue"}}>(Client Project)</small>:</h2>
          <p>A music store where people can buy drafts of ADXM's unreleased songs. <a class="projecta" href="https://wolfbeats.web.app" target="_blank">Go to ADXM</a></p>
        </div>
        <br />
        <div class="project" style={{backgroundColor: "#ffedbd"}}>
          <h2 style={{color: "#ffbb00"}}>[WIP] Studio:</h2>
          <p style={{color: "ffafd0"}}>A browser where people can get more done as a team with secure SSO.</p>
        </div>
        <br />       

      </main>
      <br />
    </Layout>
  );
}
