import Director from './director';
import TextBuilder from './textBuilder';
import HTMLBuilder from './htmlBuilder';

function main(str: string) {
  if (str === 'plain') {
    const textBuilder = new TextBuilder();
    const director = new Director(textBuilder);
    director.build();
    const result: string = textBuilder.getResult();
    console.log(result);
  } else if (str === 'html') {
    const htmlBuilder = new HTMLBuilder();
    const director = new Director(htmlBuilder);
    director.build();
    const result: string = htmlBuilder.getResult();
    console.log(result);
  }
}

main('html');
main('plain');
