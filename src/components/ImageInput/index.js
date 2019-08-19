import React from 'react';
import { useField } from '@rocketseat/unform';
import { MdCameraAlt } from 'react-icons/md';
import api from '~/services/api';

import { Container } from './styles';

export default function ImageInput() {
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
          // data-file={file}
          onChange={handleChange}
          // ref={ref}
        />
      </label>
    </Container>
  );
}
