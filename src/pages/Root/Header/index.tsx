import React from 'react';
import { shallow } from 'zustand/shallow';

import { Account, HeaderStyled, ManageAccount, Menu } from './styles';

import { useUserStore } from '../../../store/useUser';
import { useDialogStore } from '../../../store/useDialog';

import { SearchForm } from '../../../components/SearchForm';
import { Notify } from '../../../components/Notify';
import { Avatar } from '../../../components/Avatar';
import { Dialog } from '../../../components/Dialog';
import { UserForm } from '../../../components/UserForm';
import { Navbar } from '../../../components/Navbar';


export const Header: React.FC = () => {
  const user = useUserStore(store => store.user)

  const [userFormIsOpen, toggleUserFormIsOpen] = useDialogStore(store =>
    [store.userFormIsOpen, store.toggleUserFormIsOpen],
    shallow
  )

  return (
    <HeaderStyled>
      <Menu>
        <i className='bi bi-list' />
      </Menu>

      <Navbar />

      <SearchForm />

      <ManageAccount>
        <Notify />

        <span>|</span>

        <Account onClick={toggleUserFormIsOpen}>
          <Avatar
            isAuthor={true}
            username={user.name}
            avatarUrl={user.avatarUrl}
            sizeRem='1.2rem'
          />
          <strong>{user.name}</strong>
        </Account>

        <Dialog
          title='Atualize os dados do perfil'
          isOpen={userFormIsOpen}
          setIsOpen={toggleUserFormIsOpen}
        >
          <UserForm />
        </Dialog>
      </ManageAccount>
    </HeaderStyled>
  )
}