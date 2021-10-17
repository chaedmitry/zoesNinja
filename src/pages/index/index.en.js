import React from "react"
import { Link } from 'gatsby'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import girl from "../../../static/girl.jpeg"

function Home() {
  return (
      <Layout isHomePage lang="en">
        <Seo title="Home" />
        <img className="author-illustration" alt="Illustration of Zoe" src={girl}/>
        <h1>Hi, I'm Zoe, and here's my cancer journey</h1>
        <p>2020 had just begun when I was hit by an unexpected diagnosis of a very rare cancer of the salivary gland. It jolted the hectic life of this forty-something years old into a sudden halt as surgery, radiotherapy and a long recovery phase ensued.</p>
        <p>Several friends independently came up with the suggestion of recording my cancer journey while I am on this mandatory mid-life career break. Perhaps my experience would bring solace and hope to other cancer patients, their families and friends.</p>
        <p>As a biologist and geneticist, it is ordinary that I looked at my own illness and the pandemic through the objective scientific lens, so I hope you won’t be surprised to come across passages describing some details about my illness. Yet, the theme of this blog is not medical science or diseases, but people — our fragility and resilience, as well as the hidden abundance of love around us.</p>
        <Link className="button button-accent" to="/chapters/01-the-first-encounter">Let the journey begin!</Link>
      </Layout>
  )
}

export default Home