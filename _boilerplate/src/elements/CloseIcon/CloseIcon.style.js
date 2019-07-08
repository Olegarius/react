import styled from 'styled-components';

import SvgIcon from 'elements/SvgIcon';

export default styled(SvgIcon).attrs({
	name: 'close',
	size: 'xxs',
	fill: '#000000'
})`
	cursor: pointer;
	appearance: none;
`;
