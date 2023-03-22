import { Button } from 'react-bootstrap';
import './style.css';

export const TestButton = ({buttonname}) => {
  return (
    <div className='TestButton'>
      <Button className='demobutton'>{buttonname}</Button>
      <h2 className='heading'>Demo Button</h2>
    </div>
  );
}

export const PrimaryButton = () => {
  return (
    <div className='PrimaryButton'>
      <Button variant='primary'>Primary</Button>
      <Button variant="secondary">Secondary</Button>{' '}
    </div>
  );
}