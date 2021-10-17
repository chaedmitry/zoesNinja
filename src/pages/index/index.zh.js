import React from "react"
import { Link } from 'gatsby'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import girl from "../../../static/girl.jpeg"

function Home() {
  return (
      <Layout isHomePage lang="zh">
        <Seo title="Home" />
        <img className="author-illustration" alt="Illustration of Zoe" src={girl}/>
        <h1>嗨，我是佐伊，這是我的癌症之旅</h1>
        <p className="cn">二〇二〇 年伊始，才四十出頭的我意外地確診極罕見口水腺癌。手術、放療和漫長的康復程忽然煞停日理萬機的生活。</p>
        <p className="cn">幾位朋友不約而同建議我趁這難得的人生「强制半場休息」記錄患病、治療和康復的經驗，與素未謀面的病友及其親友分享，説不定給他們一絲安慰、盼望。</p>
        <p className="cn">作爲一個生物、遺傳學家，學以致用、客觀瞭解自身病情和面對世紀疫情是平常事。我少不免會與大家分享患病期間有關生物、醫學的細節，然而此網誌的主旨不是醫學，也不是病，是人 —  人的脆弱與柔韌，還有我們身邊不太顯眼卻滿滿的愛。</p>
        <Link className="button button-accent" to="zh/chapters/01-the-first-encounter">讓旅程開始吧！</Link>
      </Layout>
  )
}

export default Home