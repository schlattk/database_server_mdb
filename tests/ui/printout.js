import { ClientFunction } from 'testcafe';
import { Selector } from 'testcafe';

fixture `check redirect`
    .page `http://localhost:3000/subscriber`

    const getPageUrl = ClientFunction(() => window.location.href);

  test('checking the redirect', async t => {
    await t
        .typeText('#first_name', 'Jamie')
        .typeText('#family_name', 'Oliver')
        .typeText('#email', 'jamie@oliver.com')
        .click('#submit')
        .expect(getPageUrl()).contains('http://localhost:3000/subscriber/print');
  });

  test('checking the rendering', async t => {
    await t
        .typeText('#first_name', 'Jamie')
        .typeText('#family_name', 'Oliver')
        .typeText('#email', 'jamie@oliver.com')
        .click('#submit')
        .expect(Selector('#print').innerText).contains('Hello Jamie Oliver thank you for subscribing')
  });

  test('checking that the last entry is recalled', async t => {
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
        .expect(Selector('#print').innerText).contains('Hello John Node thank you for subscribing')
  });
