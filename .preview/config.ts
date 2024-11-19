import { encode } from '@devprotocol/clubs-core'
import { GlobalConfig, HomeConfig } from '../src/types'
import HeroImage from '../src/assets/bg_image01.png'
import Logo from '../src/assets/logo.png'
import Gallery1 from '../src/assets/gallery/image01.png'
import Gallery2 from '../src/assets/gallery/image02.png'
import Gallery3 from '../src/assets/gallery/image03.png'
import Gallery4 from '../src/assets/gallery/image04.png'

export default () =>
	encode({
		name: 'passport-staging',
		twitterHandle: '',
		description: '',
		url: 'https://passport-staging.clubs.place',
		propertyAddress: '0xFF768Ef97f34314c79755C0F085fE784a9C6F575',
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
				key: '__draft',
				value: {
					isInDraft: false,
					address: '0xfc4a9e2B406C515415BBcF502A632aefB185A875',
				},
			},
		],
		plugins: [
			{
				id: 'devprotocol:clubs:plugin:akiba',
				options: [
					{
						key: 'homeConfig',
						value: {
							hero: {
								image: HeroImage.src,
								color: '#4a0c43',
								text: {
									ja: 'Into a world where magic and mystery intertwine.',
									en: 'Into a world where magic and mystery intertwine.',
								},
							},
							features: [
								{
									image: 'https://picsum.photos/512/308',
									color: '#B63075',
									title: {
										ja: 'メタリック アート キャンバス',
										en: 'Metallic Art Canvas',
									},
									description: {
										ja: 'ただいまご予約受付中',
										en: 'Now Accepting Reservations',
									},
									link: '',
								},
								{
									image: Gallery2.src,
									color: '#FF66C4',
									title: { ja: 'ニュースキンが可能', en: 'New skin available' },
									description: { ja: 'ただいまご予約受付中', en: 'Get Now' },
									link: '',
								},
								{
									image: Gallery3.src,
									color: '#B63075',
									title: {
										ja: 'メタリック アート キャンバス２',
										en: 'Metallic Art Canvas',
									},
									description: {
										ja: 'ただいまご予約受付中',
										en: 'Now Accepting Reservations',
									},
									link: '',
								},
								{
									image: Gallery4.src,
									color: '#FF66C4',
									title: {
										ja: 'ニュースキンが可能３',
										en: 'New skin available',
									},
									description: { ja: 'ただいまご予約受付中', en: 'Get Now' },
									link: '',
								},
							],
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
							copyright: '🄫CLUBS - FRAME00 Example',
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
							},
							description:
								'I create art in Canada using flowers and light refraction. Recently, I have focused on creating online artworks that allow user interaction through JavaScript.',
							body: "### Hi, I'm Alice!\n\nhttps://www.youtube.com/watch?v=WgDAezl1RrQ\n\nThe YouTube link you place will automatically display embedded. Try it! YouTube video can be a great help in making your activities briefly known.\n\nWant to use images in your description? Then try writing it like the following. You can see how the image will display later on the [Preview] page.\n\n![](https://images.unsplash.com/photo-1674420628423-bf7a338af32d)\n",
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
				options: [],
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
				id: 'devprotocol:clubs:plugin:passports',
				options: [],
			},
		],
		offerings: [
			{
				payload: {
					'0': 235,
					'1': 38,
					'2': 15,
					'3': 156,
					'4': 87,
					'5': 195,
					'6': 242,
					'7': 73,
				},
				price: 1.99,
				currency: 'USDC',
				name: 'Cat (Jumping)',
				imageSrc:
					'https://cdn.pixabay.com/photo/2023/04/15/17/19/cat-7928232_1280.png',
				previewImageSrc:
					'https://cdn.pixabay.com/photo/2023/04/15/17/19/cat-7928232_1280.png',
				fee: {
					percentage: 0,
					beneficiary: '0xfc4a9e2B406C515415BBcF502A632aefB185A875',
				},
				description: 'A jumping cat passport offering',
				id: '0xc3560087e1bd3ecf1e5cd3336183ca1659d41afa89ea5e401ce32fe6eb13601c',
				managedBy: 'devprotocol:clubs:plugin:passports',
			},
			{
				payload: {
					'0': 9,
					'1': 153,
					'2': 103,
					'3': 120,
					'4': 189,
					'5': 89,
					'6': 231,
					'7': 221,
				},
				price: 1.99,
				currency: 'USDC',
				name: 'Teddy (Jumping)',
				imageSrc:
					'https://cdn.pixabay.com/photo/2013/07/12/17/57/teddy-bear-152700_1280.png',
				previewImageSrc:
					'https://cdn.pixabay.com/photo/2013/07/12/17/57/teddy-bear-152700_1280.png',
				fee: {
					percentage: 0,
					beneficiary: '0xfc4a9e2B406C515415BBcF502A632aefB185A875',
				},
				description: 'A jumping teddy passport offering',
				id: '0xc21f44a4974cf884aa5f6556900922ea492f8116d4c91e039856b25122628b27',
				managedBy: 'devprotocol:clubs:plugin:passports',
			},
			{
				payload: {
					'0': 236,
					'1': 150,
					'2': 39,
					'3': 167,
					'4': 140,
					'5': 226,
					'6': 242,
					'7': 2,
				},
				price: 1.99,
				currency: 'USDC',
				name: 'Big Buck Bunny',
				imageSrc:
					'https://peach.blender.org/wp-content/uploads/poster_bunny_bunnysize.jpg',
				previewImageSrc:
					'https://peach.blender.org/wp-content/uploads/poster_bunny_bunnysize.jpg',
				fee: {
					percentage: 0,
					beneficiary: '0xfc4a9e2B406C515415BBcF502A632aefB185A875',
				},
				description:
					"Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\\n\\nLicensed under the Creative Commons Attribution license\\nhttp://www.bigbuckbunny.org",
				id: '0xc0fd83b3931be6a7ff9c5f701e4969f71b0eeafa3eda3a39ab0a5a2e6892f008',
				managedBy: 'devprotocol:clubs:plugin:passports',
			},
			{
				payload: {
					'0': 188,
					'1': 32,
					'2': 98,
					'3': 182,
					'4': 5,
					'5': 228,
					'6': 106,
					'7': 111,
				},
				price: 1.99,
				currency: 'USDC',
				name: 'Elephant Dream',
				imageSrc:
					'https://img.freepik.com/free-vector/sticker-template-elephant-cartoon-character_1308-72465.jpg',
				previewImageSrc:
					'https://img.freepik.com/free-vector/sticker-template-elephant-cartoon-character_1308-72465.jpg',
				fee: {
					percentage: 0,
					beneficiary: '0xfc4a9e2B406C515415BBcF502A632aefB185A875',
				},
				description: 'The first Blender Open Movie from 2006',
				id: '0x446246005d5831ce7c0f624b7fd624fb6c0f7407e736b1bc0846959dc1150ec0',
				managedBy: 'devprotocol:clubs:plugin:passports',
			},
			{
				payload: {
					'0': 24,
					'1': 4,
					'2': 173,
					'3': 107,
					'4': 168,
					'5': 63,
					'6': 193,
					'7': 191,
				},
				price: 0.99,
				currency: 'USDC',
				name: 'Puppy dog',
				imageSrc:
					'https://png.pngtree.com/png-clipart/20230405/original/pngtree-cute-cartoon-puppy-dog-sticker-png-image_9029367.png',
				previewImageSrc:
					'https://png.pngtree.com/png-clipart/20230405/original/pngtree-cute-cartoon-puppy-dog-sticker-png-image_9029367.png',
				fee: {
					percentage: 0,
					beneficiary: '0xfc4a9e2B406C515415BBcF502A632aefB185A875',
				},
				description: 'Lil puppy dog',
				id: '0x5521269f4c10b784da2d7f29f372893777f61f93ec84252e4e04486b2f549e27',
				managedBy: 'devprotocol:clubs:plugin:passports',
			},
			{
				payload: {
					'0': 11,
					'1': 102,
					'2': 69,
					'3': 206,
					'4': 250,
					'5': 89,
					'6': 200,
					'7': 85,
				},
				price: 0.99,
				currency: 'USDC',
				name: 'Baby panda',
				imageSrc:
					'https://i.pinimg.com/736x/a8/d9/ff/a8d9ff1dfda3311eb048c501d9f37b87.jpg',
				description: 'Lil baby panda',
				fee: {
					percentage: 0,
					beneficiary: '0xfc4a9e2B406C515415BBcF502A632aefB185A875',
				},
				previewImageSrc:
					'https://i.pinimg.com/736x/a8/d9/ff/a8d9ff1dfda3311eb048c501d9f37b87.jpg',
				id: '0x7d5e5eee8e2398e89f35a682a1c780dd6c1501b1da385c92e2ce5256e58e3a05',
				managedBy: 'devprotocol:clubs:plugin:passports',
			},
			{
				payload: {
					'0': 147,
					'1': 95,
					'2': 205,
					'3': 189,
					'4': 248,
					'5': 204,
					'6': 90,
					'7': 245,
				},
				price: 18.8,
				currency: 'USDC',
				name: 'Passport skin A',
				imageSrc:
					'https://cronuts.digital/wp-content/uploads/2020/04/Artboard-11-1024x724.png',
				previewImageSrc:
					'https://cronuts.digital/wp-content/uploads/2020/04/Artboard-11-1024x724.png',
				fee: {
					percentage: 0,
					beneficiary: '0xfc4a9e2B406C515415BBcF502A632aefB185A875',
				},
				description: 'Skin styling offering',
				id: '0xa96a34379db1f12c36c414e434077d9b5fd3974bace737828a208406aaf42767',
				managedBy: 'devprotocol:clubs:plugin:passports',
			},
			{
				payload: {
					'0': 176,
					'1': 65,
					'2': 45,
					'3': 42,
					'4': 203,
					'5': 46,
					'6': 13,
					'7': 235,
				},
				price: 18.8,
				currency: 'USDC',
				name: 'Passport Skin B',
				imageSrc:
					'https://opspl.com/wp-content/uploads/2023/10/logo-2582747_1280.png',
				previewImageSrc:
					'https://opspl.com/wp-content/uploads/2023/10/logo-2582747_1280.png',
				fee: {
					percentage: 0,
					beneficiary: '0xfc4a9e2B406C515415BBcF502A632aefB185A875',
				},
				description: 'Passport skin offering',
				id: '0xc745d171c52d6cfbb36fd2780f54a88584ca902dcaecdd90b5ad2e61dbdcaff9',
				managedBy: 'devprotocol:clubs:plugin:passports',
			},
		],
	})
