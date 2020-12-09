function getRandomKeyword() {
  const keywords = [
    'city',
    'water',
    'nature',
    'night',
    'winter',
    'animal',
    'tech',
    'architecture',
    'travel',
  ]

  // Get random keyword from array
  return keywords[Math.floor(Math.random() * keywords.length)]
}

function getImage(size = '1600x900') {
  return `https://source.unsplash.com/${size}/?${getRandomKeyword()}`
}

export default getImage
