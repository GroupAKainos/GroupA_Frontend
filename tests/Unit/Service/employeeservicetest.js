const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const chai = require("chai");
const expect = chai.expect;
const EmployeeService = require ('../../../app/Service/Employee')
const jobroles ={
    jobName:"Test",
    jobResponsibility:"Test"
}
const jobcapabilities ={
  jobName:"Test Job",
  capabilityName:"Test Capability"
}

describe('EmployeeService', function () {
    describe('getViewJobRoles', function () {
        it('should return jobroles', async () => {
            var mock = new MockAdapter(axios);
    
            const data = jobroles;
    
            mock.onGet("http://localhost:8080/api/viewjobroles").reply(200, data);
    
            var results = await EmployeeService.viewjobroles();
            
            expect(results).to.deep.equal(jobroles)
          })

          it('should throw exception when 500 error returned from axios when calling viewJobRoles', async () => {
            var mock = new MockAdapter(axios);
    
            mock.onGet("http://localhost:8080/api/viewjobroles").reply(500);
    
            var error = await EmployeeService.viewjobroles();
            
            expect(error.message).to.equal('Failed to get job roles')
          })

})
describe('getViewJobCapabilities', function () {
  it('should return job capabilities', async () => {
      var mock = new MockAdapter(axios);

      const data = jobcapabilities;

      mock.onGet("http://localhost:8080/api/viewjobcapabilities").reply(200, data);

      var results = await EmployeeService.viewjobcapabilities();
      
      expect(results).to.deep.equal(jobcapabilities)
    })

    it('should throw exception when 500 error returned from axios when calling viewJobCapabilities', async () => {
      var mock = new MockAdapter(axios);

      const data = jobcapabilities;

      mock.onGet("http://localhost:8080/api/viewjobcapabilities").reply(500);

      var error = await EmployeeService.viewjobcapabilities();
      
      expect(error.message).to.equal('Failed to get job capabilities')
    })

})
})