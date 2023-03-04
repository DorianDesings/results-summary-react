import { Container } from './components/container/container';
import Result from './components/result/Result';
import Summary from './components/summary/Summary';

const App = () => {
	return (
		<Container>
			<Result />
			<Summary />
		</Container>
	);
};

export default App;
