import React, { useState } from "react";

const ListTable = () => {
   let dataSiswa = ['Anfal', 'Budi', 'Didi', 'Dudi'];

   const[namaSiswa, setNamaSiswa] = useState(dataSiswa);
   const[inputNama, setInputnama] = useState('');
   const[currentIndex, setCurrentIndex] = useState(-1);
   const[mode, setMode] = useState('add');

   const handleChange = (event) => {
        console.log(event.target.value);
        setInputnama(event.target.value);
   }
   const handleSubmit = (event) => {
    event.preventDefault()
    let data = namaSiswa

    if (mode  === 'add') {
      data = [...namaSiswa, inputNama]
    } else {
      data[currentIndex] = inputNama
    }
    setNamaSiswa(data)
    setInputnama('')
    setCurrentIndex(-1)
    setMode('add')
  }
   const handleDelete = (event) => {
    let index = parseInt(event.target.value);
    let deletedItem = namaSiswa[index];
    let newData = namaSiswa.filter(al => al !== deletedItem);
    setNamaSiswa(newData)
   }
   const handleEdit = (event) => {
    console.log(event);
    let index = parseInt(event.target.value);
    let editItem = namaSiswa[index]
    setMode('edit')
    setInputnama(editItem);
    setCurrentIndex(event.target.value)
   }


   
   
   
    return(
        <div>
            <h1>Daftar Peserta Lomba</h1>
            <table>
            <thead>
            <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {
                    namaSiswa.map((el, index) =>{
                        return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{el}</td>
                                <td>
                                    <button onClick={handleEdit} value={index}>Edit</button>
                                    <button onClick={handleDelete} value={index}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>

            <form onSubmit={handleSubmit}>
                <label>
                    Masukkan nama peserta:
                </label>          
                <input type="text" value={inputNama} onChange={handleChange} placeholder="ketik sesuatu"/>
                <button type="submit" value="submit">submit</button>

           
            </form>
        </div>

    )
}
export default ListTable;