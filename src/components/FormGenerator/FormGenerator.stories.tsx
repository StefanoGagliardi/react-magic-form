import React from 'react';
import { storiesOf } from '@storybook/react';
import { FormGenerator } from './FormGenerators';
import { FormConfiguration } from '../../types';
/**
 * Super modo per creare i casi di s
 */
storiesOf('FormGenerator', module)
.add('Grid', () => <FormGenerator form={formConfigGrid} />)
.add('Validation', () => <FormGenerator form={formConfingValidation} />)
.add('Fields', () => <FormGenerator form={formConfigFields} />)
.add('Submit', () => <FormGenerator form={formConfigSubmit} />);

const formConfigGrid: FormConfiguration = {
  title: "First form generated- Grid sytem",
  subTitle: "Sitema di griglia dinamico, sono supportate le seugneti colonne: '1' | '1/2' | '1/3' ",
  submit: {
    endpoint: "http://localhost:5000/formSubmit",
    method: "POST",
    backend: true,
    onSubmit: (data: any) => {
      console.log("Custom submit callback in useCallback", data);
    },
  },
  fields: [
    {
      type: "text",
      label: "Input text label",
      layout: "1",
      id: "id1",
      name: "name1",
      validation: {},
    },
    {
      type: "password",
      label: "Input password label",
      layout: "1/2",
      id: "id3",
      name: "name3",
      validation: {},
    },
    {
      type: "password",
      label: "Input password label",
      layout: "1/2",
      id: "id3",
      name: "name3",
      validation: {},
    },
    {
      type: "text",
      label: "Input text label",
      layout: "1/3",
      id: "id4",
      name: "name4",
      validation: {},
    },
    {
      type: "text",
      label: "Input text label",
      layout: "1/3",
      id: "id5",
      name: "name5",
      validation: {},
    },
    {
      type: "text",
      label: "Input text label",
      layout: "1/3",
      id: "id6",
      name: "name6",
      validation: {},
    },
    {
      type: "text",
      label: "Input text label",
      layout: "1/4",
      id: "id8",
      name: "name8",
      validation: {},
    },
    {
      type: "text",
      label: "Input text label",
      layout: "1/4",
      id: "id9",
      name: "name9",
      validation: {},
    },
    {
      type: "text",
      label: "Input text label",
      layout: "1/4",
      id: "id10",
      name: "name10",
      validation: {},
    },
    {
      type: "password",
      label: "Input password label",
      layout: "1/4",
      id: "id11",
      name: "name11",
      validation: {},
    },
    // Custom input type
    {
      type: "password",
      label: "Input type custom 'password'",
      layout: "1",
      id: "id12",
      name: "name12",

      validation: {},
    },
  ],
};

// NB: FormConfiguration is a type of FormGenerator
const formConfingValidation: FormConfiguration = {
  title: "Second form generated - input validaion",
  subTitle: "Vari tipologie di validazine per gli input: required, minLenght, maxLenght, equalTo, callback...",
  submit: {
    endpoint: "http://localhost:5000/formSubmit",
    method: "POST",
    backend: true,
    onSubmit: (data: any) => {
      console.log("Custom submit callback in useCallback", data);
    },
  },
  fields: [
    {
      type: "email",
      label: "Indirizzo email",
      layout: "1/2",
      id: "email",
      name: "email",
      placeholder: "Inserire l'indirizzo email",
      validation: {
        required: true,
      },
    },
    {
      type: "text",
      label: "Ripetere indirizzo email",
      layout: "1/2",
      id: "repeatEmail",
      name: "repeatEmail",
      placeholder: "Ripetere l'indirizzo email",
      validation: {
        required: {
          value: true,
          message: "Ripetere l'indirizzo email",
        },
        equalTo: {
          value: "email",
          message: "I due indirizzi email devono coincdere  ",
        },
      },
    },
    {
      type: "text",
      label: "Nome",
      layout: "1/3",
      id: "firstName",
      name: "firstName",
      placeholder: "Inserire il nome",
      validation: {
        required: {
          value: true,
          message: "Messaggio personalizzato",
        },
        validate: (value: string) => value === "Stefano",
        minLength: 2,
        maxLength: 15,
      },
    },
    {
      type: "text",
      label: "Cognome",
      layout: "1/3",
      id: "lastName",
      name: "lastName",
      placeholder: "Inserire il cognome",
      validation: {
        required: true,
        minLength: 2,
        maxLength: 15,
      },
    },
    {
      type: "text",
      label: "Telefono",
      layout: "1/3",
      id: "phone",
      name: "phone",
      placeholder: "Inserire il telefono",
      validation: {
        required: true,
        pattern: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
      },
    },
    {
      type: "password",
      label: "Password",
      layout: "1/2",
      id: "password",
      name: "password",
      placeholder: "Inserire la password",
      validation: {
        required: true,
        minLength: 3,
      },
    },
    {
      type: "text", // Replace with type number
      label: "Età",
      layout: "1/2",
      id: "age",
      name: "age",
      placeholder: "Inserire la tua età",
      validation: {
        required: true,
        min: 18,
        max: 60,
      },
    },
  ],
};

// NB: FormConfiguration is a type of FormGenerator
const formConfigFields: FormConfiguration = {
  title: "Third form generated - Input types",
  subTitle: "Diverse tipologie di input supportate: text, email, password, select, textare, address, datepicker ...",
  submit: {
    endpoint: "http://localhost:5000/formSubmit",
    method: "POST",
    backend: true,
    onSubmit: (data: any) => {
      console.log("Custom submit callback in useCallback", data);
      return data;
    },
  },
  fields: [
    {
      type: "text",
      label: "Input type TEXT",
      layout: "1/3",
      id: "inputTest",
      name: "inputTest",
      placeholder: "Inserire un testo",
      validation: {
        required: true,
      },
      autocomplete: "off",
    },
    {
      type: "email",
      label: "Input type EMAIL",
      layout: "1/3",
      id: "inputEmail",
      name: "inputEmail",
      placeholder: "Inserire un'email",
      validation: {
        required: true,
      },
      autocomplete: "email",
    },
    {
      type: "password",
      label: "Input type PASSWORD",
      layout: "1/3",
      id: "inputPassword",
      name: "inputPassword",
      placeholder: "Inserire una password",
      validation: {
        required: true,
      },
      autocomplete: "current-passowrd",
    },
    {
      type: "select",
      label: "Input type SELECT with STATIC data",
      layout: "1/3",
      id: "inputSelect",
      name: "inputSelect",
      // placeholder: "Selezionare una città",
      validation: {
        required: {
          value: true,
          message: "Selezionare una città",
        },
      },
      dataLoading: false,
      data: [
        {
          label: "--- SELEZIONARE UN OPZIONE ---",
          value: "",
        },
        {
          label: "Milano static",
          value: "MI",
        },
        {
          label: "Monza static",
          value: "MB",
        },
        {
          label: "Cremona static",
          value: "CR",
        },
        {
          label: "Lodi static",
          value: "LO",
        },
        {
          label: "Codogno static",
          value: "CD",
        },
        {
          label: "Como static",
          value: "CO",
          selected: true,
        },
      ],
    },
    {
      type: "select",
      label: "Input type SELECT with DYNAMIC data",
      layout: "1/3",
      id: "inputSelectUrl",
      name: "inputSelectUrl",
      placeholder: "Selezionare una città",
      validation: {
        required: {
          value: true,
          message: "Selezionare una città",
        },
      },
      dataLoading: true,
      fetchDataFromUrl: "https://run.mocky.io/v3/433d52dc-1854-43e3-a44d-7af43afe45e9",
      data: [],
    },
    {
      type: "select",
      label: "Input type SELECT with NO data",
      layout: "1/3",
      id: "inputSelectLoader",
      name: "inputSelectLoader",
      placeholder: "Selezionare una città",
      validation: {
        required: {
          value: false,
          message: "Selezionares una città",
        },
      },
      dataLoading: true,
      fetchDataFromUrl: "",
      data: [],
    },
    {
      type: "textarea",
      label: "Input type TEXTAREA",
      layout: "1/2",
      id: "textarea",
      name: "textarea",
      placeholder: "Inserire un messaggio",
      validation: {
        required: {
          value: true,
          message: "Fornire un messaggio",
        },
      },
    },
    {
      type: "checkbox",
      label: "Input type CHECKBOX",
      layout: "1/2",
      id: "checkbox",
      name: "checkbox",
      placeholder: 'Devi accettare la <a href="https://www.google.it" target="_blank">Privacy Policy</a>',
      validation: {
        required: {
          value: true,
          message: "Devi accettare la Privacy Policy",
        },
      },
    },
  ],
};

// NB: FormConfiguration is a type of FormGenerator
const formConfigSubmit: FormConfiguration = {
  title: "Fourth form generated - Submit handling",
  subTitle: "Gestione del submit con eventuali callback",
  submit: {
    endpoint: "http://localhost:5000/formSubmit",
    method: "POST",
    backend: true,
    onSubmit: (data: any) => {
      return data;
    },
  },
  buttonSubmit: {
    text: "Registrati",
    loading: true,
    dom: "button",
    block: false,
    layout: "1/3",
    class: "custom-submit-class",
    id: "submitID",
  },
  fields: [
    {
      type: "text",
      label: "Nome",
      layout: "1/3",
      id: "firstName",
      name: "firstName",
      placeholder: "Inserisci il tuo nome",
      validation: {
        required: true,
        message: "Devi inserire il tuo nome",
      },
      autocomplete: "off",
    },
    {
      type: "text",
      label: "Cognome",
      layout: "1/3",
      id: "lastName",
      name: "lastName",
      placeholder: "Inserisci il tuo cognome",
      validation: {
        required: true,
        message: "Devi inserire il tuo cognome",
      },
      autocomplete: "off",
    },
    {
      type: "password",
      label: "Password",
      layout: "1/3",
      id: "password",
      name: "password",
      placeholder: "Inserire una password",
      validation: {
        required: true,
      },
      autocomplete: "current-passowrd",
    },
  ],
};