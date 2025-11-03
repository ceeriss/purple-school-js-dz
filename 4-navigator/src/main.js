function crypto(password){
	const reversedPassword = password.split('').reverse().join('')
	return reversedPassword;
}
function check(reversedPassword, password) {
	if (reversedPassword.split('').reverse().join('') === password) {
		return true;
	} else {
		return false;
	}
}
const reversedPassword = crypto('password');
const result = check(reversedPassword, 'password');
console.log(result);
