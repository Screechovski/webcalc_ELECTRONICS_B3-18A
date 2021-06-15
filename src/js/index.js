import './../sass/index.sass';

class Сalc{ // класс для хронения всех реактивных данных, глбальный класс, на основе которого позже будет создан обьект в переменной myCalc, нужен для того чтоб при помощи get(геттер) и set(setter) при изменении какого-то поля выполнять и сторониие функции (к примеру если поле _power изменилось, нужно вызвать togglePower и добавить css класс элементу, чтоб визуально отобразить включения калькулятора)
    constructor(f,power,mn,sv,onum,on,op,r,swv){
        _F: f; // флаг активной кнопки F
        _power: power; // флаг 'включения' калькулятора
        _memoryNumber: mn; // регистер памяти
        _screenValue: sv; // рабочий регистр / регистр экрана
        _operationNumber: onum; // переменная для операции
        _operationName: on; // названия операции
        _operationPrev: op;
        _radians: r; // флаг радиан
        _screenWorkValue: swv // отдельно поле для вывода на экран рабочего регистра
    }
    dotActive = false; // поставили символ точки
    operationLogs = null; // записывает последнюю операцию
    lastCalculatedNum = null; // последнее число написанное пользователем
    calculated = false;

    clearAll(){ // метод очистки всего калькулятора
        toggleScreenError(false); // убираем переполнение
        toggleScreenMinus(false); // убираем знак минуса
        this.screenValue = '0'; // присваиваем полю screenValue '0'
        this._operationNumber = null; // переменная числа для операции
        this._operationName = null; // переменная для названия операции
        this._screenWorkValue = 0;
        this.calculated = false;
    }
    get screenWorkValue(){
        return this._screenWorkValue;
    }
    set screenWorkValue(value){
        document.getElementById('workReg').innerText = value;
        this._screenWorkValue = value;
    }
    get operationName (){ // при вызове "myCalc.operationName" вернет значение поля this._operationName в котором записано название последней операции
        return this._operationName;
    }
    set operationName (value) { // записывает текущее название операции
        if (value == 'swap') {
            this.screenValue = this.screenWorkValue;
            this._operationName = null;
            setFirstNum('');
        } else if (value != 'equally') { // если до этого операция была "=", тогда нужно поменять числа и подсчитать ещё раз
            if (this._operationNumber != null && this._operationName != null && this.operationLogs != 'equally') { // проверка на существование предыдущих значений
                this.lastCalculatedNum = this.operationNumber; // добавляем текущаю операцию в лог
                setSecondNum(this.screenValue);
                this.calculated = false;
                let result = primitiveOperations(this._operationNumber, this.screenValue, this._operationName);
                this.operationNumber = result; // добавляем в регистр операции значение посчитаное primitiveOperations
                this.screenWorkValue = result;
            } else {
                this.operationNumber = this.screenValue;
            }
            this._operationPrev = this._operationName;
            this._operationName = value;
            this._screenValue = 0;
        } else {
            setSecondNum(this.screenValue);
            if (this.operationLogs != 'equally') { // первое нажатие на =
                let swapper = this._operationNumber;
                this._operationNumber = this.screenValue;
                this.lastCalculatedNum = this.screenValue;
                this.calculated = true;
                let result = primitiveOperations(swapper, this.screenValue, this._operationName);
                this.screenValue = result;
                this.screenWorkValue = result;
            } else {  // последующие нажатие на =
                this.lastCalculatedNum = this.screenValue;
                this.calculated = true;
                let result = primitiveOperations(this.screenValue, this._operationNumber, this._operationName)
                this.screenValue = result;
                this.screenWorkValue = result;
            }
        }

        this.operationLogs = value;
    }
    get operationNumber(){
        return this._operationNumber;
    }
    set operationNumber (value) {        
        setFirstNum(value);
        this._operationNumber = value;
    }
    get memoryNumber(){
        return this._memoryNumber;
    }
    set memoryNumber(value){
        document.getElementById('memory').innerText = Number(value);
        this._memoryNumber = Number(value);
    }
    get screenValue(){
        return this._screenValue;
    }
    set screenValue(value){
        if (value != undefined) {
            const numValue = parseFloat(value);
            const stringValue = value.toString();

            if (stringValue.toLowerCase() === 'infinity' || stringValue.toLowerCase() === '-infinity') {
                this._screenValue = 0;
                setScreenValue(0);
                toggleScreenError(true);
            } else  {
                if (isNaN(numValue)) {
                    this._screenValue = 0;
                    setScreenValue(0);
                    toggleScreenError(false);
                } else {
                    this._screenValue = value;
                    setScreenValue(value);
                }
            }
        }
    }
    get radians(){
        return this._radians;
    }
    set radians(value){
        toggleRadian(value);
        this._radians = value;
    }
    get power(){
        return this._power;
    }
    set power(value){
        togglePower(value);

        if (value) {
            this.clearAll()
        }
        this._power = value;
    }
    get F(){
        return this._F;
    }
    set F(value){
        this._F = value;

        toggleF(value);
        changeCalcButtonsVal(value);
    }
}

const myCalc = new Сalc(false, false, 0, 0, null, null, null, true, null);

window.calc = myCalc;

/**
 * Отрезает лишнее от числа, если длина числа больше 8 (без точки), 9 (с точкой)
 * @param {Any} paramNum
 * @returns {Number}
 */
const shorterNum = paramNum => {// отрезает лишнее от числа, если длина числа больше нужно
    console.log(typeof paramNum)
    paramNum = Number(Number(paramNum).toFixed(8));
    let stringParamNum = paramNum.toString();

    if (stringParamNum.indexOf('.') != -1) {// проверка точки в числе
        toggleScreenError(stringParamNum.length > 9);// если строка больше 8 символов, вызвать toggleScreenError(true), если все в порядке toggleScreenError(false)
        if (stringParamNum.length > 9) {
            return Number(stringParamNum.substring(0, 9)); // если строка больше 8 символов, отрезаем лишнее и возврощаем число
        }
    } else {
        toggleScreenError(stringParamNum.length > 8);
        if (stringParamNum.length > 8) {
            return Number(stringParamNum.substring(0, 8));
        }
    }
    return paramNum;
}

/**
 * Функция которая добавляет выводит второе число в HTML
 * @param {Any} numVal
 */
const setFirstNum = (numVal) => {
    document.getElementById('firstNum').innerText = numVal;
}

/**
 * Функция которая добавляет выводит второе число в HTML
 * @param {Any} numVal
 */
const setSecondNum = (numVal) => {
    document.getElementById('secondNum').innerText = numVal;
}

/**
 * Функция для подсчета просты операций
 * @param {Any} x Первый оператор
 * @param {Any} y Второй оператор
 * @param {String} operationName название операции
 * @returns {Number}
 */
const primitiveOperations = (x,y,operationName) => {// функция для подсчета просты операций
    let result;
    switch (operationName) {
        case 'multiply':
            result = shorterNum(Number(x) * Number(y));
            addHistoryItem(`${x} × ${y} = ${result}`);
            break;
        case 'divide':
            result = shorterNum(Number(x) / Number(y));
            addHistoryItem(`${x} / ${y} = ${result}`);
            break;
        case 'plus':
            result = shorterNum(Number(x) + Number(y));
            addHistoryItem(`${x} + ${y} = ${result}`);
            break;
        case 'minus':
            result = shorterNum(Number(x) - Number(y));
            addHistoryItem(`${x} - ${y} = ${result}`);
            break;
        case 'xpowy':
            result = shorterNum(Math.pow(Number(x), Number(y)));
            addHistoryItem(`${x}<sup>${y}</sup> = ${result}`);
            break;
        default:
            result = myCalc.screenValue;
            console.warn('Uncorrected primitive operation type', operationName);
            break;
    }

    return result;
}

/**
 * Включение/выключение минуса на экране (true - вкл)
 * @param {Boolean} flag
 */
const toggleScreenMinus = (flag) => { // функция включения\выключения минуса true - вкл
    const $screenMinus = document.getElementById('screenMinus');
    if (flag) {
        $screenMinus.style.opacity = 1; // делаем прозрачный минус
    } else {
        $screenMinus.style.opacity = 0;
    }
}

/**
 * Включение/выключение символа переполнения (true - вкл)
 * @param {Boolean} flag
 */
const toggleScreenError = (flag) => { // функция включения\выключения переполнения true - вкл
    const $screenMinus = document.getElementById('screenOverflow');
    if (flag) {
        $screenMinus.style.opacity = 1; // делаем символ переполнения
    } else {
        $screenMinus.style.opacity = 0;
    }
}

/**
 * Менят текст на кнопках на текст при нажатом А (true - F)
 * @param {Boolean} flag
 */
const changeCalcButtonsVal = (flag) => {
    const $calcButtons = document.querySelectorAll('.calc-button');

    $calcButtons.forEach(button => {
        const $calcButtonInner = button.querySelector('.calc-button__button');
        const $calcButtonLabel = button.querySelector('.calc-button__label');

        if ($calcButtonLabel.innerHTML == '') {
            $calcButtonLabel.innerHTML = button.getAttribute('data-value-f');
        }

        if (button.getAttribute('data-operation').toLowerCase().trim() != 'onf') {
            if (flag) {
                $calcButtonInner.style.fontSize = '9px';
                $calcButtonInner.style.fontWeight = 'bold';
                $calcButtonInner.innerHTML = button.getAttribute('data-value-f');
                $calcButtonLabel.style.opacity = 0;
            } else {
                $calcButtonInner.style.fontSize = '13px';
                $calcButtonInner.style.fontWeight = 'normal';
                $calcButtonInner.innerHTML = button.getAttribute('data-value');
                $calcButtonLabel.style.opacity = 1;
            }
        }
    })
}

/**
 * Добавления эффекта зажатой кнопки F (true - нажата)
 * @param {Boolean} flag
 */
const toggleF = flag => {
    const $fButton = document.getElementById('calcButtonF');

    if (flag) {
        $fButton.classList.add('calc-button--active');
    } else {
        $fButton.classList.remove('calc-button--active');
    }
}

/**
 * Установление значения в экран калькулятора
 * @param {Any} value
 * @returns
 */
const setScreenValue = value => {// функция которая устанавливает значение экрану
    const $screen = document.getElementById('calc-screen');
    const numberValue = Number(value);
    let stringValue = value.toString();

    if ($screen.value == "0" && stringValue == "0") {
        return;
    }

    if (numberValue < 0) {
        stringValue = Math.abs(numberValue).toString();
    }

    toggleScreenMinus(numberValue < 0);

    if (stringValue.indexOf('.') == stringValue.length - 1) {
        stringValue = Math.abs(numberValue) + '.';
    }

    if (stringValue.indexOf('.') != -1) {
        if (stringValue.length > 9) { // обрезаем лишние значения в экране
            stringValue = stringValue.substring(0, 9);
        }
    } else {
        if (stringValue.length > 8) { // обрезаем лишние значения в экране
            stringValue = stringValue.substring(0, 8);
        }
    }

    if (stringValue == '' && myCalc.power) { // заменяем пустую строку на экране на '0'
        stringValue = '0';
    }

    $screen.value = stringValue;
}

/**
 * Эффект включения/выключения калькулятора (true - вкл)
 * @param {*} flag
 */
const togglePower = flag => { // функция включения/выключения экрана true - on, false - off
    const $screen = document.querySelector('.calc__screen'); // находим в html элемент с классов calc__screen и записываем этот элемент в переменную $screen
    const $powerSlider = document.querySelector('#flag-power .slider'); // находим в html элемент с классов 'slider' и id 'flag-power' и записываем этот элемент в переменную $powerSlider

    if (flag) { // если функцию вызвали с true т.е. togglePower(true), тогда в параметре flag будет значение true, и в этом if это проверяется
        $powerSlider.classList.add('slider--active'); // html элементу добавляем css класс, а уже в css описано что будет менятся
        $screen.classList.add('calc__screen--power'); // html элементу добавляем css класс, а уже в css описано что будет менятся
        myCalc.screenValue = '0'; // записываем на экран стартовой значение, чтоб показать что калькулятор включили
    } else {
        $powerSlider.classList.remove('slider--active'); // удаляем у html элемента css класс, а уже в css описано что будет менятся
        $screen.classList.remove('calc__screen--power'); // удаляем у html элемента css класс, а уже в css описано что будет менятся
        document.getElementById('calc-screen').value = ''; // в html в элемент с css классов calc-screen записываем пустую строку (только визуально, переменные никакие не меням), чтоб показать что калькулятор выключен
    }
}

/**
 * Эффект смена рад и град (true - радианы)
 * @param {*} flag
 */
const toggleRadian = flag => { // функция включения/выключения экрана true - on, false - off
    const $radianSlider = document.querySelector('#radian .slider'); // находим в html элемент с классов 'slider' и id 'radian' и записываем этот элемент в переменную $radianSlider
    if (flag) {
        $radianSlider.classList.remove('slider--active'); // удаляем у html элемента css класс, а уже в css описано что будет менятся
    } else {
        $radianSlider.classList.add('slider--active'); // html элементу добавляем css класс, а уже в css описано что будет менятся
    }
}

/**
 * Вспомогательная функция для конвертации градусов в радианы
 * @param {Number} degress
 * @returns
 */
const convertToRadians = (degress) => { //обычная функция которая по формуле конвертирует градусы в радианы, на входе градусы, на выходе радианы
    return (degress * Math.PI) / 180;
}

/**
 * Добавляет элемент в список истории операций
 * @param {String} line
 */
const addHistoryItem = (line) => {
    line = line.replace('Infinity', 'Переполнено'); // если в строке есть слово Infinity, заменить его на Переполнено
    line = line.replace('-Infinity', 'Переполнено');// если в строке есть слово -Infinity, заменить его на Переполнено

    const $list = document.querySelector('.c-history__list'); // ищем html элемент с классов c-history__list в который далее будем добавлять элементы, в параграфе (p) которых будет история действий

    const maket = `<li class="c-history__item">
        <p>${line}</p>
    </li>`; // создание элментов с параграфом (p)

    $list.insertAdjacentHTML('beforeend', maket); // добавление элемента в $list
    $list.scrollTop = $list.scrollHeight; // прокрутка страницы в самый низ
}

/**
 * Функция вызывающаяся по нажатию на любую из кнопок калькулятора
 * @param {Event} e
 */
const calcButtonClick = e => {
    const button = e.target.closest('.calc-button'); // Находим кнопку на которую нажали, если есть дочерние элементы то при нажатии на них e.target будет другой

    if (button != null && myCalc.power) { // проверка нажали ли на кнопку и включен ли калькулятор
        const operation = button.getAttribute('data-operation').toLowerCase().trim(); // берём значение кнопки из html
        const operationF = button.getAttribute('data-operation-f').toLowerCase().trim(); // берём значение кнопки при нажатом F из html
        let oldVal, result;

        if (!myCalc.F) {
            // если кнопка F не нажата
            switch (operation) {
                case 'number':
                    let wr = myCalc.screenValue.toString();
                    let btnValue = button.getAttribute('data-value');
                    
                    if (myCalc.calculated) {
                        myCalc.screenValue = btnValue;
                        myCalc.calculated = false;
                    } else {
                        if (myCalc.dotActive) {
                            myCalc.screenValue = wr + "." + btnValue;
                            myCalc.dotActive = false;
                        } else {
                            if (myCalc.screenValue == "0") {
                                myCalc.screenValue = btnValue;
                            } else {
                                if ((wr.indexOf('.') == -1 && wr.length < 8) || (wr.indexOf('.') != -1 && wr.length < 9)) {                                    
                                    myCalc.screenValue = wr + btnValue;                                    
                                }
                            }
                        }
                    }
                    
                    break;
                case 'clear':
                    myCalc.clearAll();
                    break;
                case 'onf':
                    myCalc.F = true;
                    break;
                case 'numminus':
                    myCalc.screenValue = (parseFloat(myCalc.screenValue) * -1).toString();
                    break;
                case 'multiply':
                    myCalc.operationName = 'multiply';
                    break;
                case 'result':
                    myCalc.operationName = 'equally';
                    break;
                case 'divide':
                    myCalc.operationName = 'divide';
                    break;
                case 'plus':
                    myCalc.operationName = 'plus';
                    break;
                case 'minus':
                    myCalc.operationName = 'minus';
                    break;
                case 'dot':
                    if (Number.isInteger(Number(myCalc.screenValue))){
                        setScreenValue(Number(myCalc.screenValue).toString() + '.')
                        myCalc.dotActive = true;
                    }
                    break;
                case 'swap':
                    if (myCalc.screenWorkValue != null) {
                        myCalc.operationName = 'swap';
                    }
                    break;
                default:
                    break;
            }
        } else {
            // если кнопка F нажата
            console.log(operationF)

            switch (operationF) {
                case 'offf':
                    myCalc.F = false;
                    break;
                case 'ln':
                    oldVal = myCalc.screenValue;
                    setFirstNum(oldVal);
                    result = shorterNum(Math.log(oldVal))
                    myCalc.screenValue = result;

                    addHistoryItem(`ln(${oldVal}) = ${myCalc.screenValue}`);

                    console.log(oldVal, `ln(${oldVal})`, result);
                    break;
                case 'lg':
                    oldVal = myCalc.screenValue;
                    setFirstNum(oldVal);
                    result = shorterNum(Math.log10(oldVal));
                    myCalc.screenValue = result;

                    addHistoryItem(`lg(${oldVal}) = ${myCalc.screenValue}`);

                    console.log(oldVal, `lg(${oldVal})`, result);
                    break;
                case 'sqrt':
                    oldVal = myCalc.screenValue;
                    setFirstNum(oldVal);
                    result = shorterNum(Math.sqrt(oldVal));
                    myCalc.screenValue = result;

                    addHistoryItem(`√${oldVal} = ${myCalc.screenValue}`);

                    console.log(oldVal, `sqrt(${oldVal})`, result);
                    break;
                case 'epowx':
                    oldVal = myCalc.screenValue;
                    setFirstNum(oldVal);
                    result = shorterNum(Math.pow(Math.E, oldVal));
                    myCalc.screenValue = result;

                    addHistoryItem(`e<sup>${oldVal}</sup> = ${myCalc.screenValue}`);

                    console.log(oldVal, `e${oldVal}`, result);
                    break;
                case 'tenpowx':
                    oldVal = myCalc.screenValue;
                    setFirstNum(oldVal);
                    result = shorterNum(Math.pow(10, oldVal));
                    myCalc.screenValue = result;

                    addHistoryItem(`10<sup>${oldVal}</sup> = ${myCalc.screenValue}`);

                    console.log(oldVal, `10^${oldVal}`, result);
                    break;
                case 'arc':
                    myCalc.operationLogs = 'arc';

                    console.log(`arc`);
                    break;
                case 'sin':
                    oldVal = myCalc.screenValue;
                    setFirstNum(oldVal);

                    // debugger

                    if (myCalc.operationLogs == 'arc') {
                        result = shorterNum(Math.asin(myCalc.radians || myCalc.radians == undefined ? oldVal : convertToRadians(oldVal)));
                        myCalc.screenValue = result;
                        myCalc.calculated = true;

                        addHistoryItem(`arcsin(${oldVal}) = ${myCalc.screenValue}`);
                        console.log(oldVal, `arcsin(${oldVal})`, result);

                        myCalc.operationLogs = 'arcsin';
                    } else {
                        result = shorterNum(Math.sin(myCalc.radians || myCalc.radians == undefined ? oldVal : convertToRadians(oldVal)));
                        myCalc.screenValue = result;
                        myCalc.calculated = true;

                        addHistoryItem(`sin(${oldVal}) = ${myCalc.screenValue}`);
                        console.log(oldVal, `sin(${oldVal})`, result);
                    }
                    break;
                case 'cos':
                    oldVal = myCalc.screenValue;
                    setFirstNum(oldVal);
                    if (myCalc.operationLogs == 'arc') {                        
                        result = shorterNum(Math.acos(myCalc.radians || myCalc.radians == undefined ? oldVal : convertToRadians(oldVal)));
                        myCalc.screenValue = result;
                        myCalc.calculated = true;

                        addHistoryItem(`arccos(${oldVal}) = ${myCalc.screenValue}`);
                        console.log(oldVal, `arccos(${oldVal})`, result);

                        myCalc.operationLogs = 'arccos';
                    } else {
                        result = shorterNum(Math.cos(myCalc.radians || myCalc.radians == undefined ? oldVal : convertToRadians(oldVal)));
                        myCalc.screenValue = result;
                        myCalc.calculated = true;

                        addHistoryItem(`cos(${oldVal}) = ${myCalc.screenValue}`);
                        console.log(oldVal, `cos(${oldVal})`, result);
                    }
                    break;
                case 'tg':
                    oldVal = myCalc.screenValue;
                    setFirstNum(oldVal);

                    if (myCalc.operationLogs == 'arc') {
                        result = shorterNum(Math.atan(myCalc.radians || myCalc.radians == undefined ? oldVal : convertToRadians(oldVal)))
                        myCalc.screenValue = result;
                        myCalc.calculated = true;

                        addHistoryItem(`artg(${oldVal}) = ${myCalc.screenValue}`);
                        console.log(oldVal, `artg(${oldVal})`, result);

                        myCalc.operationLogs = 'artg';
                    } else {
                        result = shorterNum(Math.tan(myCalc.radians || myCalc.radians == undefined ? oldVal : convertToRadians(oldVal)));
                        myCalc.screenValue = result;
                        myCalc.calculated = true;

                        addHistoryItem(`tg(${oldVal}) = ${myCalc.screenValue}`);
                        console.log(oldVal, `tg(${oldVal})`, result);
                    }
                    break;
                case 'pi':
                    oldVal = myCalc.screenValue;
                    result = shorterNum(Math.PI);
                    myCalc.screenValue = result;

                    addHistoryItem(`pi = ${myCalc.screenValue}`);

                    console.log(oldVal, 'pi', result);
                    break;
                case 'show':
                    oldVal = myCalc.screenValue;
                    result = myCalc.memoryNumber;
                    myCalc.screenValue = result;

                    addHistoryItem(`${myCalc.screenValue} ИП`);

                    console.log(oldVal, 'show', result);
                    break;
                case 'save':
                    oldVal = myCalc.screenValue;
                    myCalc.memoryNumber = Number(oldVal);

                    addHistoryItem(`${myCalc.screenValue} ЗАП`);

                    console.log(oldVal, 'save');
                    break;
                case 'clearf':
                    if (document.querySelector("#screenOverflow").style.opacity == "1"){
                        toggleScreenError(false);
                    } else {
                        oldVal = myCalc.screenValue;
                        result = oldVal;
                        let oldValString = oldVal.toString();
                        if (oldValString != '0') {
                            if (oldValString.indexOf('.')  != -1) {
                                if (oldValString.length > 9) {
                                    result = oldValString.substring(0, 9);
                                } else {
                                    result = oldValString.substring(0, oldValString.length - 1);
                                }
                            } else {
                                if (oldValString.length > 8) {
                                    result = oldVal.toString().substring(0, 8);
                                } else {
                                    result = oldValString.substring(0, oldValString.length - 1);
                                }
                            }
                        }
                        myCalc.screenValue = result;
                        console.log(oldVal, 'clearf', result);
                    }
                    break;
                case '1dividex':
                    oldVal = Number(myCalc.screenValue);
                    setFirstNum(oldVal);

                    result = shorterNum( 1 / oldVal);
                    myCalc.screenValue = result;

                    addHistoryItem(`1/ ${oldVal} = ${myCalc.screenValue}`);

                    console.log(oldVal, `1/${oldVal}`, result);
                    break;
                case 'xpowy':
                    myCalc.operationName = 'xpowy';
                    break;
                case 'memplus':
                    if (myCalc.memoryNumber == undefined)  {
                        myCalc.memoryNumber = 0;
                    }
                    oldVal = Number(myCalc.screenValue);

                    result = Number(myCalc.memoryNumber);
                    myCalc.memoryNumber = shorterNum(result + oldVal);

                    addHistoryItem(`${oldVal} + ${result} = ${myCalc.memoryNumber}`);
                    addHistoryItem(`${myCalc.memoryNumber} ЗАП`);

                    console.log(oldVal, `1/${oldVal}`, result);
                    break;
                case 'memminus':
                    if (myCalc.memoryNumber == undefined)  {
                        myCalc.memoryNumber = 0;
                    }
                    oldVal = Number(myCalc.screenValue);

                    result = Number(myCalc.memoryNumber);
                    myCalc.memoryNumber = shorterNum(result - oldVal);

                    addHistoryItem(`${result} - ${oldVal} = ${myCalc.memoryNumber}`);
                    addHistoryItem(`${myCalc.memoryNumber} ЗАП`);

                    console.log(oldVal, `1/${oldVal}`, result);
                    break;
                case 'piplusxpow2':
                    oldVal = Number(myCalc.screenValue);

                    result = Number(myCalc.memoryNumber == undefined ? 0 : myCalc.memoryNumber);

                    myCalc.memoryNumber = shorterNum(result + Math.pow(oldVal, 2));

                    addHistoryItem(`${result} + ${oldVal}<sup>2</sup> = ${myCalc.memoryNumber}`);
                    addHistoryItem(`${myCalc.memoryNumber} ЗАП`);

                    console.log(oldVal, `piplusxpow2`, result);
                    break;
                case 'swapf':
                    const swapper = myCalc.memoryNumber;
                    oldVal = Number(myCalc.screenValue);
                    myCalc.memoryNumber = oldVal;

                    if (swapper == undefined) {
                        myCalc.screenValue = '0';
                    } else {
                        myCalc.screenValue = swapper;
                    }

                    addHistoryItem(`${myCalc.screenValue} <-> ${oldVal}`);

                    console.log(myCalc.screenValue, `swapF`, myCalc.memoryNumber);
                    break;
                default:
                    break;


            }

            myCalc.F = false;
        }
    }
}

window.addEventListener('DOMContentLoaded', () => { // подписка на событие глобального обьекта window загрузки всей страницы, т.е. все что в скобках запустится только когда весь html отобразится
    const $calcButtons = document.querySelectorAll('.calc-button'); // ищем html элемент с классов calc-button и записываем в переменную $calcButtons
    const $powerFlag = document.getElementById('flag-power'); // ищем html элемент с id 'flag-power' и записываем в переменную $powerFlag
    const $radianFlag = document.getElementById('radian'); // ищем html элемент с id 'radian' и записываем в переменную $radianFlag

    const $calcHistoryButton = document.getElementById('historyBtn'); // ищем html элемент с id 'historyBtn' и записываем в переменную $calcHistoryButton
    const $calcMemoryButton = document.getElementById('memoryBtn'); // ищем html элемент с id 'memoryBtn' и записываем в переменную $calcMemoryButton

    $powerFlag.addEventListener('click', e=>{ // добавления слушателя события клик на элемент powerFlag, т.е. событие которое произойдет при клике пользователем, и когда оно произойдет вызовется функция ниже
        myCalc.power = !myCalc.power; // берем текущее значение поля power и делаем обратное от него
    })

    $radianFlag.addEventListener('click', e=>{ // добавления слушателя события клик на элемент radianFlag
        if (myCalc.radians == undefined) {
            myCalc.radians = false;
        } else {
            myCalc.radians = !myCalc.radians;
        }
    })

    $calcButtons.forEach(button => { // цикл по всем кнопкам калькулятора
        button.addEventListener('click', calcButtonClick); // добавления слушателя события клик на кнопки калькулятора
    });

    $calcHistoryButton.addEventListener('click', e=>{
        document.querySelector('.calc__history.c-history.c-history--left').classList.toggle('calc__history--active');
        $calcHistoryButton.classList.toggle('c-history__arrow--active');
    });

    $calcMemoryButton.addEventListener('click', e=>{
        document.querySelector('.calc__history.c-history.c-history--right').classList.toggle('calc__history--active');
        $calcMemoryButton.classList.toggle('c-history__arrow--active');
    });

    changeCalcButtonsVal(false); // отрисовываем значения на всех кнопках

    window.calc = myCalc; // штука, которая позволяет в браузере в консоли написать window.calc нажать энтер и увидеть значения всех переменных в текущий момент, т.е. какое значение где записано
});