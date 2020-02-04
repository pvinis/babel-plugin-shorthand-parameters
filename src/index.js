const t = require('babel-types')


module.exports = function testPlugin(babel) {
	return {
		visitor: {
			MemberExpression(path) {
				if (path.node.object.name === '$') {
					path.node.object.name = 'r'
					const fn = t.arrowFunctionExpression(
						[t.identifier('x')],
						t.memberExpression(
							t.identifier('x'),
							path.node.property,
						),
					)
					path.replaceWith(fn)
		  		}
			}
		}
	}
}
