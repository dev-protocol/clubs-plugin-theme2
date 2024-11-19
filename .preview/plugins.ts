import paymentsPlugin from '@devprotocol/clubs-plugin-payments'
import passportPlugin from '@devprotocol/clubs-plugin-passports'

import example from './example'
import thisPlugin from '../src/index'

export default [
	example,
	thisPlugin,
	passportPlugin,
	paymentsPlugin,
]
