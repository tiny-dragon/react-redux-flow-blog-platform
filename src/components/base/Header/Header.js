// @flow
import React, { type Node } from 'react';
import Responsive from 'components/common/Responsive';
import './Header.scss';

type Props = {
  right: Node,
  userMenu: Node
};

const Header = ({ right, userMenu }: Props) => (
  <header className="base header">
    <Responsive className="header-wrapper">
      <div className="brand">
        Prag
      </div>
      <nav>
        <a className="active" href="/">Trending</a>
        <a href="/">Latest Article</a>
        <a href="/">Tag</a>
      </nav>
      <div className="right">
        {right}
        {userMenu}
      </div>
    </Responsive>
  </header>
);

export default Header;
