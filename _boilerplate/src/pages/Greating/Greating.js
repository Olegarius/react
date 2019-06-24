import React from 'react';

import { getLogin } from 'utils/Auth';
import { Greating } from 'components';

const GreatingPage = () => <Greating name={ getLogin() } />;

export default GreatingPage;
