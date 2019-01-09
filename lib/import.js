import { client, projectService } from './services'

var projectData = require(process.cwd() + '/data/project.json')

const importProjectSetup = (cData) => {
  const updateRequest = {
    uri: projectService.build(),
    method: 'POST',
    body: cData
  }

  client.execute(updateRequest)
    .then(result => console.log(result))
    .catch(error => console.log(error.body.errors))
}

projectData.forEach(element => {
    importProjectSetup(element)
})
