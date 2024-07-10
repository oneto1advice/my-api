const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/app');
const User = require('../src/models/userModel');
const dotenv = require('dotenv');

dotenv.config();
beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const PORT = process.env.TEST_PORT || 3001;
  server = app.listen(PORT);
});

// afterEach(async () => {
//     await mongoose.connection.dropDatabase(); // Drop the test database after each test
//   });

afterEach(async () => {
  await User.deleteMany();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('User CRUD operations', () => {
  it('should create a new user', async () => {
    const response = await request(app)
      .post('/v1/user')
      .send({
        name: 'Sandhya',
        email: 'sandhya@sandhya.com',
        age: 32,
      });

    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Sandhya');
    expect(response.body.email).toBe('sandhya@sandhya.com');
    expect(response.body.age).toBe(32);
  });

  // it('should fetch all users', async () => {
  //   await User.create({ name: 'Sunder', email: 'sunder@sunder.com', age: 32 });

  //   const response = await request(app).get('/v1/users');
  

  //   expect(response.status).toBe(200);
  //   expect(response.body.length).toBe(1);
  // });

  // it('should fetch a single user by ID', async () => {
  //   const user = await User.create({ name: 'Sunder', email: 'sunder@sunder.com', age: 32 });
  //   console.log(user)
  //   const response = await request(app).get(`/v1/user/${user._id}`);

  //   expect(response.status).toBe(200);
  //   expect(response.body.name).toBe('Sunder');
  //   expect(response.body.email).toBe('sunder@sunder.com');
  // });

  // it('should update a user by ID', async () => {
  //   const user = await User.create({ name: 'Sunder', email: 'sunder@sunder.com', age: 32 });

  //   const response = await request(app)
  //     .put(`/v1/user/${user._id}`)
  //     .send({ name: 'Jane Doe' });

  //   expect(response.status).toBe(200);
  //   expect(response.body.name).toBe('Jane Doe');
  // });

  // it('should delete a user by ID', async () => {
  //   const user = await User.create({ name: 'Sunder', email: 'sunder@sunder.com', age: 32 });

  //   const response = await request(app).delete(`/v1/user/${user._id}`);

  //   expect(response.status).toBe(200);
  // });
 });
