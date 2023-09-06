import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './Data.js'

function App() {
  const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState('');
  const keys = ["no_katalog_data","kode_satker","tahun","no_urut","satker","name"]

  // const sortName = () => {
  //   setContacts(
  //     data.sort((a, b) => {
  //       return a.first_name.toLowerCase() < a.first_name.toLowerCase()
  //         ? -1
  //         : a.first_name.toLowerCase() > a.first_name.toLowerCase()
  //         ? 1
  //         : 0;
  //     })
  //   );
  // };

  return (
    <div>
      <Container>
        <h1 className='text-center mt-4'>Data Catalog</h1>
        <Form>
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search data catalog'
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>No. Katalog Data</th>
              <th>Kode Satker</th>
              <th>Tahun</th>
              <th>No. Urut</th>
              <th>Satker</th>
              <th>Dataset Name</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                keys.some()
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.number}</td>
                  <td>{(item.no_katalog_data)}</td>
                  <td>{item.kode_satker}</td>
                  <td>{item.tahun}</td>
                  <td>{item.no_urut}</td>
                  <td>{item.satker}</td>
                  <td>{item.name}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
