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

	export const openModal = (selected) => {
		switch(selected){
			case'login': return openLoginModal();
			case 'signup': return openSignupModal();
			default: return console.log('xola mais')
		}
	}

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


	export const closeModal = (selected) => {

		switch(selected){
			case 'login': return closeLoginModal();
			case 'signup': return closeSignupModal();

			default: console.log('sljflj');
		}
	}