document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#form");

  const dogList = document.querySelector('#dog-list');

  const handleFormSubmit = (event) => {
    event.preventDefault()


    const type = document.createElement('h3');
    const name = document.createElement('h3');
    const rating = document.createElement('h3');
    const details = document.createElement('h4');
    const div = document.createElement('div');

    dogList.appendChild(div);

    div.classList.add("flexy-div");

    type.textContent = `Type: ${event.target.type.value}`
    name.textContent = `Name: ${event.target.name.value}`
    rating.textContent = `How good? ${event.target.rating.value}/10`
    details.textContent = `${event.target.details.value}`

    div.appendChild(type);
    div.appendChild(name);
    div.appendChild(rating);
    div.appendChild(details);

    event.target.reset()
  };

  form.addEventListener('submit', handleFormSubmit);

  const button = document.querySelector('#delete-button');

  const handleDelete = (event) => {
    event.preventDefault()
    while(dogList.firstChild) {
      dogList.removeChild(dogList.firstChild);
    };
  };

  button.addEventListener('click', handleDelete);
});
