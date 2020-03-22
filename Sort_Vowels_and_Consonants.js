// Exercise = Sample test for interviews

// Given an input string
// Return all the vowels in the same order as the input
// Return all the consonants in the same order as the input
// Final output has to return the vowels following by the consonants in an array

const word = 'javascript loops'

// return all the vowels in the same order of the input
const split = word.split('')
const vowels = ['a', 'e', 'i', 'o', 'u']

const vowelsFound = []
	for(letter = 0; letter < split.length; letter++){
			if(vowels.indexOf(split[letter]) != -1){
				vowelsFound.push(split[letter])
      }
    }
  console.log('vowelsFound', vowelsFound)

// return all the consonnes in the same order of the input

const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k','l', 'm', 'n','p', 'q','r','s','t','v','x','z']
const consonantsFound = []
	for(letter = 0; letter < split.length; letter++){
			if(consonants.indexOf(split[letter]) != -1){
				consonantsFound.push(split[letter])
      }
    }
  console.log('consonantsFound', consonantsFound)

// return vowels and consonnes
const allWord = []
const concat = allWord.concat(vowelsFound, consonantsFound)

console.log('Concatenate the word', concat)
