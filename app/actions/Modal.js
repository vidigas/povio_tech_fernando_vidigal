	const openLoginModal = () => {
		return {
			type: 'OPEN_LOGIN_MODAL',
		};
	};


	const openSignupModal = () => {
		return {
			type: 'OPEN_SIGNUP_MODAL'
		};
	};

	const openUpdateModal = () => {
		return {
			type: 'OPEN_UPDATE_MODAL'
		};
	};


		const closeLoginModal = () => {
		return {
			type: 'CLOSE_LOGIN_MODAL'
		};
	};



	 const closeSignupModal = () => {
		return {
			type: 'CLOSE_SIGNUP_MODAL'
		};
	};

	const closeUpdateModal = () => {
		return {
			type: 'CLOSE_UPDATE_MODAL'
		};
	};

	
	export const openModal = (selected) => {
		
		switch(selected){
			case'login': return openLoginModal();
			case 'signup': return openSignupModal();
			case 'update': return openUpdateModal();
			default: return console.log('open modal')
		}
	}


	export const closeModal = (selected) => {

		switch(selected){
			case 'login': return closeLoginModal();
			case 'signup': return closeSignupModal();
			case 'update': return closeUpdateModal();

			default: console.log('sljflj');
		}
	}

