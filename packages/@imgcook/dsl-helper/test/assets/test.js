'use strict';

import styles from'./lib/style.js';

class Mod extends Component {
	/**
 	* 模块数据禁用自动请求
 	* @type {boolean}
 	*/
	static disableModuleDataAutoFetch = false;

	render() {
		let {
			navList,
			title,
			benifit
		} = this.props.attrs

		let info = {
			logkey: '/exp.1.1',     // 固定，沿用之前的
		};

		return (
			<ExpView
				append="tree"
			>
				<Text>12345</Text>
			</ExpView>
		);
	}
}