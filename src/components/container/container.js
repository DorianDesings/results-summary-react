import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	max-width: 768px;
	margin-inline: auto;
	border-radius: 0 2rem 2rem 0;
	background-color: #fff;
`;

export { Container };
