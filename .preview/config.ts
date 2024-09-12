import { encode } from '@devprotocol/clubs-core'
import { GlobalConfig, HomeConfig } from '../src/types'

export default () =>
	encode({
		name: 'Debug',
		twitterHandle: '@debug',
		description: '',
		url: '',
		propertyAddress: '',
		chainId: 137,
		rpcUrl: 'https://polygon-rpc.com/',
		adminRolePoints: 0,
		plugins: [
			{
				id: 'devprotocol:clubs:theme-2',
				options: [
					{
						key: 'homeConfig',
						value: {
							hero: {
								image:
									'https://images.unsplash.com/photo-1681106447892-fde093d56df8?q=80&w=2626&auto=format&fit=crop',
								text: '',
							},
							body: 'Hendrerit pellentesque tincidunt, sociis dictumst.',
							description: 'Description',
						} satisfies HomeConfig,
					},
					{
						key: 'globalConfig',
						value: { bg: '#1D1464', ink: '#fff' } satisfies GlobalConfig,
					},
				],
			},
			{
				id: 'example',
				options: [],
			},
		],
	})
