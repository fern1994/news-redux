import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Adminpage from '../page/Adminpage';
import EditNewspage from '../page/EditNewspage';
import AddNewspage from '../page/AddNewspage';
import NewsAdminpage from '../page/NewsAdminpage';
import MyNewspage from '../page/MyNewspage';

const Router_Admin = () => (
  // <main>
    <Switch>
      <Route exact path='/admin/home' component={Adminpage} />
      <Route path='/admin/addNews' component={AddNewspage} />
      <Route path='/admin/editNews/:postId' component={EditNewspage} />
      <Route path='/admin/news/:postId' component={NewsAdminpage} />
      <Route path='/admin/myNews' component={MyNewspage}/>
    </Switch>
  // </main>
)
export default Router_Admin;
