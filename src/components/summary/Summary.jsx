import Button from '../button/Button';
import Card from '../card/Card';
import { StyledSummary, SummaryTitle } from './styles';

const Summary = () => {
	return (
		<StyledSummary>
			<SummaryTitle>Summary</SummaryTitle>
			<Card
				icon='/images/icon-reaction.svg'
				alt='Icon reaction'
				title='Reaction'
				value={80}
				total={100}
				bgcolor='rgba(255, 85, 85, 0.2)'
				color='#FF5555'
			/>
			<Card
				icon='/images/icon-memory.svg'
				alt='Icon memory'
				title='Memory'
				value={92}
				total={100}
				bgcolor='rgba(249, 252, 80, 0.2)'
				color='#FFB21E'
			/>
			<Card
				icon='/images/icon-verbal.svg'
				alt='Icon verbal'
				title='Verbal'
				value={61}
				total={100}
				bgcolor='rgba(80, 252, 80, 0.2)'
				color='#00BB8F'
			/>
			<Card
				icon='/images/icon-visual.svg'
				alt='Icon visual'
				title='Visual'
				value={72}
				total={100}
				bgcolor='rgba(80, 134, 252, 0.2)'
				color='#1125D6'
			/>
			<Button>Continue</Button>
		</StyledSummary>
	);
};

export default Summary;
