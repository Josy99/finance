import { ThemeProvider } from "styled-components"
import { defaultThemes } from "./style/themes/default"
import { GlobalStyle } from "./style/global"
// import { BrowserRouter } from "react-router-dom"
import { Transaction } from "./pages/Transactions"
import { TransactionsProvider } from "./contexts/TransactionsContext"
// import { Router } from "./Router"
export function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <TransactionsProvider>
        <Transaction />
      </TransactionsProvider>
      {/* <BrowserRouter></BrowserRouter> */}
      <GlobalStyle />
    </ThemeProvider>
  )
}
