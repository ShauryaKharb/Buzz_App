const createExpoWebpackConfigAsync = require('@expo/webpack-config')
const paths = require('@expo/config/paths')

module.exports = async function (env, argv) {
	const config = await createExpoWebpackConfigAsync(env, argv)

	config.resolve.alias = {
		...config.resolve.alias,
		'@ant-design/react-native': 'antd-mobile',
		'@ant-design/icons-react-native': '@ant-design/icons-react',
	}

	// Maybe you want to turn off compression in dev mode.
	if (config.mode === 'development') {
		config.devServer.compress = false
	}

	// Or prevent minimizing the bundle when you build.
	if (config.mode === 'production') {
		config.optimization.minimize = false
	}

	return config
}
