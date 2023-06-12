import React from 'react';

import { Account, HeaderStyled, ManageAccount, Menu } from './styles';

import { SearchForm } from '../../../components/SearchForm';
import { Notify } from '../../../components/Notify';


export const Header: React.FC = () => {
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
          <i className='bi bi-person-circle' />
          <strong>John Doe</strong>
        </Account>
      </ManageAccount>
    </HeaderStyled>
  )
}