export default function validateForm (values) {
    let errors = {};
  
    if (!values.name.trim()) {
      errors.name = 'Tenés que ingresar tu nombre';
    }

    if (!values.phone.trim()) {
        errors.phone = 'Tenés que ingresar numero de telefono';
      } else if (!/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/.test(values.phone)) {
        errors.phone = 'Debes ingresar un numero de teléfono válido';
      }

    if (!values.email) {
      errors.email = 'Debes ingresar un correo electrónico';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'El correo electrónico es inválido';
    }

    if (!values.emailRepeat) {
        errors.emailRepeat = 'Debes repetir un correo electrónico';
      } else if (values.email !== values.emailRepeat) {
        errors.emailRepeat = 'Los correos electrónicos no coinciden';
      }

    return errors;
  }
