import { weex, web, Process as Processor } from '../';

test('exports web & weex as instance of Processor', () => {
  expect(web).toBeInstanceOf(Processor);
  expect(weex).toBeInstanceOf(Processor);
});

const testStyle = {
  fontSize: 20,
  marginTop: 10,
  marginLeft: '0',
  marginRight: '0px',
  marginBottom: 0,
  backgroundImage: '0px',
  color: '#FF5E28',
  letterSpacing: '0',
  lineHeight: '20rem',
  lines: 1,
  // fontWeight: 'normal',
  flexDirection: 'column',
  fontWeight: 400,
  fontFamily: 'PingFangSC',
};

test('web processor should function normally', () => {
  console.log(web.filter(testStyle));
  expect(web.filter(testStyle)).toMatchSnapshot();
});

test('weex processor should function normally', () => {
  expect(weex.filter(testStyle)).toMatchSnapshot();
});