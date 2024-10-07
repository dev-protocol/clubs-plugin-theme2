/* eslint-disable functional/type-declaration-immutability */
import type { ClubsOffering, Membership } from '@devprotocol/clubs-core'
import type { PassportItemDocument } from '@devprotocol/clubs-plugin-passport'

export type HomeConfig = {
	hero: {
		image: string
		text: string
	}
	body: string
	description: string
}

export type GlobalConfig = {
	bg?: string
	backgroundGradient?: [string, string]
	ink?: string
}

export type Override = Readonly<{
	id: string
	importFrom: string
	key: string
	payload: string | Uint8Array
	price: {
		yen: number
	}
}>
export type ComposedItem = Override & { source: Membership }

export type PassportItemData = ClubsOffering<Membership> & {
	passportItem: PassportItemDocument
}
