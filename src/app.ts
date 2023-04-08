
import {UserService} from './services/userService';

(()=>{
	const userList = UserService.generateUserList(3);
	// eslint-disable-next-line
  console.log(userList);
})();