import ReactOnRails from 'react-on-rails';

import HelloWorld from '../components/HelloWorld';
import Articles from '../components/Articles';
import Index from '../components/Index';
import Form from '../components/Form';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Index,
  HelloWorld,
  Articles,
  Form,
});
