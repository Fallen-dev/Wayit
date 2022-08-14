import moment from 'moment'

export function NumberFormat(str: string | number, notation: any = 'compact') {
	if (notation !== 'compact') notation = 'standard'
	if (typeof str === 'string') str = +str
	return Intl.NumberFormat('en', { notation: notation }).format(str)
}
export function momentUpdateLocale() {
	moment.updateLocale(navigator.language.split('-')[0], {
		relativeTime: {
			future: 'in %s',
			past: '%s ago',
			s: 'just now',
			ss: '%d s',
			m: 'a minute',
			mm: '%d m',
			h: 'an hour',
			hh: '%d h',
			d: 'a day',
			dd: '%d d',
			w: 'a week',
			ww: '%d w',
			M: 'a month',
			MM: '%d m',
			y: 'a year',
			yy: '%d y'
		}
	})
}
export function UNIXTSReadable(unixTimeStamp: number | string) {
	if (typeof unixTimeStamp === 'string') unixTimeStamp = +unixTimeStamp
	return moment.unix(unixTimeStamp).fromNow()
}
