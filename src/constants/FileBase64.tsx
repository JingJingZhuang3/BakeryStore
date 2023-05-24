/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
* Licensed Under MIT (http://opensource.org/licenses/MIT)
*
* React File Base64 - Version@1.0.0
*
*/

import React from 'react';

interface FileBaseProps {
  multiple: boolean;
  onDone: (e: fileType | fileType[]) => void;
}

export type fileType = {
  name: string,
  type: string,
  size: string,
  base64: string | ArrayBuffer | null,
  file: File,
}

export default class FileBase64 extends React.Component<FileBaseProps> {

  constructor(props: FileBaseProps) {
    super(props);
    this.state = {
      files: [],
    };
  }

  public handleChange(e: React.ChangeEvent<HTMLInputElement>): void {

    const input = e.target as HTMLInputElement;

    if (!input.files?.length) {
        return;
    }

    // get the files
    const files = input.files;
    // Process each file
    const allFiles: fileType[] = [];
    for (let i = 0; i < files.length; i++) {

      const file = files[i];

      // Make new FileReader
      const reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {

        // Make a fileInfo Object
        const fileInfo:fileType = {
          name: file.name,
          type: file.type,
          size: Math.round(file.size / 1000) + ' kB',
          base64: reader.result,
          file: file,
        };

        // Push it to the state
        allFiles.push(fileInfo);

        // If all files have been proceed
        if (allFiles.length == files.length) {
          // Apply Callback function
          if (this.props.multiple)
            this.props.onDone(allFiles);
          else
            this.props.onDone(allFiles[0]);
        }

      } // reader.onload

    } // for

  }

  render(): JSX.Element{
    return (
      <input
        type="file"
        onChange={ (e) => this.handleChange(e)}
        multiple={this.props.multiple} />
    );
  }
}
