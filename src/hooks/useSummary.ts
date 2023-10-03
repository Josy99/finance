import { TransactionsContext } from "../contexts/TransactionsContext"
import { useContext } from "react"

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)
  const summary = transactions.reduce(
    (acomulator, transaction) => {
      if (transaction.type === "income") {
        acomulator.income += transaction.price
        acomulator.total += transaction.price
      } else {
        acomulator.outcome += transaction.price
        acomulator.total -= transaction.price
      }

      return acomulator
    },

    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  )
  return summary
}
