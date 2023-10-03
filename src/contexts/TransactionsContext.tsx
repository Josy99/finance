import { ReactNode, createContext } from "react"
import { API } from "../lib/axios"
import { useEffect, useState } from "react"

interface Transaction {
  id: number
  description: string
  type: "income" | "outcome"
  category: string
  price: number
  createdAt: string
}

interface CreateTransactionsInputs {
  description: string
  type: "income" | "outcome"
  category: string
  price: number
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransactions: (data: CreateTransactionsInputs) => Promise<void>
}

interface TransactionsProviderPros {
  children: ReactNode
}
export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderPros) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  //Exibir uma transação
  async function fetchTransactions(query?: string) {
    const response = await API.get("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    })
    setTransactions(response.data)
  }
  //creando uma transação
  async function createTransactions(data: CreateTransactionsInputs) {
    const { category, description, price, type } = data

    const response = await API.post("/transactions", {
      description,
      type,
      category,
      price,
      createdAt: new Date(),
    })
    setTransactions((state) => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
