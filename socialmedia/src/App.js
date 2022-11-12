import AppRouter from './components/AppRouter';
import './styles/App.css';
import './styles/authorization.css'
import CurrentUserStore from './stores/CurrentUserStore';
import CurrentUserContext from './context/CurrentUserContext';

function App() {

	const currentUserStore = new CurrentUserStore();

	return (
		<CurrentUserContext.Provider value={{currentUserStore}}>
			<AppRouter/>
		</CurrentUserContext.Provider>
	)	
}

export default App;
