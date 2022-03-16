import * as React from "react"
import Layout from "../components/ui/layout/Layout"
import PromoBlack from "../components/PromoBlack/PromoBlack"
import AskBlock from "../components/AskBlock/AskBlock"
import NotifyProvider from "../components/ui/Notify/NotifyProvider"
import { Helmet } from "react-helmet"

const IndexPage = () => {

    return (
          <NotifyProvider>
              <Helmet>
                  <meta charSet="utf-8" />
                  <title>Вагон Трейд - Покупка и продажа вагонов. Аренда. Запасные части.</title>
                  <link rel="canonical" href="https://vagontrade.ru" />
                  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                  <link rel="manifest" href="/site.webmanifest"/>
                  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffe500"/>
                  <meta name="msapplication-TileColor" content="#ffe500"/>
                  <meta name="theme-color" content="#ffe500"/>
              </Helmet>
            <Layout>
                <PromoBlack />
                <AskBlock />
            </Layout>
          </NotifyProvider>
  )
}

export default IndexPage
