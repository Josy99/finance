import { SearchFormContainer } from "./style"
import { MagnifyingGlass } from "phosphor-react"
import { useForm } from "react-hook-form"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { TransactionsContext } from "../../contexts/TransactionsContext"
//criando esquema de validação
const searchFormSchema = zod.object({
  query: zod.string(),
})

//tipando o item dos froms
type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext)
  // usando o useForm
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  //função chamada pelo handleSubmit
  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer
      action=""
      onSubmit={handleSubmit(handleSearchTransactions)}
    >
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={24} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
