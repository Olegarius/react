export const login = (name) => {
	localStorage.setItem('logined', name);
};

export const getLogin = () => localStorage.getItem('logined');

export const logout = () => {
	localStorage.removeItem('logined');
};
