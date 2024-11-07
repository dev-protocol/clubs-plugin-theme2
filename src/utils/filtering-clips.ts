import { PassportItemAssetType } from '@devprotocol/clubs-plugin-passport'

const SKIN = ['css', 'stylesheet-link']
const CLIP = ['image', 'image-link']
const BGM = ['bgm', 'bgm-link']
const VIDEO = ['video', 'video-link']

export const getTagName = (tag: PassportItemAssetType) => {
	return SKIN.includes(tag)
		? 'Skin'
		: CLIP.includes(tag)
			? 'Clip'
			: BGM.includes(tag)
				? 'BGM'
				: VIDEO.includes(tag)
					? 'Video'
					: 'Unknown'
}

export { SKIN, CLIP, BGM, VIDEO }
