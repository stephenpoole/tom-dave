import Component from '../base/Component'

export default class Body extends Component {
	constructor(parent) {
		super('.body', parent)
	}

	stateDidUpdate(param, value) {
		switch (param) {
		case 'entered':
			if (value) {
				this.$.addClass('entered')
			}
			break
		case 'reading':
			this.$[0].scrollTop = 0
			break
		default:
			break
		}
	}
}
