import React from 'react';

import { Account, HeaderStyled, ManageAccount, Menu } from './styles';

import { useUserStore } from '../../../store/useUser';

import { SearchForm } from '../../../components/SearchForm';
import { Notify } from '../../../components/Notify';
import { Avatar } from '../../../components/Avatar';


export const Header: React.FC = () => {
  const user = useUserStore(store => store.user)

  return (
    <HeaderStyled>
      <Menu>
        <i className='bi bi-list' />
      </Menu>

      <SearchForm />

      <ManageAccount>
        <Notify />

        <span>|</span>

        <Account>
          <Avatar
            isAuthor={true}
            username={user.name}
            avatarUrl={user.avatarUrl}
            sizeRem='1.2rem'
          />
          <strong>{user.name}</strong>
        </Account>
      </ManageAccount>
    </HeaderStyled>
  )
}