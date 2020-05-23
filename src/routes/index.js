import React from 'react';
import {Link} from 'react-router-dom';
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Rank from '../application/Rank';
import Singers from '../application/Singers';

export default [
  {
    path: '/',
    component: Home,
    router: [
      {
        path: '/',
        exact: true,
        render: () => <Link to='/recommend' />
      },
      {
        path: '/recommend',
        component: Recommend
      },
      {
        path: '/singers',
        component: Singers
      },
      {
        path: '/rank',
        component: Rank
      }
    ]
  }
];
