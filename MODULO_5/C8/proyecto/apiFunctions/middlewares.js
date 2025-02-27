import {readFile, writeFile} from 'fs/promises'
export const middlewareLogs = async (req, res, next) => {
    const logs = await readFile('logs.json')
    const logsArray = JSON.parse(logs)
    const log ={
        method: req.method,
        url: req.url,
        body: req.body,
        date: new Date().toISOString()
    }
    logsArray.push(log)
    await writeFile('logs.json', JSON.stringify(logsArray), 'utf8')
    next()
}