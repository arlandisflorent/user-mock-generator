
const UserService = require('./services/userService');


(main = async () => {

  const userList = UserService.generateUserList(3);

  console.log(userList)

})();
