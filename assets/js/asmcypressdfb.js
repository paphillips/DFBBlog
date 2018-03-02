Prism.languages.asmcypressdfb = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true,
			inside: {
				'commentbold': /\[(.*?)\]/
			}
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			inside: {
				'commentbold': /\[(.*?)\]/
			}
		}
	],
	'opcode': /\b(?:area|org|dw|acu|addr|dmux|alu|mac|shift|write|jmp|jmpl|jmpsl|jmpslr|jmps|jmpsr)\b/,
	'codelabel': /\w.*\:/,
};