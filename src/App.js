import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Styled/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';

const firebaseConfig = {
	apiKey: "AIzaSyBQfs7hN-JIEKld0MPV_QgcILIwJpbmRMc",
	authDomain: "mrdonalds-b8ef4.firebaseapp.com",
	databaseURL: "https://mrdonalds-b8ef4.firebaseio.com",
	projectId: "mrdonalds-b8ef4",
	storageBucket: "mrdonalds-b8ef4.appspot.com",
	messagingSenderId: "442233330321",
	appId: "1:442233330321:web:2fa43b79e27e942e69bd30"
};

firebase.initializeApp(firebaseConfig);

function App() {
	const auth = useAuth(firebase.auth);
	const openItem = useOpenItem();
	const orders = useOrders();
	useTitle(openItem.openItem);

	return (
		<>
			<GlobalStyle/>
			<NavBar {...auth}/>
			<Order
				{...orders}
				{...openItem}
				{...auth}
				firebaseDatabase={firebase.database}
			/>
			<Menu {...openItem}/>
			{openItem.openItem && <ModalItem {...openItem} {...orders}/>}
		</>
	);
}

export default App;
