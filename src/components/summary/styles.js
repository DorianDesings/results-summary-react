import styled from 'styled-components';

const StyledSummary = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem 2.5rem;
	border-radius: 0.75rem;
	color: ${({ color }) => color};
	background-color: #fff;
`;

const SummaryTitle = styled.h2`
	margin-bottom: 2rem;
`;

export { StyledSummary, SummaryTitle };
