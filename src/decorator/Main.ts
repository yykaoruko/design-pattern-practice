import StringDisplay from './StringDisplay';
import SideBorder from './SideBorder';
import FullBorder from './FullBorder';

function main(): void {
  const b1 = new StringDisplay('Hello, world!');
  const b2 = new SideBorder(b1, '#');
  const b3 = new FullBorder(b2);
  b1.show();
  b2.show();
  b3.show();

  const b4 = new SideBorder(
    new FullBorder(new SideBorder(new StringDisplay('heyhey'), '/')),
    '*',
  );
  b4.show();
}

main();
