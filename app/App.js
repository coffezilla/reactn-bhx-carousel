import { StyleSheet, Text, View } from 'react-native';

// swiper
import { CarouselSwiper } from './components/SwiperSnap';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.wrapperCarousel}>
				<CarouselSwiper cols={2} gap={10} offset={30}>
					<View style={styles.itemCarousel}>
						<Text>First</Text>
					</View>
					<View style={styles.itemCarousel}>
						<Text>Second</Text>
					</View>
					<View style={styles.itemCarousel}>
						<Text>Third</Text>
					</View>
					<View style={styles.itemCarousel}>
						<Text>Fourth</Text>
					</View>
				</CarouselSwiper>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	wrapperCarousel: {
		backgroundColor: 'red',
	},
	itemCarousel: {
		height: 200,
		backgroundColor: 'orange',
	},
});
