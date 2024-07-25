
const converters = {
	'px': {
		'in': (val: number) => val / 96,
	},
	'in': {
		'px': (val: number) => val * 96,
	}
}


export function calculate(from:string, to:string, val:number | string) => {
	if (from === to) return val;
	if (from in converters && to in converters[from]) {
		return converters[from][to](val);
	}
	return undefined;
}
