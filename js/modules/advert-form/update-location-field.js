export default function updateLocationField(coords) {
  const { latitude, longitude } = coords;
  const addressElement = document.querySelector('input[name="address"]');

  addressElement.value = `${latitude}, ${longitude}`;

  return addressElement;
}
