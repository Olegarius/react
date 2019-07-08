import React from 'react';
import Loadable from 'react-loadable';

export const asyncLoader = (importFunction, LoadingComponent = () => null, extProps = null) =>
	Loadable({
		loader: () => importFunction(),
		loading: LoadingComponent,
		render(loaded, props) {
			const Component = loaded.default;

			return <Component { ...props } { ...extProps } />;
		}
	});
