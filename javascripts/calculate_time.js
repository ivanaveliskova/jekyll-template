var calculateTime = function() {
    var selectors = document.querySelectorAll('[data-words]'),
        timeToReadSelector = document.querySelectorAll('[data-length-to-read]'),
        code = document.getElementsByTagName('pre'),
        wordCount = 0,
        averageWPM = 200,
        secondsInAMin = 60,
        minutes, seconds, wordPlauralize, minutePlauralize, secondPlauralize, splitText;

        for (var i = 0; i < selectors.length; i++) {
            var text = selectors[i].textContent;

            splitText = text.split(/\s/);

            wordCount += splitText.length;
        }

    for (var y = 0; y < splitText.length; y++) {
        if (splitText[y] === '' || splitText[y] === /\n/) {
            wordCount--;
        }
    }

    for(var z = 0; z < code.length; z++) {
        var ignoreCodeTextLength = code[z].textContent.split(/\s/).length;
        wordCount -= ignoreCodeTextLength;
    }

    if (wordCount === 1) {
        wordPlauralize = 'word';
    } else {
        wordPlauralize = 'words';
    }

    minutes = Math.floor(wordCount / averageWPM);

    if (minutes === 1) {
        minutePlauralize = 'minute';
    } else {
        minutePlauralize = 'minutes';
    }

    seconds = Math.floor(((wordCount % averageWPM) / averageWPM) * secondsInAMin);

    if (seconds === 1) {
        secondPlauralize = 'second';
    } else {
        secondPlauralize = 'seconds';
    }

    if (seconds === 0) {
        timeToReadSelector[0].textContent = wordCount + ' ' + wordPlauralize + ' • ' + minutes + ' ' + minutePlauralize;
    } else {
        timeToReadSelector[0].textContent = wordCount + ' ' + wordPlauralize + ' • ' + minutes + ' ' + minutePlauralize + ' and ' + seconds + ' ' + secondPlauralize;
    }
};

calculateTime();
