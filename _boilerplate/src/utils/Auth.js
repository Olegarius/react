export const login = () => {
	localStorage.setItem('logined', true);
};

export const getLoginStatus = () => !!localStorage.getItem('logined');

export const logout = () => {
	localStorage.removeItem('logined');
};
