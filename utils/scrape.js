const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://unstop.com/hackathons/code-red-nitk-surathkal-1126425';

export const scrape = () => {
  axios.get(url).then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);

    // Find the element that contains the text "Registered"
    const registeredElement = $('*').filter(() => (
      $(this).text().trim() === 'Registered'
    ));

    if (registeredElement.length > 0) {
      // Get the sibling element
      const siblingElement = registeredElement.next();
      const siblingValue = siblingElement.text().trim();

      console.log('Sibling Value:', siblingValue);
    } else {
      console.log('Element with text "Registered" not found.');
    }
  }).catch((error) => {
    console.error('Error fetching the webpage:', error);
  });
};
