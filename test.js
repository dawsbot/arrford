import test from 'ava';
import fn from './';

test('valid args', t => {
  t.throws(() => {
    fn(false);
  }, TypeError);
  t.throws(() => {
    fn([], 'err');
  }, TypeError);
  t.throws(() => {
    fn(['1'], 'err', false);
  }, TypeError);

  t.notThrows(() => {
    fn([], false);
  });

  t.throws(() => {
    fn(['w1', true, 'alt', 'extra']);
  }, Error);
});

test('oxford true', t => {
  t.is(fn(['w1']), 'w1');
  t.is(fn(['w1', 'w2']), 'w1 and w2');
  t.is(fn(['w1', 'w2', 'w3']), 'w1, w2, and w3');
  t.is(fn(['w1', 'w2', 'w3', 'w4']), 'w1, w2, w3, and w4');
});

test('oxford false', t => {
  t.is(fn(['w1'], false), 'w1');
  t.is(fn(['w1', 'w2'], false), 'w1 and w2');
  t.is(fn(['w1', 'w2', 'w3'], false), 'w1, w2 and w3');
  t.is(fn(['w1', 'w2', 'w3', 'w4'], false), 'w1, w2, w3 and w4');
});

test('custom join', t => {
  t.is(fn(['w1'], true, 'och'), 'w1');
  t.is(fn(['w1', 'w2'], true, 'och'), 'w1 och w2');
  t.is(fn(['w1', 'w2', 'w3'], true, 'och'), 'w1, w2, och w3');
  t.is(fn(['w1', 'w2', 'w3'], true, ''), 'w1, w2,  w3');
  t.is(fn(['w1', 'w2', 'w3', 'w4'], false, 'och'), 'w1, w2, w3 och w4');
});
