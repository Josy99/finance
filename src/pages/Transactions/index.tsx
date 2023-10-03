import { useContext } from "react"
import { Header } from "../../components/Header"
import { SearchForm } from "../../components/SearchForm"
import { Summary } from "../../components/Summry"
import { TransactionsContext } from "../../contexts/TransactionsContext"
import { priceFormatter, dateFormatter } from "../../utils/formatter"

import {
  PriceHighlight,
  TransactionContainer,
  TransactionContainerTable,
} from "./style"

export function Transaction() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionContainerTable>
          <tbody>
            {transactions.map((transactions) => (
              <tr key={transactions.id}>
                <td width="50%">{transactions.description}</td>
                <td>
                  <PriceHighlight variant={transactions.type}>
                    {transactions.type === "outcome" && "- "}
                    {priceFormatter.format(transactions.price)}
                  </PriceHighlight>
                </td>
                <td>{transactions.category}</td>
                <td>
                  {dateFormatter.format(new Date(transactions.createdAt))}
                </td>
              </tr>
            ))}
          </tbody>
        </TransactionContainerTable>
      </TransactionContainer>
    </div>
  )
}
