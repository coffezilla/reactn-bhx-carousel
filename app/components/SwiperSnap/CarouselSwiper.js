import { View, ScrollView, Dimensions } from 'react-native';

// wrapper
export const CarouselSwiper = ({ children, gap = 0, offset = 0, cols = 1 }) => {
	const gapBox = gap;
	const screenOffset = offset;
	const boxPerGrid = cols;

	const screenWidth = Dimensions.get('window').width;
	const screenWidthUsefull = gapBox * (boxPerGrid - 1) + screenOffset * 2;
	const boxGridWidth = (screenWidth - screenWidthUsefull) / boxPerGrid;

	const totalChilds = children.length;

	return (
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'flex-start',
			}}
		>
			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				style={{
					alignSelf: 'flex-start',
				}}
				snapToInterval={boxGridWidth + gapBox}
			>
				{children.map((child, index) => {
					if (index === 0) {
						return (
							<SwiperSnapItem
								key={index}
								gap={gap}
								offset={offset}
								width={boxGridWidth}
								position='first'
							>
								{child}
							</SwiperSnapItem>
						);
					}
					if (index === totalChilds - 1) {
						return (
							<SwiperSnapItem
								key={index}
								gap={gap}
								offset={offset}
								width={boxGridWidth}
								position='last'
							>
								{child}
							</SwiperSnapItem>
						);
					}
					return (
						<SwiperSnapItem
							key={index}
							gap={gap}
							offset={offset}
							width={boxGridWidth}
							position='middle'
						>
							{child}
						</SwiperSnapItem>
					);
				})}
			</ScrollView>
		</View>
	);
};

// single item
const SwiperSnapItem = ({
	children,
	offset,
	gap,
	width,
	position = 'middle',
}) => {
	return (
		<>
			<View
				style={{
					width: width,
					marginLeft: position === 'first' ? offset : 0,
					marginRight: position === 'last' ? offset : gap,
				}}
			>
				{children}
			</View>
		</>
	);
};
