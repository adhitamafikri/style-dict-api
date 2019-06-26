import path from 'path'
import { createPropertiesFile } from './create-properties-file'
const configPath = path.resolve(__dirname + '/../config')
const configFile = 'style-dictionary.json'

export function index(req, res) {
  console.log('indexx')
  res.json({
    message: 'This is where you can do shit with your style variables'
  })
}

export async function buildStyle(req, res) {
  const body = req.body
  var obj = {
    [body.style_category]: {
      [body.style_type]: {
        [body.style_item]: { value: body.style_value }
      }
    }
  }
  console.log('style obj', obj)
  console.log('style obj, stringified', JSON.stringify(obj))

  await createPropertiesFile(obj)
    .then(function() {
      const StyleDictionary = require('style-dictionary').extend(configPath + '/' + configFile)
      StyleDictionary.buildAllPlatforms()
    })
    .catch(function(err) {
      console.log(err)
    })

  res.json({
    message: 'All styles are built to the selected platforms'
  })
}
