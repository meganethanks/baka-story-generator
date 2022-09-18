const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
};


const storyText = ('It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.');

const character = [
'Willy the Goblin',
'Big Daddy',
'Father Christmas',
];

const place = [
'the soup kitchen',
'Disneyland',
'the White House',
];

const matter = [
'spontaneously combusted',
'melted into a puddle on the sidewalk',
'turned into a slug and crawled away',
];


randomize.addEventListener('click', result);

function result() {

  const newStory = storyText;
  const xItem = randomValueFromArray(character);
  const yItem = randomValueFromArray(place);
  const zItem = randomValueFromArray(matter);


 newStoryReplace = newStory.replace(/:insertx:/g,xItem);
 newStoryReplace = newStoryReplace.replace(/:inserty:/g,yItem);
 newStoryReplace = newStoryReplace.replace(/:insertz:/g,zItem);

console.log(newStory); //←できてるか確認用

  if(customName.value !== '') {
    const name = customName.value;
    newStoryReplace = newStoryReplace.replace(/Bob/g,name); 

  }

console.log(newStory); //←できてるか確認用
console.log(newStory); //←クローンの変更をプッシュできるのかテスト

  if(document.getElementById('jp').checked) {
    let weight = Math.round(136.078);
    weight += ' kg';
    
    let temperature =  Math.round(34.4444);
    temperature += ' centigrade';

 newStoryReplace = newStoryReplace.replace(/300 pounds/g,weight);
 newStoryReplace = newStoryReplace.replace(/94 fahrenheit/g,temperature);
    
  }

  story.textContent = newStoryReplace;
  story.style.visibility = 'visible';

}