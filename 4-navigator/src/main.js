function convertor(balance, valut, valutForConvertation){
	if (valut === 'ру' && valutForConvertation === 'usd') {
		return (balance = balance / 87);
	}
	else if (valut === 'ру' && valutForConvertation === 'eur') {
		return (balance = balance / 94.5);
	}
	else {
		return null
	}
}
const balance = Number(prompt('Введите баланс в рублях'));
const valut = prompt('Выберите валюту');
const valutForConvertation = prompt('Выберите валюту для конвертации');
alert(convertor(balance, valut, valutForConvertation));
