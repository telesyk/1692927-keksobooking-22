export default function updateLocationField(formElement, coords) {
  const { latitude, longitude } = coords;
  const addressElement = formElement.querySelector('input[name="address"]');

  addressElement.value = `${latitude}, ${longitude}`;

  return addressElement;
}
