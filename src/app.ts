
import {UserService} from './services/userService';

console.log('run1');
(()=>{
  console.log('run');
  const userList = UserService.generateUserList(3);
  console.log(userList);
})()