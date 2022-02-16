//Завдання 1
for (let li of document.querySelectorAll('li')) {
    let title = li.firstChild.data
    let count = li.getElementsByTagName('li').length

    console.log(title + ': ' + count)
}

//Завдання 2: властивість містить 1
