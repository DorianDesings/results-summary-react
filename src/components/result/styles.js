import styled from 'styled-components';

const ResultContainer = styled.div`
	background-image: linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%));
	color: white;
	border-radius: 1rem;
	padding: 1rem 4rem;
	text-align: center;
`;

const ResultTitle = styled.h2`
	color: #ecf2ff;
	margin-bottom: 3rem;
`;

const ResultCircle = styled.h2`
	background-image: linear-gradient(
		hsla(256, 72%, 46%, 1),
		hsla(241, 72%, 46%, 0)
	);
	border-radius: 50%;
	width: 200px;
	height: 200px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto 2rem;
`;

const ResultBigNumber = styled.span`
	font-size: 4.5rem;
`;

const ResultSmallNumber = styled.span`
	color: #cac9ff;
	font-weight: bold;
	font-size: 1.125rem;
`;

const ResultSubtitle = styled.h2`
	font-weight: bold;
	font-size: 2rem;
`;

const ResultText = styled.p`
	font-size: 1.125rem;
	line-height: 1.5;
	color: #cac9ff;
`;

export {
	ResultContainer,
	ResultTitle,
	ResultCircle,
	ResultBigNumber,
	ResultSmallNumber,
	ResultSubtitle,
	ResultText
};
