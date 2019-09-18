let buttonCheckMagicWord = document.getElementById('check-magic-word');

buttonCheckMagicWord.onclick = function() {
    let magicWord = 'Спасибо',
        inputMagicWord = document.getElementById('magic-word').value;

    if (magicWord.toLowerCase() == inputMagicWord.toLowerCase()) {
        alert('Вы правильно назвали "волшебное слово"!!!');
    } else {
        alert('Вы ошиблись, "волшебное слово" набрано не верно!!!');
    }

}