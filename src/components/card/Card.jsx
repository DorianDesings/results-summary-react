import { StyledCard } from './styles';

const Card = ({ icon, alt, title, value, total, color, bgcolor }) => {
	return (
		<StyledCard color={color} bgcolor={bgcolor}>
			<img src={icon} alt={alt} />
			<p>{title}</p>
			<p>
				{value} / {total}
			</p>
		</StyledCard>
	);
};

export default Card;
