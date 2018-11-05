import { ClientFunction } from 'testcafe';
import { Selector } from 'testcafe';

fixture `check redirect`
    .page `http://localhost:3000/subscriber`

test('checking that the list feature has the right content', async t => {
  await t
      .typeText('#first_name', 'Jamie')
      .typeText('#family_name', 'Oliver')
      .typeText('#email', 'jamie@oliver.com')
      .click('#submit')
      .navigateTo('http://localhost:3000/subscriber')
      .typeText('#first_name', 'John')
      .typeText('#family_name', 'Node')
      .typeText('#email', 'john@node.com')
      .click('#submit')
      .navigateTo('http://localhost:3000/subscriber')
      .typeText('#first_name', 'James')
      .typeText('#family_name', 'Rodriguez')
      .typeText('#email', 'james@rodrigez.com')
      .click('#submit')
      .navigateTo('http://localhost:3000/subscriber/display')
      .expect(Selector('#list').innerText).contains('John Node', 'Jamie Oliver', 'James Rodrigez')
});
