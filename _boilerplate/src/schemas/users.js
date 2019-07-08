import { schema } from 'normalizr';

const user = new schema.Entity('user', {}, { idAttribute: 'userId' });
const continuationToken = new schema.Entity('continuationToken');
const userList = {
	users: [ user ],
	continuationToken
};

export default userList;
