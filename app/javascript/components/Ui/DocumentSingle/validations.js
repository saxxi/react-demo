export default function validateDocument(data, props) {
  const errors = {};
  if(!data.name) {
    errors.name = 'Required';
  }
  return errors;
}
