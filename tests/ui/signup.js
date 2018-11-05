import { Selector } from 'testcafe';

fixture `Signup form`
    .page `http://localhost:3000/subscriber`;

  test('test the signup page', async t => {
    await t
        .expect(Selector('#welcome').innerText).contains('Welcome to Sign Up Page');
    });

  test('test the signup page', async t => {
    await t
        .expect(Selector('#signup_form').innerText).contains('First Name:');
    });

  test('test the signup page', async t => {
    await t
        .expect(Selector('#signup_form').innerText).contains('Family Name:');
    });
  test('test the signup page', async t => {
    await t
        .expect(Selector('#signup_form').innerText).contains('Email:');
  });
