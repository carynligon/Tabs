var colors = {
    red: {
      title: 'Red',
      description1: 'Red is a cool color because it is cool. Red is a cool color because it is cool. Red is a cool color because it is cool. Red is a cool color because it is cool. Red is a cool color because it is cool. Red is a cool color because it is cool. Red is a cool color because it is cool. Red is a cool color because it is cool. Red is a cool color because it is cool. Red is a cool color because it is cool. Red is a cool color because it is cool. Red is a cool color because it is cool. Red is a cool color because it is cool. Red is a cool color because it is cool. Red is a cool color because it is cool. Red is a cool color because it is cool. Red is a cool color because it is cool. Red is a cool color because it is cool. Red is a cool color because it is cool.',
      description2: 'Do you think red is a cooler color? Because I do. Do you think red is a cooler color? Because I do. Do you think red is a cooler color? Because I do. Do you think red is a cooler color? Because I do. Do you think red is a cooler color? Because I do. Do you think red is a cooler color? Because I do. Do you think red is a cooler color? Because I do. Do you think red is a cooler color? Because I do.',
      description3: 'I\'m glad we agree that red is a cool color. I\'m glad we agree that red is a cool color. I\'m glad we agree that red is a cool color. I\'m glad we agree that red is a cool color. I\'m glad we agree that red is a cool color. I\'m glad we agree that red is a cool color. I\'m glad we agree that red is a cool color. I\'m glad we agree that red is a cool color. I\'m glad we agree that red is a cool color. I\'m glad we agree that red is a cool color. I\'m glad we agree that red is a cool color. I\'m glad we agree that red is a cool color. I\'m glad we agree that red is a cool color. I\'m glad we agree that red is a cool color. I\'m glad we agree that red is a cool color. I\'m glad we agree that red is a cool color. I\'m glad we agree that red is a cool color. I\'m glad we agree that red is a cool color. I\'m glad we agree that red is a cool color. I\'m glad we agree that red is a cool color.'
    },
    green: {
      title: 'Green',
      description1: 'Green is the color of grass. Green is the color of grass. Green is the color of grass. Green is the color of grass. Green is the color of grass. Green is the color of grass. Green is the color of grass. Green is the color of grass. Green is the color of grass. Green is the color of grass. Green is the color of grass. Green is the color of grass. Green is the color of grass. Green is the color of grass. Green is the color of grass.',
      description2: 'Compost. Garden. Green things. Recycle. Okra. Compost. Garden. Green things. Recycle. Okra. Compost. Garden. Green things. Recycle. Okra. Compost. Garden. Green things. Recycle. Okra. Compost. Garden. Green things. Recycle. Okra. Compost. Garden. Green things. Recycle. Okra. Compost. Garden. Green things. Recycle. Okra. Compost. Garden. Green things. Recycle. Okra. Compost. Garden. Green things. Recycle. Okra. Compost. Garden. Green things. Recycle. Okra. Compost. Garden. Green things. Recycle. Okra. Compost. Garden. Green things. Recycle. Okra.',
      description3: 'Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, Money, '
    },
    blue: {
      title: 'Blue',
      description1: 'The color blue makes people sad. The color blue makes people sad. The color blue makes people sad. The color blue makes people sad. The color blue makes people sad. The color blue makes people sad. The color blue makes people sad. The color blue makes people sad. The color blue makes people sad. The color blue makes people sad. The color blue makes people sad. The color blue makes people sad. The color blue makes people sad. The color blue makes people sad. The color blue makes people sad. The color blue makes people sad. The color blue makes people sad. The color blue makes people sad. The color blue makes people sad. The color blue makes people sad. The color blue makes people sad. The color blue makes people sad. The color blue makes people sad. The color blue makes people sad. The color blue makes people sad. The color blue makes people sad. The color blue makes people sad. The color blue makes people sad.',
      description2: 'But at least it is not as bad as the color red. But at least it is not as bad as the color red. But at least it is not as bad as the color red. But at least it is not as bad as the color red. But at least it is not as bad as the color red. But at least it is not as bad as the color red. But at least it is not as bad as the color red. But at least it is not as bad as the color red. But at least it is not as bad as the color red. But at least it is not as bad as the color red.',
      description3: 'Water is not blue. Water is not blue. Water is not blue. Water is not blue. Water is not blue. Water is not blue. Water is not blue. Water is not blue. Water is not blue. Water is not blue. Water is not blue. Water is not blue. Water is not blue. Water is not blue. Water is not blue. Water is not blue. Water is not blue. Water is not blue. Water is not blue. Water is not blue. Water is not blue. Water is not blue. Water is not blue. Water is not blue. Water is not blue.'
    }
  };



window.addEventListener('hashchange', function(dataToChange) {
  var dataToRender = String(location.hash.slice(1));
  renderContent(dataToRender);
});

function renderContent (contentToChange) {
  document.querySelector('#content h1').textContent = colors[contentToChange].title;
  document.querySelector('#one').textContent = colors[contentToChange].description1;
  document.querySelector('#two').textContent = colors[contentToChange].description2;
  document.querySelector('#three').textContent = colors[contentToChange].description3;
}
