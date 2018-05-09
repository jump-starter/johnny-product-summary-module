const fs = require('fs');
const faker = require('faker');

const seedMongo = () => {
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let projectCount = 1;
  let userCount = 1;

  const numBatches = 1e3;
  for (let i = 0; i < numBatches; i += 1) {
    let Projects = [];
    let Users = [];

    const newProjects = 1e4;
    for (let j = 0; j < newProjects; j += 1) {
      let totalPledgeAmt = 0;
      const Pledges = [];
      const newUsers = getRndInteger(0, 20);
      for (let k = 0; k < newUsers; k += 1) {
        const user = {
          _id: userCount + k,
          created_at: faker.date.past(1, '2016-01-01').toISOString().slice(0, 19).replace('T', ' '),
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: faker.address.countryCode(),
          avatar_url: `https://s3.amazonaws.com/jumpstarter-pics/headshot${getRndInteger(1, 100)}.jpg`,
        };
        Users.push(user);
        const userId = userCount + k;
        const pledgeAmt = getRndInteger(0, 1000);
        totalPledgeAmt += pledgeAmt;
        Pledges.push({ user_id: userId, pledge_amt: pledgeAmt });
      }
      userCount += newUsers;

      const newFaqsCount = getRndInteger(0, 10);
      // const Faqs = [];
      // for (let l = 0; l < newFaqsCount; l += 1) {
      //   const faq = {
      //     created_at: faker.date.past(1, '2018-01-01').toISOString().slice(0, 19).replace('T', ' '),
      //     title: faker.lorem.sentence(),
      //     description: faker.lorem.sentences(),
      //   };
      //   Faqs.push(faq);
      // }

      const newUpdatesCount = getRndInteger(0, 10);
      // const Updates = [];
      // for (let l = 0; l < newUpdatesCount; l += 1) {
      //   const update = {
      //     created_at: faker.date.past(1, '2018-01-01').toISOString().slice(0, 19).replace('T', ' '),
      //     title: faker.lorem.sentence(),
      //     description: faker.lorem.sentences(),
      //   };
      //   Updates.push(update);
      // }

      const newCommentsCount = getRndInteger(0, 10);
      // const Comments = [];
      // for (let l = 0; l < newCommentsCount; l += 1) {
      //   const comment = {
      //     created_at: faker.date.past(1, '2018-01-01').toISOString().slice(0, 19).replace('T', ' '),
      //     description: faker.lorem.sentences(),
      //     user_id: getRndInteger(1, userCount),
      //   };
      //   Comments.push(comment);
      // }

      const project = {
        _id: projectCount + j,
        creator_id: getRndInteger(userCount, userCount + newUsers),
        created_at: faker.date.past(1, '2017-01-01').toISOString().slice(0, 19).replace('T', ' '),
        end_date: faker.date.future(1).toISOString().slice(0, 19).replace('T', ' '),
        title: faker.commerce.productName(),
        description: faker.lorem.sentences(),
        category: faker.commerce.department(),
        city: faker.address.city(),
        state: faker.address.state(),
        country: faker.address.countryCode(),
        image_url: `https://s3.amazonaws.com/jumpstarter-pics/product${getRndInteger(1, 1000)}.jpg`,
        faqs_count: newFaqsCount,
        // faqs: Faqs,
        updates_count: newUpdatesCount,
        // updates: Updates,
        comments_count: newCommentsCount,
        // comments: Comments,
        total_pledge_amt: totalPledgeAmt,
        pledges_count: Pledges.length,
        pledges: Pledges,
      };
      Projects.push(project);
    }
    projectCount += newProjects;

    if (i === 0) {
      Projects = `[${JSON.stringify(Projects).slice(1, -1)}`;
      Users = `[${JSON.stringify(Users).slice(1, -1)}`;
      // Faqs = `[${JSON.stringify(Faqs).slice(1, -1)}`;
      // Updates = `[${JSON.stringify(Updates).slice(1, -1)}`;
      // Comments = `[${JSON.stringify(Comments).slice(1, -1)}`;
    } else if (i === numBatches - 1) {
      Projects = `, ${JSON.stringify(Projects).slice(1, -1)}]`;
      Users = `, ${JSON.stringify(Users).slice(1, -1)}]`;
      // Faqs = `, ${JSON.stringify(Faqs).slice(1, -1)}]`;
      // Updates = `, ${JSON.stringify(Updates).slice(1, -1)}]`;
      // Comments = `, ${JSON.stringify(Comments).slice(1, -1)}]`;
    } else {
      Projects = `,${JSON.stringify(Projects).slice(1, -1)}`;
      Users = `,${JSON.stringify(Users).slice(1, -1)}`;
      // Faqs = `,${JSON.stringify(Faqs).slice(1, -1)}`;
      // Updates = `,${JSON.stringify(Updates).slice(1, -1)}`;
      // Comments = `,${JSON.stringify(Comments).slice(1, -1)}`;
    }
    console.log(projectCount);
    fs.appendFileSync('./db/Projects.json', Projects);
    fs.appendFileSync('./db/Users.json', Users);
    // fs.appendFileSync('./db/Faqs.json', Faqs);
    // fs.appendFileSync('./db/Updates.json', Updates);
    // fs.appendFileSync('./db/Comments.json', Comments);
  }
};

module.exports = seedMongo;
