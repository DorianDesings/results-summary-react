import {
	ResultBigNumber,
	ResultCircle,
	ResultContainer,
	ResultSmallNumber,
	ResultSubtitle,
	ResultText,
	ResultTitle
} from './styles';

const Result = () => {
	return (
		<ResultContainer>
			<ResultTitle>Your Result</ResultTitle>
			<ResultCircle>
				<ResultBigNumber>76</ResultBigNumber>
				<ResultSmallNumber>of 100</ResultSmallNumber>
			</ResultCircle>
			<ResultSubtitle>Great</ResultSubtitle>
			<ResultText>
				Your performance exceed 65% of the people conducting the test here!
			</ResultText>
		</ResultContainer>
	);
};

export default Result;
