const babel = require('@babel/core')

const plugin = require('../src')


const inputs = [
`
const b = $.id
`,
`
[1,2].map($.id)
`,
`
const b = $0.id
`,
`
const b = $0.id + $1.ok
`,
`
const b = $1.ok
`,
]

it('works', () => {
	inputs.map(input => {
		const { code } = babel.transform(input, {plugins: [plugin]})
		expect(code).toMatchSnapshot()
	})
})
