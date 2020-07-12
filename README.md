<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>

## 🚀 Como criar links entre as páginas
Importe a dependência `Link` do Gatsby e passe a rota na prop `to`
    Basta criar um novo componente na pasta `pages`.
    O nome do componente deve ser acompanhado do sufixo `Page`.
    ```javascript

    import React from "react"
    import { Link } from 'gatsby'
    import Layout from "../components/layout"
    import SEO from "../components/seo"

    const IndexPage = () => (
      <Layout>
        <SEO title="Home" />
        <h1>Home</h1>
        <ul>
          <li><a href="/about">Sobre</a></li>
          <li><Link to="/about">Sobre (na aplicação)</Link></li>
        </ul>
        
        
      </Layout>
    )

    export default IndexPage

    
    ```

## Vantagens de utilizar `Link`
- Ao dar um hover, o componente Link proporciona um pre-fetch da página
- Carregamento mais rápido
- Não sair da estrutura do Gatsby