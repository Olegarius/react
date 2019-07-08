const fetchMiddleware = store => next => (action) => {
	if (!action) {
		return next();
	}

	const { type, payload } = action;
	const matches = /(.*)_(REQUEST|FAILURE|SUCCESS)/.exec(type);

	// if not a *_REQUEST, *_FAILURE or *_SUCCESS actions we ignore them
	if (!matches) {
		return next(action);
	}

	const [ , , requestState ] = matches;

	if (
		[ 'FAILURE' ].indexOf(requestState) !== -1 && payload
	) {
		store.dispatch({ type: 'SHOW_ERROR', message: payload.message });

		return next({ type, payload });
	}

	return next(action);
};

export default fetchMiddleware;
