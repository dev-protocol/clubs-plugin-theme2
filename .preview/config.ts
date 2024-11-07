import { encode } from '@devprotocol/clubs-core'
import { GlobalConfig, HomeConfig } from '../src/types'
import HeroImage from '../src/assets/bg_image01.png'
import Logo from '../src/assets/logo.png'

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
				id: 'devprotocol:clubs:theme-2',
				options: [
					{
						key: 'homeConfig',
						value: {
							hero: {
								image: HeroImage.src,
								gradientColor: '#4a0c43',
								text: {
									ja: 'Into a world where magic and mystery intertwine.',
									en: 'Into a world where magic and mystery intertwine.',
								},
							},
							body: 'Hendrerit pellentesque tincidunt, sociis dictumst.',
							description: 'Description',
						} satisfies HomeConfig,
					},
					{
						key: 'globalConfig',
						value: {
							bg: '#fff',
							ink: '#000',
							logo: Logo.src,
						} satisfies GlobalConfig,
					},
				],
			},
			{
				id: 'example',
				options: [],
			},
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
								gradientColor: '#4a0c43',
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
								payload: new Uint8Array([98, 62, 172, 159, 95, 88, 96, 240]),
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
								payload: new Uint8Array([87, 163, 197, 95, 4, 64, 104, 5]),
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
								payload: new Uint8Array([56, 100, 246, 160, 19, 253, 12, 241]),
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
								payload: new Uint8Array([219, 147, 175, 66, 60, 105, 87, 121]),
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
								payload: new Uint8Array([157, 129, 78, 48, 48, 12, 231, 145]),
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
								payload: new Uint8Array([210, 227, 51, 234, 74, 195, 246, 191]),
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
								payload: new Uint8Array([25, 159, 109, 15, 97, 91, 23, 97]),
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
				payload: new Uint8Array([61, 192, 94, 90, 63, 143, 128, 99]),
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
				payload: new Uint8Array([223, 184, 5, 157, 157, 113, 151, 210]),
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
				payload: new Uint8Array([225, 164, 186, 106, 243, 112, 57, 90]),
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
				payload: new Uint8Array([24, 78, 173, 213, 194, 201, 142, 35]),
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
