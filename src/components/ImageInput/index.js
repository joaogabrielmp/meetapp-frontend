import React, { useState, useRef } from 'react';
import { useField } from '@rocketseat/unform';
import { MdCameraAlt } from 'react-icons/md';
import { de } from 'date-fns/esm/locale';
import api from '~/services/api';

import { Container } from './styles';

export default function ImageInput() {
  const { defaultValue, registerField } = useField('File');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  async function handleChange(e) {}

  return (
    <Container>
      <label htmlFor="image">
        <div>
          <MdCameraAlt size={55} />
          <strong>Selecione a imagem</strong>
        </div>

        <input
          type="file"
          id="image"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
