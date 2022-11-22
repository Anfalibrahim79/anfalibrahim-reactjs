import React, { useState } from "react";
import { Table, Button, Stack, Form, InputGroup } from "react-bootstrap";

const DataBuah = () => {
    let daftarBuah = [
        {nama: "Nanas", hargaTotal: 100000, beratTotal: 4 },
        {nama: "Manggis", hargaTotal: 350000, beratTotal: 10},
        {nama: "Nangka", hargaTotal: 90000, beratTotal: 2},
        {nama: "Durian", hargaTotal: 400000, beratTotal: 5},
        {nama: "Strawberry", hargaTotal: 120000, beratTotal: 6}
    ]

    const[namaBuah, setNamaBuah] = useState(daftarBuah);
    const[inputBuah, setInputBuah] = useState({
        nama : '',
        hargaTotal : 0,
        beratTotal : 0
    });
    const[search, setSearch]= useState('');
    console.log(search);
    const[currentIndex, setCurrentIndex] = useState(-1);



    const handleChange = (event) => {
        let{name , value} = event.target
        setInputBuah({...inputBuah, [name] : value})
    }

    const handleSubmit =(event) => {
        event.preventDefault()
        let data = namaBuah
        if(currentIndex === -1){
            data = [...namaBuah, inputBuah]
        }else{
            data[currentIndex] = inputBuah
        }
        setNamaBuah(data)
        setInputBuah({
            nama : '',
            hargaTotal : 0,
            beratTotal : 0
        })
        setCurrentIndex(-1)
    }
    const handleEdit = (event) => {
        let index = parseInt(event.target.value)
        let editItem = namaBuah[index]
        setInputBuah(editItem)
        setCurrentIndex(event.target.value)

    }
    const handleDelete = (event) =>{
        let index = parseInt(event.target.value)
        let deletedItem = namaBuah[index]
        let newData = namaBuah.filter (al => al !== deletedItem)
        setNamaBuah(newData)
    }

    return(
        <div className="container">
            <h1>Daftar Buah</h1>
            <InputGroup className="mb-3" onChange={(e) =>{ 
                console.log(e);
                setSearch(e.target.value)}}>
                <InputGroup.Text id="basic-addon1">search</InputGroup.Text>
                <Form.Control
                placeholder="Cari Buah"
                aria-label="Cari Buah"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Buah</th>
                        <th>Harga Total</th>
                        <th>Harga/Kg</th>
                        <th>Berat Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        namaBuah.filter((al) =>{
                            return search.toLocaleLowerCase() === "" ? al : al.nama.toLocaleLowerCase().includes(search);
                        }).map((el , index) =>{
                            return(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{el.nama}</td>
                                    <td>{el.hargaTotal*(el.beratTotal)}</td>
                                    <td>{el.hargaTotal}</td>
                                    <td>{el.beratTotal} KG</td>
                                    <td>
                                       <Stack direction="horizontal" gap={3} className="mx-auto">
                                        <Button onClick={handleEdit} variant="primary" size="md" value={index} >Edit</Button>
                                        <Button onClick={handleDelete} variant="danger" size="md" value={index}>Delete</Button>
                                       </Stack>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>

            <Form className="mt-4" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formNamaBuah">
                <Form.Label>Nama Buah</Form.Label>
                <Form.Control type="text" placeholder="Enter name" onChange={handleChange} value={inputBuah.nama} name="nama"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formHargaBuah">
                <Form.Label>Harga Buah</Form.Label>
                <Form.Control type="number" placeholder="Enter price" onChange={handleChange} value={inputBuah.hargaTotal} name="hargaTotal" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBeratBuah">
                <Form.Label>Berat Buah</Form.Label>
                <Form.Control type="number" placeholder="Enter weight" onChange={handleChange} value={inputBuah.beratTotal} name="beratTotal"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>

        </div>
    )

    
}
export default DataBuah;