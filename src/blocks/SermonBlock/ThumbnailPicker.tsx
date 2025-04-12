import * as youtube from '@googleapis/youtube'
import * as localAuth from '@google-cloud/local-auth'
import path from 'path'
import { promises as fs } from 'fs'

const ThumbnailPicker = async () => {
  async function fetchit() {
    try {
      const keyfilePath = path.join(process.cwd(), 'c3-ignite-54d5f36a4980.json')
      // console.log(await fs.readFile(keyfilePath))
      const auth = new youtube.auth.JWT({
        scopes: ['https://googleapis.com/auth/youtube'],
        keyFile: keyfilePath,
      })

      await auth.authorize()

      const client = youtube.youtube({
        version: 'v3',
        auth,
      })

      const res = await client.search.list({
        part: ['snippet'],
        order: 'date',
        // channelId: 'UCCUe6uwOaxyuvuVcAMli3SQ',
      })
      console.log(res)
    } catch (e) {
      // console.log(path.join(__dirname, '../c3-ignite-4337bfceff6f.json'))
      console.warn('Error: ', e)
    }
  }

  await fetchit()

  return <>{/* <button onClick={() => fetchit()}>Fetch!</button> */}</>
}

export default ThumbnailPicker
