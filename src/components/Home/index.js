import React from 'react';
import useFirestore from '../hooks/getFirestore';
import { motion } from 'framer-motion';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
 
const App = () => {
  const { docs } = useFirestore('images');

  return (
    <div>
    <Navbar className="bg-light justify-content-between">
    <Form inline>
      <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
      <Button type="submit">Submit</Button>
    </Form>
    </Navbar>
    <div className="img-grid">
      {docs && docs.map(doc => (
        <motion.div className="img-wrap" key={doc.id} 
          layout
          whileHover={{ opacity: 1 }}s
        >
          <motion.img src={doc.url} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      ))}
    </div>
  </div>
);}
 
export default App;