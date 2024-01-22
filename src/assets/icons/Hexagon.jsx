export default function Hexagon({ className, ...props }) {
	return (
		<svg
			className={className}
			fill="currentColor"
			height="800px"
			width="800px"
			version="1.1"
			id="Capa_1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 184.751 184.751"
			{...props}
		>
			<path
				transform="rotate(90,92.4,92.4)"
				d="M 0 92.4 l 46.2 -80 h 92.4 l 46.2 80 l -46.2 80 H 46.2 L 0 92.4 z"
			/>
		</svg>
	);
}
