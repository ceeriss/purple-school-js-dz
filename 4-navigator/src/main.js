let language = prompt("Введите свой язык: ")

switch (language) {
	case "en": alert("Hello")
	break;
	case "ru": alert("Привет")
	break;
	case "de": alert("Gutten Tag")
	break;
	default: alert("Unknown language")
	break;
}