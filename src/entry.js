import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import Children from './components/Children'
import Assistance from './components/Assistance'
import ChildIncome from './components/ChildIncome'
import AdultIncome from './components/AdultIncome'
import Contact from './components/Contact'
import Question1Container from './containers/Question1Container'
import { Question3Container, Question4Container, Question5Container, Question6Container, Question7Container,
		 Question8Container, Question9Container, Question10Container, Question11Container} from './containers/childInfoContainers'
import { Question12Container, Question13Container, Question14Container, Question15Container, Question16Container,
		 Question17Container, ContactContainer } from './containers/adultInfoContainers'
import { ConfirmationContainer } from './containers/ConfirmationContainer'
import Question1 from './components/ChildrenQuestions/Question1'
import Question2 from './components/ChildrenQuestions/Question2'
import Question8 from './components/ChildIncomeQuestions/Question8'
import Question12 from './components/AdultIncomeQuestions/Question12'
import Question17 from './components/AdultIncomeQuestions/Question17'

import Router, { Route, Link, IndexRoute, browserHistory } from 'react-router'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import usdaApp from './reducers'
import { addChildNames, updateChildInfo, addAdultNames, updateAdultInfo, updateContactInfo, updateSSN } from './actions'
import Start from './components/Start'

let store = createStore(usdaApp)


render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Start}/>
				<Route path="children" component={Children}>
					<Route path="1" component={Question1Container}/>
					<Route path="2" component={Question2}/>
					<Route path="3" component={Question3Container}/>
					<Route path="4" component={Question4Container}/>
					<Route path="5" component={Question5Container}/>
					<Route path="6" component={Question6Container}/>
				</Route>
				<Route path="assistance" component={Question7Container} />
				<Route path="childIncome" component={ChildIncome}>
					<Route path="8" component={Question8Container}/>
					<Route path="9" component={Question9Container}/>
					<Route path="10" component={Question10Container}/>
					<Route path="11" component={Question11Container}/>
				</Route>
				<Route path="adultIncome" component={AdultIncome}>
					<Route path="12" component={Question12Container}/>
					<Route path="13" component={Question13Container}/>
					<Route path="14" component={Question14Container}/>
					<Route path="15" component={Question15Container}/>
					<Route path="16" component={Question16Container}/>
					<Route path="17" component={Question17Container}/>
				</Route>
				<Route path="contact" component={ContactContainer}/>
				<Route path="confirm" component={ConfirmationContainer}/>
			</Route>
		</Router>
	</Provider>, document.getElementById('root')
	)
