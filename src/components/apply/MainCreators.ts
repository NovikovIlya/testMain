import { Dispatch } from '@reduxjs/toolkit'
import request from 'axios'
import { Cookies } from 'react-cookie'

import {

	getAdmissionLink,
	
} from './index'


const cookies = new Cookies()





export const getAdmission = async (dispatch: Dispatch): Promise<{link: string}| 404| 403> => {
	try {
		// if ((await refreshToken(dispatch)) === 403) return 403
		const response = await getAdmissionLink()
		console.log('response',response)
		// debugger
		cookies.remove('s_id', { domain: 'kpfu.ru', path: '/' })
		cookies.remove('s_abit_id', { domain: 'kpfu.ru', path: '/' })
		cookies.set('s_id', response.session, { domain: 'kpfu.ru', path: '/' })
		cookies.set('s_abit_id', response.session, {
			domain: 'kpfu.ru',
			path: '/'
		})
		return response
	} catch (e) {
		return 404
	}
}
