import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import { Helmet } from "react-helmet";
import CookieConsent from "react-cookie-consent";
import { Timeline, Events, TextEvent, themes, createTheme } from '@merc/react-timeline';


const customTheme = createTheme(themes.default, {
    card: {
        backgroundColor: '#dbe2ff',
    },
    date: {
        backgroundColor: '#2D50E9',
    },
    marker: {
        borderColor: '#2D50E9',
    },
    timelineTrack: {
        backgroundColor: '#2D50E9',
    },
});



function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary intro', styles.heroBanner)}>
            <div className="container">
                <br />
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


            <main>

                <CookieConsent>This site uses cookies like Google Analytics and Google Tag Manager to operate.</CookieConsent>


                <Timeline theme={customTheme}>
                    <Events>
                        <TextEvent
                            date="8/3/22"
                            text="**First** Apple Event of the year"
                        />

                        <TextEvent
                            date="7/3/22"
                            text="**First major** release of *reeceatkinson.github.io*"
                        />

                        <TextEvent
                            date="29/12/21"
                            text="**Released** Electric Purple VS Code Theme"
                        />

                    </Events>
                </Timeline>
            </main>
        </Layout>
    );
}
