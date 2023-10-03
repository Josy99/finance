import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style"
import logo from "../../assets/ignite-logo.svg"
import * as Dialog from "@radix-ui/react-dialog"
import { NewTransactionModal } from "../NewTransactionModal"

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
        {/* Caixa de dialogo */}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nava transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
