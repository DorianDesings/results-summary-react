import styled from 'styled-components';

const StyledCard = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1rem;
	padding: 0.5rem 1rem;
	border-radius: 0.75rem;
	font-weight: 600;
	color: ${({ color }) => color};
	background-color: ${({ bgcolor }) => bgcolor};
`;

export { StyledCard };
