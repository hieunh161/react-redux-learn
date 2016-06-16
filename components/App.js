import React,{ Component }  from 'react'
import AddTodo from '../containers/AddTodo'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = ({params}) => (
      <div>
        <AddTodo/>
        <VisibleTodoList filter={params.filter || 'all'}/>
        <Footer/>
      </div>
    )

export default App
