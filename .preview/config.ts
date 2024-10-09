import { encode } from '@devprotocol/clubs-core'
import { GlobalConfig, HomeConfig } from '../src/types'

export default () =>
	encode({
		name: 'Yashdesu Development',
		twitterHandle: '',
		description:
			'Development clubs used by @devprotocol- yashdesu with admin rights enforced.',
		url: 'https://yashdesudevelopment.clubs.place',
		propertyAddress: '0x803A63250d909549E3382EC18E828DAf05965c78',
		adminRolePoints: 50,
		chainId: 137,
		rpcUrl: 'https://polygon-rpc.com',
		options: [
			{
				key: 'navigationLinks',
				value: [
					{
						display: 'Home',
						path: '/',
					},
				],
			},
			{
				key: 'avatarImgSrc',
				value: 'https://i.imgur.com/lSpDjrr.jpg',
			},
			{
				isInDraft: false,
				address: '0xfc4a9e2B406C515415BBcF502A632aefB185A875',
			},
		],
		plugins: [
			{
				id: 'clubs-core:admin',
				name: 'admin',
				options: [],
			},
			{
				id: 'devprotocol:clubs:theme-1',
				name: 'defaultTheme',
				options: [
					{
						key: 'globalConfig',
						value: {
							bg: 'rgba(131, 138, 176, 1)',
							backgroundGradient: [
								'rgba(204, 0, 255, 0.2)',
								'rgba(204, 0, 255, 0)',
							],
						},
					},
					{
						key: 'homeConfig',
						value: {
							hero: {
								image: 'https://i.imgur.com/ldH4ZIo.jpg',
							},
							description:
								'I create art in Canada using flowers and light refraction. Recently, I have focused on creating online artworks that allow user interaction through JavaScript.',
							body: 'Hi there',
						},
					},
				],
			},
			{
				id: 'devprotocol:clubs:plugin:join',
				name: 'join',
				options: [],
			},
			{
				id: 'devprotocol:clubs:plugin:me',
				name: 'me',
				options: [],
			},
			{
				id: 'devprotocol:clubs:plugin:community',
				name: 'community',
				options: [],
			},
			{
				id: 'devprotocol:clubs:plugin:quests',
				name: 'quests',
				options: [],
			},
			{
				id: 'devprotocol:clubs:plugin:members',
				name: 'members',
				options: [],
			},
			{
				id: 'devprotocol:clubs:simple-memberships',
				name: 'memberships',
				options: [
					{
						key: 'memberships',
						value: [
							{
								id: 'deprecated-passport-skin',
								name: 'Deprecated passport skin',
								imageSrc: 'https://i.imgur.com/SVdBDEP.jpeg',
								currency: 'MATIC',
								price: 0.000001,
								description: 'This is my first passport skin.',
								payload: {
									'0': 98,
									'1': 62,
									'2': 172,
									'3': 159,
									'4': 95,
									'5': 88,
									'6': 96,
									'7': 240,
								},
								paymentType: 'instant',
								fee: {
									percentage: 1,
									beneficiary: '0xfc4a9e2B406C515415BBcF502A632aefB185A875',
								},
								deprecated: true,
							},
							{
								id: 'passport-image--one-piece',
								name: 'Passport Image- One Piece',
								imageSrc: 'https://i.imgur.com/2zGWsvL.jpeg',
								currency: 'MATIC',
								price: 0.000001,
								description:
									'This membership represents a passport item with image available at: https://wallpapersmug.com/large/d0eb43/monkey-d-luffy-one-piece-aime.jpg',
								payload: {
									'0': 87,
									'1': 163,
									'2': 197,
									'3': 95,
									'4': 4,
									'5': 64,
									'6': 104,
									'7': 5,
								},
								paymentType: 'instant',
								fee: {
									percentage: 1,
									beneficiary: '0xfc4a9e2B406C515415BBcF502A632aefB185A875',
								},
							},
							{
								id: 'passport-image--naruto',
								name: 'Passport Image- Naruto',
								imageSrc: 'https://i.imgur.com/Uhc4A5O.jpeg',
								currency: 'MATIC',
								price: 0.000001,
								description:
									'This is a passport item where the image used is available at https://cdn.pixabay.com/photo/2023/10/06/23/29/ai-generated-8299238_1280.jpg',
								payload: {
									'0': 56,
									'1': 100,
									'2': 246,
									'3': 160,
									'4': 19,
									'5': 253,
									'6': 12,
									'7': 241,
								},
								paymentType: 'stake',
								fee: {
									percentage: 0.1,
									beneficiary: '0xfc4a9e2B406C515415BBcF502A632aefB185A875',
								},
							},
							{
								id: 'passort-skin--css-type-a',
								name: 'Passort Skin- CSS Type A',
								imageSrc: 'https://i.imgur.com/dE4Ok06.png',
								currency: 'MATIC',
								price: 0.000001,
								description:
									'This is a passport skin with dummy CSS:\n\nwith CSS available at https://github.com/dev-protocol/clubsx/blob/main/src/pages/passport2/dummyData.css',
								payload: {
									'0': 219,
									'1': 147,
									'2': 175,
									'3': 66,
									'4': 60,
									'5': 105,
									'6': 87,
									'7': 121,
								},
								paymentType: 'custom',
								fee: {
									percentage: 0.4,
									beneficiary: '0xfc4a9e2B406C515415BBcF502A632aefB185A875',
								},
							},
							{
								id: 'passort-skin--css-type-b',
								name: 'Passort Skin- CSS Type B',
								imageSrc: 'https://i.imgur.com/59p923q.jpeg',
								currency: 'MATIC',
								price: 0.000001,
								description:
									'This is a passport skin with dummy CSS:\n\nwith CSS available at https://github.com/dev-protocol/clubsx/blob/main/src/pages/passport2/dummyData.css',
								payload: {
									'0': 157,
									'1': 129,
									'2': 78,
									'3': 48,
									'4': 48,
									'5': 12,
									'6': 231,
									'7': 145,
								},
								paymentType: 'custom',
								fee: {
									percentage: 0.8,
									beneficiary: '0xfc4a9e2B406C515415BBcF502A632aefB185A875',
								},
							},
							{
								id: 'second-membership',
								name: 'Second membership',
								imageSrc: 'https://i.imgur.com/BpU8tmF.jpeg',
								currency: 'MATIC',
								price: 0.000001,
								description: 'This is my second-membership',
								payload: {
									'0': 210,
									'1': 227,
									'2': 51,
									'3': 234,
									'4': 74,
									'5': 195,
									'6': 246,
									'7': 191,
								},
								paymentType: 'custom',
								fee: {
									percentage: 0.5,
									beneficiary: '0xfc4a9e2B406C515415BBcF502A632aefB185A875',
								},
								deprecated: true,
							},
							{
								id: 'first-membership',
								name: 'First membership',
								imageSrc: 'https://i.imgur.com/4Ci8YVx.jpeg',
								currency: 'MATIC',
								price: 0.000001,
								description: 'Membership for development purposes.',
								payload: {
									'0': 25,
									'1': 159,
									'2': 109,
									'3': 15,
									'4': 97,
									'5': 91,
									'6': 23,
									'7': 97,
								},
								paymentType: 'custom',
								fee: {
									percentage: 0.5,
									beneficiary: '0xfc4a9e2B406C515415BBcF502A632aefB185A875',
								},
								deprecated: true,
							},
						],
					},
				],
			},
			{
				id: 'devprotocol:clubs:gated-contact-form',
				name: 'message',
				options: [],
			},
			{
				id: 'devprotocol:clubs:clubsx:marketplace',
				name: 'marketplace',
				options: [],
			},
			{
				id: 'devprotocol:clubs:plugin:passport',
				name: 'passport',
				enable: true,
				options: [],
			},
		],
		offerings: [
			{
				payload: {
					'0': 61,
					'1': 192,
					'2': 94,
					'3': 90,
					'4': 63,
					'5': 143,
					'6': 128,
					'7': 99,
				},
				name: 'Passport Image- One Piece',
				imageSrc: 'https://i.imgur.com/2zGWsvL.jpeg',
				price: 0.000001,
				currency: 'MATIC',
				fee: {
					percentage: 0,
					beneficiary: '0xfc4a9e2B406C515415BBcF502A632aefB185A875',
				},
				description:
					'This membership represents a passport item with image available at: https://wallpapersmug.com/large/d0eb43/monkey-d-luffy-one-piece-aime.jpg',
				id: '0x853104df48aedb4f2438eab3b14e0ff808bc84c1c41a46b7059972687ffb4cbc',
				managedBy: 'devprotocol:clubs:plugin:passport',
			},
			{
				payload: {
					'0': 223,
					'1': 184,
					'2': 5,
					'3': 157,
					'4': 157,
					'5': 113,
					'6': 151,
					'7': 210,
				},
				name: 'Passport Image- Naruto',
				imageSrc:
					'https://cdn.pixabay.com/photo/2023/10/06/23/29/ai-generated-8299238_1280.jpg',
				price: 0.000001,
				currency: 'MATIC',
				fee: {
					percentage: 0,
					beneficiary: '0xfc4a9e2B406C515415BBcF502A632aefB185A875',
				},
				description:
					'This is a passport item where the image used is available at https://cdn.pixabay.com/photo/2023/10/06/23/29/ai-generated-8299238_1280.jpg',
				id: '0x6d3eb162876cda668a25af9576dfe89448c9818a761ae80c8f6ea3d874b551e0',
				managedBy: 'devprotocol:clubs:plugin:passport',
			},
			{
				payload: {
					'0': 225,
					'1': 164,
					'2': 186,
					'3': 106,
					'4': 243,
					'5': 112,
					'6': 57,
					'7': 90,
				},
				name: 'Passort Skin- CSS Type A',
				imageSrc: 'https://i.imgur.com/dE4Ok06.png',
				price: 0.000001,
				currency: 'MATIC',
				fee: {
					percentage: 0,
					beneficiary: '0xfc4a9e2B406C515415BBcF502A632aefB185A875',
				},
				description:
					'This is a passport skin with dummy CSS:  with CSS available at https://github.com/dev-protocol/clubsx/blob/main/src/pages/passport2/dummyData.css',
				id: '0xf93308f50be0e535a7c44b5db7f7244baa712c74319b01d19661868afc3a4726',
				managedBy: 'devprotocol:clubs:plugin:passport',
			},
			{
				payload: {
					'0': 24,
					'1': 78,
					'2': 173,
					'3': 213,
					'4': 194,
					'5': 201,
					'6': 142,
					'7': 35,
				},
				name: 'Passort Skin- CSS Type B',
				imageSrc: 'https://i.imgur.com/59p923q.jpeg',
				price: 0.000001,
				currency: 'MATIC',
				fee: {
					percentage: 0,
					beneficiary: '0xfc4a9e2B406C515415BBcF502A632aefB185A875',
				},
				description:
					'This is a passport skin with dummy CSS:  with CSS available at https://github.com/dev-protocol/clubsx/blob/main/src/pages/passport2/dummyData.css',
				id: '0x9d487b5cb4c4dd6771fe0b4b5b97388df6b3d88e5854c771737195505a980d93',
				managedBy: 'devprotocol:clubs:plugin:passport',
			},
		],
	})
