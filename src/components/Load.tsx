import React from 'react'
import { StyleSheet, View } from 'react-native'

import LottieView from 'lottie-react-native'

import loading from '@assets/loading.json'

const Load = () => (
	<View style={styles.container}>
		<LottieView source={loading} autoPlay loop style={styles.animation} />
	</View>
)

export default Load

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	animation: {
		backgroundColor: 'transparent',
		width: 200,
		height: 200,
	},
})
