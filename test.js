import test from 'ava';
import fn from './';

test('valid args', t => {
  t.throws(() => {
    fn(false);
  }, TypeError);
  t.throws(() => {
    fn(['1'], 'err');
  }, TypeError);

  t.throws(() => {
    fn([]);
  }, Error);
  t.throws(() => {
    fn(['w1', true, 'extra']);
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
