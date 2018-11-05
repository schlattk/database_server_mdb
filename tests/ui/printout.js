import { ClientFunction } from 'testcafe';
import { Selector } from 'testcafe';

fixture `check redirect`
    .page `http://localhost:3000/users`

    const getPageUrl = ClientFunction(() => window.location.href);

  test('checking the redirect', async t => {
    await t
        .typeText('#first_name', 'Jamie')
        .typeText('#family_name', 'Oliver')
        .typeText('#email', 'jamie@oliver.com')
        .click('#submit')
        .expect(getPageUrl()).contains('http://localhost:3000/users/printout');
  });

  test('checking the rendering', async t => {
    await t
        .typeText('#first_name', 'Jamie')
        .typeText('#family_name', 'Oliver')
        .typeText('#email', 'jamie@oliver.com')
        .click('#submit')
        .expect(Selector('#print').innerText).contains('Hello Jamie Oliver your email is jamie@oliver.com')
  });
