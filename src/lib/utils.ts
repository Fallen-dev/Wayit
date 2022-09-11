import moment from 'moment'

export function momentUpdateLocale() {
	moment.updateLocale(navigator.language.split('-')[0], {
		relativeTime: {
			future: 'in %s',
			past: '%s ago',
			s: 'just now',
			ss: '%d s',
			m: 'a m',
			mm: '%d m',
			h: 'an hour',
			hh: '%d h',
			d: 'a day',
			dd: '%d d',
			w: 'a week',
			ww: '%d w',
			M: 'a month',
			MM: '%d months',
			y: 'a year',
			yy: '%d y'
		}
	})
}

class utils {
	private notation: any
	private number!: number
	private unixts!: number

	// Number Format
	format(notation = 'compact') {
		this.notation = notation

		return Intl.NumberFormat(navigator.language.split('-')[0], {
			notation: this.notation
		}).format(this.number)
	}
	numberFormat(number: number | string) {
		if (typeof number === 'string') number = +number

		this.number = number
		return this
	}
	// Unix readable
	unix(unixTimeStamp: string | number) {
		if (typeof unixTimeStamp === 'string') unixTimeStamp = +unixTimeStamp

		this.unixts = unixTimeStamp
		return this
	}
	now() {
		return moment.unix(this.unixts).fromNow()
	}
	unixFormat(format = 'MMMM DD, YYYY') {
		return moment.unix(this.unixts).format(format)
	}
}

export default new utils()
