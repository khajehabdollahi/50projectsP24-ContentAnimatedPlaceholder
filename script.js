const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/78/16/29/the-tomb-of-hafez-and.jpg?w=1200&h=-1&s=1" alt="" />'
  title.innerHTML = 'Hafez Shirazi'
  excerpt.innerHTML =
    "Persian lyric poet Hafiz (born Khwāja Šamsu d-Dīn Muḥammad Hāfez-e Šīrāzī) grew up in Shiraz. Very little is known about his life, but it is thought that he may have memorized the Qur’an after hearing his father recite passages. When his father died, he left school to work at a bakery and as a copyist. Hafiz became a poet at the court of Abu Ishak and also taught at a religious college. He is one of the most celebrated of the Persian poets, and his influence can be felt to this day. As the author of numerous ghazals expressing love, spirituality, and protest, he and his work continue to be important to Iranians, and many of his poems are used as proverbs or sayings.";
  profile_img.innerHTML =
    '<img src="https://yt3.googleusercontent.com/ytc/AOPolaSIzH5pCuls-AqHHH0RCFDDycK9JV7hkqV1Qgd_AQ=s900-c-k-c0x00ffffff-no-rj" alt="" />'
  name.innerHTML = 'Hassan Khajeh Abdollahi'
  date.innerHTML = 'Nov 08, 2023'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}