import Hexagon from "@/assets/icons/Hexagon";

const ColouredHexagon = ({}) => {
	const offset = Math.floor(Math.random() * 3);
	const colorOffset = offset+7
	return <Hexagon className={`dark:text-celeste-${colorOffset-4}00 text-daintree-${colorOffset}00 h-36 w-32`} />;
}

export function BackgroundHexagons({}) {
	return (
		<div className="relative z-1 -right-28 -top-12 scale-50 sm:scale-75 md:scale-90 lg:scale-100">
			<div className="absolute overflow-clip right-0 rotate-45 w-96 grid grid-cols-3 opacity-50">
				{Array.from({ length: 3 }).map((i,index) => (
					<ColouredHexagon key={`hexagon-row-1:${index}`} />
				))}
			</div>
			<div className="absolute right-32 overflow-clip top-8 rotate-45 w-96 grid grid-cols-3 opacity-50">
				{Array.from({ length: 3 }).map((i,index) => (
					<ColouredHexagon key={`hexagon-row-2:${index}`} />
				))}
			</div>
		</div>
	);
}