//api test 
//First of all connect to mongoBD 
//Then create, find, update and delete a phone fron databas
//Finally test endpoints 

const mongoose = require('mongoose');
const config = require('../config/config');
const Phone = require('../models/phone'); // Phone BD Model
const assert = require('assert');
const request = require('supertest');
const app = require('../index');
const expect = require('chai').expect;

describe('api-test', () => { 
    //Called hooks which runs before something.
    before(function() {
        mongoose.monPromise = global.Promise;
        mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }); 
        mongoose.connection
            .once('open', () => console.log('Connected!'))
            .on('error', (error) => {
                console.warn('Error : ',error);
            });
    })

    //Hook called in the end to close mongo db connection
    after(function() {
        mongoose.connection.close();
    });

    
    //Test that we can create documents in mongodb
    describe('Creating documents', () => {
        it('creates a phone', (done) => {
            const newPhone = new Phone({name: 'Phone', manufacturer:'Manufacturer', description:'lorem ipsum'});
            Phone.create(newPhone) 
                .then((phone) => {
                    assert(!Phone.isNew); 
                    done();
                });
        });
    });

    //so we can create a document we are going to find a mongodb document 
    describe('Geting a document', () => {
        it('get a phone', (done) => {
            Phone.findOne({ name: 'Phone' })
                .then((phone) => {
                    assert(phone.name === 'Phone'); 
                    done();
                });
        });
    });

    //we can find a document so test to update a document
    describe('Updating a document', () => {
        it('update a phone', (done) => {
            Phone.findOneAndUpdate( { name: 'Phone' }, { name: 'Phone2' })
                .then(() => {
                    done();
                });
        });
    });

    //we can update a document so test to delete a document
    describe('Deleting a document', () => {
        it('delete a phone', (done) => {
            Phone.findOneAndDelete({ name: 'Phone2' })
                .then((phone) => {
                    done();
                });
        });
    });

    

//test endpoints
    describe('GET /phones route to get all phones', () => {
        it('get all phones', (done) => {
            request(app).get('/phones')
                .then((res)=>{
                    expect(res.statusCode).to.equal(200);
                    expect('Content-Type', /json/);
                    done()
                })
                .catch((err) => done(err))
        })
        it('route invented', (done) => {
            request(app).get('/asdfasf')
                    .then((res)=>{
                        expect(res.statusCode).to.equal(404);
                        done()
                    })
                    .catch((err) => done(err))
        })
    });

    //create a phone
    describe('POST /phones', function() {
        it('responds with json', function(done) {
        request(app)
            .post('/phones')
            .send({ name: 'PhoneTest', manufacturer:'ManufacturerTest', description:'lorem ipsum Test'})
            .set('Accept', 'application/json')
            .expect(201)
            .end(function(err, res) {
            if (err) return done(err);
            done();
            });
        });
    });

    //GET BY ID

    //UPDATE

    //DELETE


});




    