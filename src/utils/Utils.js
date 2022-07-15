import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export const ResponseDataType = {
  applicationJson: "application/json",
  applicationXml: "application/xml",
  textPlain: "text/plain",
  textXml: "text/xml",
  textHtml: "text/html",
  textCsv: "text/csv",
  textJson: "text/json",
  textJavaScript: "text/javascript",
};

export const mostrarMensaje = {
  Error(msg, traza = "", id = "") {
    let mensaje =
      traza !== "" && traza !== null ? "" + msg + ", " + traza : "" + msg;
    toast.error(mensaje, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  },
  Exito(msg) {
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  },
  Informacion(msg) {
    toast.info("" + msg, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  },
};

export const DescargarArchivo = (data, fileName) => {
  try {
    let objFileName = fileName.split("/");

    fileName = `${objFileName[0] + objFileName[1]}${new Date().getTime()}.txt`;

    const url = window.URL.createObjectURL(new Blob([data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
  } catch (error) {
    throw new Error(error);
  }
};

export const BlobToText = async (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsText(blob);
  });
};

export function IsUndefinedOrNullOrEmptyOrFalse(value) {
  let flag = false;

  if (
    value === undefined ||
    value === null ||
    value === false ||
    value === "" ||
    value === " "
  ) {
    flag = true;
  }

  return flag;
}
