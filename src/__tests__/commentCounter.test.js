/**
 * @jest-environment jsdom
 */
import { commentCounter } from '../counters.js';

describe('Check comment length for a pokemon card', () => {
  // const title = document.createElement('h4');
  // const list = document.createElement('ul');

  test('3 comments', () => {
    const title = document.createElement('h4');
    const list = document.createElement('ul');
    const html = [
      {
        comment: 'I love burgers',
        username: 'Ruben',
        creation_date: 'today',
      },
      {
        comment: 'I love burgers',
        username: 'Ruben',
        creation_date: 'today',
      },
      {
        comment: 'I love burgers',
        username: 'Ruben',
        creation_date: 'today',
      },
    ];
    commentCounter(html, title, list);
    expect(title.innerHTML).toBe('Comments (3)');
  });

  test('1 comment', () => {
    const title = document.createElement('h4');
    const list = document.createElement('ul');
    const html = [
      {
        comment: 'I love burgers',
        username: 'Ruben',
        creation_date: 'today',
      },
    ];
    commentCounter(html, title, list);
    expect(title.innerHTML).toBe('Comments (1)');
  });

  test('No comments', () => {
    const title = document.createElement('h4');
    const list = document.createElement('ul');
    const html = [];
    commentCounter(html, title, list);
    expect(title.innerHTML).toBe('Comments (0)');
    expect(list.innerHTML).toBe('No comments... yet!');
  });
});
