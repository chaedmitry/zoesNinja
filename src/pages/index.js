import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import Seo from "../components/seo"
import girl from "../../content/assets/girl.jpeg"

function Home() {
  return (
      <Layout isHomePage>
        <Seo title="Home" />
        <h1>Hi, I'm Zoe, and&nbsp;here's my&nbsp;cancer journey</h1>
        <img src={girl}/>
        <p>2020 had just begun when I was hit by an unexpected diagnosis of a very rare cancer of the salivary gland. It jolted the hectic life of this forty-something years old into a sudden halt as surgery, radiotherapy and a long recovery phase ensued.</p>
        <p>Several friends independently came up with the suggestion of recording my cancer journey while I am on this mandatory mid-life career break. Perhaps my experience would bring solace and hope to other cancer patients, their families and friends.</p>
        <p>As a biologist and geneticist, it is ordinary that I looked at my own illness and the pandemic through the objective scientific lens, so I hope you won’t be surprised to come across passages describing some details about my illness. Yet, the theme of this blog is not medical science or diseases, but people — our fragility and resilience, as well as the hidden abundance of love around us.</p>
        <hr></hr>
        <p className="cn">二〇二〇 年伊始，才四十出頭的我意外地確診極罕見口水腺癌。手術、放療和漫長的康復程忽然煞停日理萬機的生活。</p>
        <p className="cn">幾位朋友不約而同建議我趁這難得的人生「强制半場休息」記錄患病、治療和康復的經驗，與素未謀面的病友及其親友分享，説不定給他們一絲安慰、盼望。</p>
        <p className="cn">作爲一個生物、遺傳學家，學以致用、客觀瞭解自身病情和面對世紀疫情是平常事。我少不免會與大家分享患病期間有關生物、醫學的細節，然而此網誌的主旨不是醫學，也不是病，是人 —  人的脆弱與柔韌，還有我們身邊不太顯眼卻滿滿的愛。</p>
        
        <Link className="button button-accent" to="/chapters">Let the journey begin!</Link>
      </Layout>
  )
}

export default Home


