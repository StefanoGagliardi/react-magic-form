# React form generator

**Autore:** [Stefano Gagliardi](mailto:stefano.gagliardi@sitisrl.it)  
**Versione:** 0.2.0  
**NPM:** react-magic-form
**Contesto:** Ricerca e sviluppo  
**DEMO:** [Demo sul mio sito personale, qui.](https://gagliardistefano.it/react-form/index.html)
**Coverage:** Non disponibile

**Obbiettivo:** Creare un plugin per generare e gestire form tramite un solo oggetto javascript senza dover scrivere nemmeno una riga di DOM / View. Ci si vuole basare su [React Hook Form](https://react-hook-form.com/) per vari motivi.

L'esigenza nasce per React Native ma per comodità di sviluppo parte a svilupparlo da template blank typescript per web. Il codice è lo stesso ad eccezzione della parte di Render (grafica).

Ho deciso di fare una repo in quanto è un progetto che voglio completare, sarà molto modificato col tempo, permette a più persone del team di accederci ecc.

**Linee guida documentazione codice:** [JSDOC](https://jsdoc.app/)
**NPM nome scelto disponibile:** react-magic-form

## Get started - v.0.2.0

**ES5 Javascript build:**

1. `npm install react-magic-form`

**Typescript support:**

1. `npm install @types/react-magic-form`

### Primo utilizzo

Esempio su come utilizzare il componente con supporto a Typescript per la generazione di un
semplice form che utilizza: Griglia dinamica, diverse validazione, errori personalizzati

**Importazione e configurazione:**

```ts
import { FormConfiguration } from 'FormGenerator';
import FormGenerator from '../components/FormGenerator/FormGenerators';

export const FormPage: React.FC = (): ReactElement => {
  const formConfig: FormConfiguration = {
    title: 'First form generated',
    subTitle: "My first subtitle for my form generator. \n I'ms so",
    submit: {
      endpoint: 'http://localhost:5000/formSubmit',
      method: 'POST',
      backend: true,
      onSubmit: (data: any) => {
        return data;
      },
    },
    buttonSubmit: {
      text: 'Registrati',
      loading: true,
      dom: 'button',
      block: false,
      layout: '1/3',
      class: 'custom-submit-class',
      id: 'submitID',
    },
    fields: [
      {
        type: 'email',
        label: 'Indirizzo email',
        layout: '1/2',
        id: 'email',
        name: 'email',
        placeholder: "Inserire l'indirizzo email",
        validation: {
          required: true,
        },
      },
      {
        type: 'email',
        label: 'Ripetere indirizzo email',
        layout: '1/2',
        id: 'repeatEmail',
        name: 'repeatEmail',
        placeholder: "Ripetere l'indirizzo email",
        validation: {
          required: {
            value: false,
            message: 'Il campo ripeti email è richeisto',
          },
        },
      },
      {
        type: 'text',
        label: 'Nome',
        layout: '1/3',
        id: 'firstName',
        name: 'firstName',
        placeholder: 'Inserire il nome',
        validation: {
          required: true,
          minLength: 2,
          maxLength: 15,
        },
      },
      {
        type: 'text',
        label: 'Cognome',
        layout: '1/3',
        id: 'lastName',
        name: 'lastName',
        placeholder: 'Inserire il cognome',
        validation: {
          required: true,
          minLength: 2,
          maxLength: 15,
        },
      },
      {
        type: 'text',
        label: 'Telefono',
        layout: '1/3',
        id: 'phone',
        name: 'phone',
        placeholder: 'Inserire il telefono',
        validation: {
          required: true,
          pattern: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
        },
      },
    ],
  };

  return (
    <>
      <FormGenerator form={formConfig} />
    </>
  );
};
```

**Props componente:**

```ts
interface FormConfiguration {
  title: stirng; // Form title
  subTitle: string; // Form sub title
  buttonSubmit?: ButtonSubmit; // Submit buton config
  submit: Submit; // Submit action: callback, data ecc..
  fields: Field[]; // Array with form inputs
}
```

**Struttura dell'oggetto Field:**

```ts
declare type InputTypes = "text" | "email" | "password" | "select" | "textarea" | "checkbox";
declare type InputLayout = "1" | "1/2" | "1/3" | "1/4";

declare type Field = {
  type: InputTypes;
  label?: string;
  layout?: InputLayout;
  id: string;
  name: string;
  placeholder?: string;
  validation: FieldValidation;
  autocomplete?: string: // Default OFF
};

```

#### Regole di validazione

La struttura è ereditata da [react-hook-form](https://react-hook-form.com/api#register).
Sono concessi i seguenti metodi di validazione (per adattare la documentazione il tipo è leggermente diverso):

```ts
declare type FieldValidation = Partial<{
  required: string | boolean; //  Campo richeisto
  maxLength: number | string; // Lunghezza massima della stringa
  minLength: number | string; // Lunghezza minima della string
  min: number; // Validazione di numeri, valore > min
  max: number; // Validazione di numeri, valore < max
  pattern: number | string; // Espressione regolare da testare
}>;
```

Ci sono due diversi modi per dichiare la regola di validazione la differenza risiede nella gestione
del messaggio d'errore.  
Se usare il default o impostarne uno personalizzato:

**Messaggi di errore predefiniti:**

```ts
const defaultMessage = {
  required: 'Il campo è richiesto',
  min: `Il valore deve essere maggiore di ${min}`,
  max: `Il valore deve essere minore di ${max}`,
  minLength: `La lunghezza minima è {minLength} caratteri`,
  maxLength: `La lunghezza massimo è {maxLength} caratteri`,
  pattern: `Rispetare le regole di validazione`,
  validate: `Rispetare le regole di validazione`,
  equalTo: `I due campi devono coincidere`,
};
```

**Messaggi di errore personalizzati:**

```ts
const validation = {
  required: {
    value: true,
    message: "Messaggio di validazione personalizzato",
  },
  minLength: {
    value: 2,
    message: "La lunghezza minima è 2 caratteri",
  },
  validate: (value) => value === "myValue"
  // Compare two input values
  equalTo: {
    value: "email",
    message: "Le due email devono coincidere",
  },
};
```

**Consigli di utilizzo:**

1. Per rendere la regola "pattern" facoltativa bisogna impostare "required" a "false"
2. L'email viene validata con una Regex, per render l'input facoltativo impostare il controllore "required: false"

NB: Alcuni tipi di Typescript scritti nella documentazione sono stati semplificati rispeto al codice

##### Input type Select

Il componente HTML Select oltre a quelle alle props dell'input ha le seguenti proprietà:

```ts
// Interfaccia aggiungtiva input <selct />
declare type FieldSelect = {
  dataLoading?: boolean; // Spinner in overlay durante il caricamento. Default: true
  data?: FieldSelectData[]; // Array contenente le opzioni del <select />
  fetchDataFromUrl?: string; // Url per recuperare i dati che costituiscono "data?: FieldSelectData[];"
};

// Intercaccia per le ppzioni dell'elemento <select />
declare type FieldSelectData = {
  label: string; // Testo dell'opzione
  value: string; // Valore dell'opzione
  disabled?: boolean; // Elemento disabilitato
  selected?: boolean; // Elemento di default
};
```

**Placeholder:** Per i "select" il placeholder, se presente, sarà la prima opzione, non valida, del select.
**Validazione:** Si ammetta come validazione il metodo "required" con o senza messaggio di errore.

#### Submit

L'oggetto `submit: Submit;` è richiesto quando si istanzia il form. L'oggetto ha le seguenti proprietà:

```ts
declare type Submit = {
  // Endpoit (url) al quale effettuare la chiamata
  endpoint: string;

  // Metodo della chiamata
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';

  // Indicare se effetuare o meno la chiamata al backend
  backend: boolean;

  // Impostazioni del pulsante di "Submit" del form
  buttonSubmit?: ButtonSubmit;

  // Eventuale callback prima della chiamata (la callback deve ritornare i dati del form)
  onSubmit?: (data: any) => any;

  // Eventaule callback in caso di errore della chiamata
  errorCallback?: (error: any) => void;

  // Eventuale callback in caso di success
  successCallbacky?: (data: any) => void;
};

// Impostazioni (opzionali) del pulsante di submit
declare type ButtonSubmit = {
  // Testo del pulsante. Default: "Invia"
  text?: string;

  // Stato di loading del pulsante. Default: true
  loading?: boolean;

  // Tipo di elemento html da renderizzare. Default: "input
  dom?: 'input' | 'button';

  // Button style: button block. Default: false
  block: boolean;

  // Button layout columns. Default: "1/3"
  layout: '1/3';

  // Eventuali classi da aggiungere. Default: "fg__button-submit"
  class?: string;

  // Eventuale id da aggiungere. Default: ""
  id?: string; // Default: ""
};
```

#### Chiamate asincrone

Le chiamate di fetch (es. per i select) o la chiamata per il submit la response avrà la seguente struttura;
Dove `data` è l'intero contenuto di ritorno dal bakcend.

```ts
interface Response {
  status: boolean;
  data: any;
}
```