import React, { useState } from 'react';
import useForm from '../../hooks/useForm';
import { initialState } from '../../services/initialState';
import Checkbox from '../Checkbox';
import Select from '../Select';
import { Form, Input, LabelForm, SubmitButton, TextArea } from './styles';
import { SelectOption } from '../Select/styles';
import TagsComponent from '../Tags';
import { TagsListItem } from '../Tags/styles';
import axios from 'axios';

const FormComponent = () => {
  const [form, setForm, handleChangeInput] = useForm(initialState);
  const [valoresTeste, setValoresTeste] = useState(['teste1', 'teste2']);
  const [tags, setTags] = useState([
    'web',
    'illustration',
    'graphics',
    'ui',
    'design',
    'app',
    'iphone',
    'interface',
    'icon',
    'web design',
  ]);

  const baseUrl = 'https://api.trello.com/1/cards?';

  const handleToSubmit = (event) => {
    event.preventDefault();
    const body = {
      name: form.name,
      email: form.email,
      description: form.description,
    };

    const response = axios
      .post(
        `${baseUrl}
        ${process.env.REACT_APP_CARDS_API_KEY}
        ${process.env.REACT_APP_CARDS_API_TOKEN}`,
        body
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Form onSubmit={handleToSubmit}>
        <LabelForm htmlFor="name" id="name">
          Nome
        </LabelForm>
        <Input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChangeInput}
        />
        <LabelForm htmlFor="email" id="email">
          E-mail
        </LabelForm>
        <Input
          id="email"
          name="email"
          value={form.email}
          onChange={handleChangeInput}
        />
        <TextArea
          placeholder="Escreva uma descrição"
          name="description"
          value={form.description}
          onChange={handleChangeInput}
        />
        <Checkbox label="Opção 1" id="opcao1" />
        <Checkbox label="Opção 2" id="opcao2" />
        <Checkbox label="Opção 3" id="opcao3" />
        <Select title={'Selecione uma opção'}>
          {valoresTeste.map((teste) => {
            return (
              <>
                <SelectOption>{teste}</SelectOption>
              </>
            );
          })}
        </Select>
        <TagsComponent>
          {tags.map((tag) => {
            return <TagsListItem>{tag}</TagsListItem>;
          })}
        </TagsComponent>
        <SubmitButton type="submit">Enviar</SubmitButton>
      </Form>
    </>
  );
};

export default FormComponent;
