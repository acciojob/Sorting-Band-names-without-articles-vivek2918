//your code here
let arr = ['Tajmahal', 'Victoria Memorial', 'The Virupaksha Temple'];
//arr.sort()
//consol.log(arr)
function strip (word) {
    let regex = new RegExp('^(a |the |an )', 'i')
    return word.replace(regex, '').trim()
}

const sortedTouristSpots  = arr.sort((a, b) => (strip(a) > strip(b)) ? 1 : -1)

document.querySelector('#bands').innerHTML = 
    sortedTouristSpots.map(item => `<li>${item}</li>`).join('')
