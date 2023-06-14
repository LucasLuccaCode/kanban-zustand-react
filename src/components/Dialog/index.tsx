import React from 'react'
import { shallow } from 'zustand/shallow'

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

import { useDialogStore } from '../../store/useDialog'

import { TaskForm } from '../TaskForm'

export const Dialog: React.FC = () => {
  const [isOpen, toggleDialog] = useDialogStore((store) =>
    [store.isOpen, store.toggleDialog],
    shallow
  )

  return (
    <DialogRoot open={isOpen} onOpenChange={toggleDialog}>
      <DialogPortal>
        <DialogOverlay>
          <DialogContent>
            <Header>
              <DialogTitle>Adicione uma tarefa</DialogTitle>

              <DialogClose asChild>
                <IconButton className='bi bi-x' aria-label='Close' />
              </DialogClose>
            </Header>

            <TaskForm />
          </DialogContent>
        </DialogOverlay>
      </DialogPortal>
    </DialogRoot>
  )
}
