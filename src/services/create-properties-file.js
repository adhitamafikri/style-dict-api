import path from 'path'
import fs from 'fs'
import { promisify } from 'util'
const fileName = path.resolve(__dirname + '/../style-dictionary/properties/color/sets.json')

// filesystem-related functions
const readFile = promisify(fs.writeFile)

/*
 * Create a .json file for style properties
 * @params {content} is a json object
*/
export async function createPropertiesFile(content) {
  console.log('Creating a json file for properties')
  await readFile(fileName, JSON.stringify(content), 'utf8')
}
