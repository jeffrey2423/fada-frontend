import React, { useState } from 'react'
import Spinner from '../components/Spinner'
import { api } from '../api/api';
import { mostrarMensaje, DescargarArchivo, BlobToText } from '../utils/Utils';

const Index = () => {

  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  }

  const handleApiFileUpload = async (endpoint) => {
    let response;
    let responseText = "";
    try {
      setLoading(true);

      response = await api.fileUpload(file, endpoint);

      try {
        responseText = JSON.parse(await BlobToText(response.data));
      } catch (error) {       
      }
    
      if (responseText.error_status) {
        throw new Error("Ha ocurrido un error "+responseText.error_message);
      }else{
        DescargarArchivo(response.data, endpoint);
      }
 
    } catch (error) {
      mostrarMensaje.Error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading ? <Spinner /> : null}
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div>
              <label htmlFor='formFileLg' className="form-label">Selecciona el archivo con la informacion del problema</label>
              <input onChange={onFileChange} className="form-control form-control-lg" id="formFileLg" type="file" name='file' />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Optimizando el uso de una sala de operaciones</h5>
                <p className="card-text">El hospital desea seleccionar cu´ales procedimientos
                  quirurgicos se van a determinar en una
                  sala, para esto se busca asignar los procedimientos
                  a la sala de tal forma que no hayan
                  cruces en los horarios seleccionados y se maximice
                  el tiempo que la sala se encuentre en
                  funcionamiento en el día.</p>
                <div className="d-flex justify-content-between">
                  <button
                    onClick={() => handleApiFileUpload('SalaOperaciones/SolucionRecursiva')}
                    className="btn btn-primary">
                    Solucion Recursiva
                  </button>
                  <button 
                    onClick={() => handleApiFileUpload("SalaOperaciones/SolucionDinamica")}
                    className="btn btn-primary">
                    Solucion Dinamica
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Copia de libros</h5>
                  <p className="card-text">Determinar como repartir
                    los libros entre los escritores de forma que
                    el tiempo que se demoren realizando las copias
                    sea el mínimo teniendo en cuenta que el tiempo
                    que se demoran en realizar las copias depende
                    del escritor que tenga mas paginas asignadas.
                    Hacer la copia de una pagina tiene una duraci
                    on de un dia.</p>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-primary">Solucion Recursiva</button>
                    <button className="btn btn-primary">Solucion Dinamica</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Index;
