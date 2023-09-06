import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './Data.js';
// import { dataCatalog } from './DataCatalog.js'

function App() {
  const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState('');


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
        <h1 className='text-center mt-4'>Katalog Data</h1>
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
              <th>Nama Dataset</th>
              <th>Objek Data \ Resources</th>
              <th>Variabel Pembentuk</th>
              <th>Format Dokumen Data</th>
              <th>Jenis Data</th>
              <th>Status</th>
              <th>Produsen Data</th>
              <th>Jadwal Pemutakhiran</th>
              <th>Tagging Data Prioritas</th>
              <th>Prioritas Nasional</th>
              <th>Program Prioritas</th>
              <th>Kesepakatan Berbagi Data (By API)</th>
              <th>Link API Jika YA</th>
              <th>Kesepakatan Pengumpulan Data (Jika Tidak)</th>
              <th>Catatan</th>
              <th>DASAR HUKUM</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                return search.toString() === ''
                  ? item
                  : item.no_katalog_data.toString().includes(search) ||
                  item.satker.toLowerCase().includes(search) || item.nama_dataset.toLowerCase().includes(search) || item.tahun.toString().includes(search) || item.kode_satker.toString().includes(search) || item.status.toLowerCase().includes(search)
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.number}</td>
                  <td>{item.no_katalog_data}</td>
                  <td>{item.kode_satker}</td>
                  <td>{item.tahun}</td>
                  <td>{item.no_urut}</td>
                  <td>{item.satker}</td>
                  <td>{item.nama_dataset}</td>
                  <td>{item.objek_data}</td>
                  <td>{item.variabel_pembentuk}</td>
                  <td>{item.format_dokumen_data}</td>
                  <td>{item.jenis_data}</td>
                  <td>{item.status}</td>
                  <td>{item.produsen_data}</td>
                  <td>{item.jadwal_pemutakhiran}</td>
                  <td>{item.tagging_data_prioritas}</td>
                  <td>{item.prioritas_nasional}</td>
                  <td>{item.program_prioritas}</td>
                  <td>{item.kesepakatan_berbagi_data}</td>
                  <td>{item.link_api}</td>
                  <td>{item.kesepakatan_pengumpulan_data}</td>
                  <td>{item.catatan}</td>
                  <td>{item.dasar_hukum}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
