process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var shouldHttp = require('should-http');
var server = require('../app');
var Event = require('../routes/events');
var expect = chai.expect;

chai.use(chaiHttp);

describe('events', function(){

  it('should list all events on /events GET', function(done){
    chai.request(server)
      .get('/events')
      .end(function(err, res){
        console.log(res.body)
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        done();
      });
  });

  it('should add an event on /events POST', function(done){
    chai.request(server)
      .post('/events')
      .send({'title': 'fakeTitle', 'description': 'fakeDescription', 'time': '24/11/1993', 'location': 'kylesBed'})
      .end(function(err, res){
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('title');
        expect(res.body).to.have.property('description');
        expect(res.body).to.have.property('id');
        expect(res.body.title).to.equal('fakeTitle');
        expect(res.body.description).to.equal('fakeDescription');
        done();
      });
  });

  it('should get a SINGLE event on /event/<id> GET', function(done) {
    chai.request(server)
      .get('/events/4')
      .end(function(err, res){
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('title');
        expect(res.body).to.have.property('description');
        expect(res.body).to.have.property('id');
        expect(res.body.title).to.equal('fakeTitle');
        expect(res.body.description).to.equal('fakeDescription');
        done();
      });
  });

  it('should update a SINGLE event on /event/<id> PUT', function(done) {
    chai.request(server)
      .put('/events/1')
      .send({'title': 'newTitle', 'description': 'newDescription', 'time': '24/11/1993', 'location': 'kylesBed'})
      .end(function(err, res){
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should delete a SINGLE event on /event/<id> DELETE', function(done) {
    chai.request(server)
      .delete('/events/1')
      .end(function(err, res){
        expect(res).to.have.status(200);
        done();
      });
  });
});