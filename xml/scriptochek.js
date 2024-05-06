window.addEventListener('DOMContentLoaded', () => {
  fetch('xml/onas.xml')
  .then(function (response) {
      return response.text();
  })
  .then(function (xmlDocText) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlDocText, "text/xml");
      const MenuCards = xmlDoc.querySelectorAll('title');
      const tableBody = document.querySelector("main");
      MenuCards.forEach(function (student) {
          const scr = student.querySelector("image").textContent;
          const title = student.querySelector("headtitle").textContent;
          const text = student.querySelector("abzactz").textContent;
          tableBody.innerHTML += `
          <div>
            <img src="${scr}" alt="" />
            <h2>${title}</h2>
            <p>
              ${text}
            </p>
          </div>
      `;
      });
  })
  .catch(function (error) {
      console.error('Error fetching or parsing XML:', error);
  });
});
