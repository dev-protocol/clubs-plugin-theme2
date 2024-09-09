import { describe, it, expect } from 'vitest'
import plugin, { getPagePaths, getLayout, meta } from './index'

describe('plugin default export', () => {
	it('should have getPagePaths, getLayout and meta', async () => {
		expect(plugin).toEqual({
			getPagePaths,
			getLayout,
			meta,
		})
	})
})
