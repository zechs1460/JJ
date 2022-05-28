import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Contact from "../components/Contact"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <Contact />
    </div>
  </Layout>
)

export default IndexPage
