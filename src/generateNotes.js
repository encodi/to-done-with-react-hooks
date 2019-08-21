let faker = require("faker");

let generateNotes = () => {
  let notes = [];

  for (let id = 0; id < 30; id++) {
    let title = faker.lorem.sentence(5);
    let description = faker.lorem.paragraphs(5);
    let status = faker.random.arrayElement(["Pending", "Done"]);

    notes.push({
      id: id,
      title: title,
      description: description,
      status: status
    });
  }

  return { notes: notes };
};

module.exports = generateNotes;
