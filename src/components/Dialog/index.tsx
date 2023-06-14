import React, { ReactNode } from 'react'

import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  IconButton,
  Header,
} from './styles'

interface IDialogProps {
  children: ReactNode
  title: string
  isOpen: boolean
  setIsOpen(): void
}

export const Dialog: React.FC<IDialogProps> = ({ children, title, isOpen, setIsOpen }) => {
  return (
    <DialogRoot open={isOpen} onOpenChange={setIsOpen}>
      <DialogPortal>
        <DialogOverlay>
          <DialogContent>
            <Header>
              <DialogTitle>{title}</DialogTitle>

              <DialogClose asChild>
                <IconButton className='bi bi-x' aria-label='Close' />
              </DialogClose>
            </Header>

            {children}
          </DialogContent>
        </DialogOverlay>
      </DialogPortal>
    </DialogRoot>
  )
}
