import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
    <p>You have reached the digital garden of Joe Hallenbeck
        (<a rel="me" href="https://hackers.town/@lordbowlich">Lord Bowlich</a>),
        also known as a digital brain, a knowledgebase or a zettelkasten. I
        intend to provide a public working record of knowledge and ideas that I
        am working on irrespective of subject matter. In this manner it is a
        tool for my usage, but perhaps as a public record it can be useful for
        many exploring similar disciplines.</p>

    <p><a href="https://hapgood.us/2015/10/17/the-garden-and-the-stream-a-technopastoral/">
        Hapgood</a> describes the digital garden as existing in opposition to
        the digital stream. The later is ordered chronologically and exists
        as a form of dialectic. Posts in the stream are closed for editing
        once published. My <a href="https://joehallenbeck.com">blog</a>&nbsp;
        fulfills this function. The garden however, is a series of notes
        and pages that are open for editing -- they are "evergreen" as&nbsp;
        <a href="https://notes.andymatuschak.org/z4SDCZQeRo4xFEQ8H4qrSqd68ucpgE6LU155C">
        Andy Matuschak</a> puts it.</p>

    <p>The garden is structured as an unindexed wiki with articles
        bidirectionally linked into a web of interconnected concepts and ideas.
        You get the most out of it by choosing a place to start, and then
        wandering through the network as you please.</p>

    <p>A good place to start is on the <Link to="/container/brain">Top of My Mind</Link> page.</p>
    </Layout>
)

export default IndexPage
