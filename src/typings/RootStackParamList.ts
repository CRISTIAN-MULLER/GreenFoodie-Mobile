import { CardProps } from '@typings/PaymentMethod'
import { Dispatch, SetStateAction } from 'react'
import { UserAddressProps } from './Address'

type RootStackParamList = {
	Address: {
		address: UserAddressProps
		action: string
		refresh?: boolean
		setRefresh?: Dispatch<SetStateAction<boolean>>
	}
	Maps: undefined
	AddressSelection: undefined
	Cart: undefined
	CreditCard: {
		paymentMethod: CardProps
		action: string
		refresh?: boolean
		setRefresh?: Dispatch<SetStateAction<boolean>>
	}
	Delivery: undefined
	Login: undefined
	Menu: undefined
	SideMenu: undefined
	Order: undefined
	PaymentSelection: undefined
	TrackOrder: undefined
	User: undefined
	Welcome: undefined
}

export default RootStackParamList
