import {
	type ClubsFunctionGetPagePaths,
	ClubsPluginCategory,
	ClubsPluginMeta,
	ClubsFunctionPlugin,
} from '@devprotocol/clubs-core'
import Default from './Default.astro'

export const getPagePaths = (async () => [
	{ paths: ['example'], component: Default },
]) satisfies ClubsFunctionGetPagePaths

export const meta = {
	id: 'example',
	displayName: 'Example',
	category: ClubsPluginCategory.Uncategorized,
} satisfies ClubsPluginMeta

export default {
	getPagePaths,
	meta,
} satisfies ClubsFunctionPlugin
