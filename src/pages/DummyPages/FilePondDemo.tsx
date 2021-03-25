import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function FilePondPage() {
  const [myfiles, setFiles] = useState<any>([
    {
      source:
        "https://kpro-be-dev.kremsmueller.com/api/AppFile/GetAppFile/022AD794-FF11-4B37-991E-5DCB4570BC69",
      options: { type: "remote" },
    },
    {
      source:
        "https://kpro-be-dev.kremsmueller.com/api/AppFile/GetAppFile/68aa191c-2029-4d51-8964-010a908a8dab",
      options: { type: "remote" },
    },
  ]);

  // Bilder Kontrolle
  React.useEffect(() => {
    console.log("files haben sich geändert! ", myfiles);
  }, [myfiles]);

  return (
    <React.Fragment>
      <Paper className="styledPaper">
        <div className="App">
          <FilePond
            files={myfiles}
            allowMultiple={true}
            onupdatefiles={setFiles}
            maxFiles={3}
            labelIdle='Soll ein Foto hinzugefügt werden? <span class="filepond--label-action">durchsuchen</span>'
          />
        </div>
      </Paper>
      <Button onClick={() => console.log(myfiles)}>Speichern</Button>
    </React.Fragment>
  );
}
