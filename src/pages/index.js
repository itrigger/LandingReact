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
                  <title>Вагон Трейд - Покупка и продажа вагонов. Аренда и ЖД сервис. Запасные части.</title>
                  <link rel="canonical" href="https://vagontrade.ru" />
              </Helmet>
            <Layout>
                <PromoBlack />
                <AskBlock />
            </Layout>
          </NotifyProvider>
  )
}

export default IndexPage
